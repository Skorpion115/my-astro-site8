window.cmp_getsupportedLangs = function () {
  var b = [
    "DE",
    "EN",
    "FR",
    "IT",
    "NO",
    "DA",
    "FI",
    "ES",
    "PT",
    "RO",
    "BG",
    "ET",
    "EL",
    "GA",
    "HR",
    "LV",
    "LT",
    "MT",
    "NL",
    "PL",
    "SV",
    "SK",
    "SL",
    "CS",
    "HU",
    "RU",
    "SR",
    "ZH",
    "TR",
    "UK",
    "AR",
    "BS",
    "JA",
    "CY",
  ];
  if ("cmp_customlanguages" in window) {
    for (var a = 0; a < window.cmp_customlanguages.length; a++) {
      b.push(window.cmp_customlanguages[a].l.toUpperCase());
    }
  }
  return b;
};
window.cmp_getRTLLangs = function () {
  var a = ["AR"];
  if ("cmp_customlanguages" in window) {
    for (var b = 0; b < window.cmp_customlanguages.length; b++) {
      if (
        "r" in window.cmp_customlanguages[b] &&
        window.cmp_customlanguages[b].r
      ) {
        a.push(window.cmp_customlanguages[b].l);
      }
    }
  }
  return a;
};
window.cmp_getlang = function (a) {
  if (typeof a != "boolean") {
    a = true;
  }
  if (
    a &&
    typeof cmp_getlang.usedlang == "string" &&
    cmp_getlang.usedlang !== ""
  ) {
    return cmp_getlang.usedlang;
  }
  return window.cmp_getlangs()[0];
};
window.cmp_extractlang = function (a) {
  if (a.indexOf("cmplang=") != -1) {
    a = a.substr(a.indexOf("cmplang=") + 8, 2).toUpperCase();
    if (a.indexOf("&") != -1) {
      a = a.substr(0, a.indexOf("&"));
    }
  } else {
    a = "";
  }
  return a;
};
window.cmp_getlangs = function () {
  var h = window.cmp_getsupportedLangs();
  var g = [];
  var a = location.hash;
  var f = location.search;
  var e = "cmp_params" in window ? window.cmp_params : "";
  if (cmp_extractlang(a) != "") {
    g.push(cmp_extractlang(a));
  } else {
    if (cmp_extractlang(f) != "") {
      g.push(cmp_extractlang(f));
    } else {
      if (cmp_extractlang(e) != "") {
        g.push(cmp_extractlang(e));
      } else {
        if ("cmp_setlang" in window && window.cmp_setlang != "") {
          g.push(window.cmp_setlang.toUpperCase());
        } else {
          if ("cmp_langdetect" in window && window.cmp_langdetect == 1) {
            g.push(window.cmp_getPageLang());
          } else {
            g = window.cmp_getBrowserLangs();
          }
        }
      }
    }
  }
  var c = [];
  for (var d = 0; d < g.length; d++) {
    var b = g[d].toUpperCase();
    if (b.length < 2) {
      continue;
    }
    if (h.indexOf(b) != -1) {
      c.push(b);
    } else {
      if (b.indexOf("-") != -1) {
        b = b.substr(0, 2);
      }
      if (h.indexOf(b) != -1) {
        c.push(b);
      }
    }
  }
  if (
    c.length == 0 &&
    typeof cmp_getlang.defaultlang == "string" &&
    cmp_getlang.defaultlang !== ""
  ) {
    return [cmp_getlang.defaultlang.toUpperCase()];
  } else {
    return c.length > 0 ? c : ["EN"];
  }
};
window.cmp_getPageLangs = function () {
  var a = window.cmp_getXMLLang();
  if (a != "") {
    a = [a.toUpperCase()];
  } else {
    a = [];
  }
  a = a.concat(window.cmp_getLangsFromURL());
  return a.length > 0 ? a : ["EN"];
};
window.cmp_getPageLang = function () {
  var a = window.cmp_getPageLangs();
  return a.length > 0 ? a[0] : "";
};
window.cmp_getLangsFromURL = function () {
  var c = window.cmp_getsupportedLangs();
  var b = location;
  var m = "toUpperCase";
  var g = b.hostname[m]() + ".";
  var a = "/" + b.pathname[m]() + "/";
  a = a.split("_").join("-");
  a = a.split("//").join("/");
  a = a.split("//").join("/");
  var f = [];
  for (var e = 0; e < c.length; e++) {
    var j = a.substring(0, c[e].length + 2);
    if (g.substring(0, c[e].length + 1) == c[e] + ".") {
      f.push(c[e][m]());
    } else {
      if (c[e].length == 5) {
        var k = c[e].substring(3, 5) + "-" + c[e].substring(0, 2);
        if (g.substring(0, k.length + 1) == k + ".") {
          f.push(c[e][m]());
        }
      } else {
        if (j == "/" + c[e] + "/" || j == "/" + c[e] + "-") {
          f.push(c[e][m]());
        } else {
          if (
            j == "/" + c[e].replace("-", "/") + "/" ||
            j == "/" + c[e].replace("-", "/") + "/"
          ) {
            f.push(c[e][m]());
          } else {
            if (c[e].length == 5) {
              var k = c[e].substring(3, 5) + "-" + c[e].substring(0, 2);
              var h = a.substring(0, k.length + 1);
              if (h == "/" + k + "/" || h == "/" + k.replace("-", "/") + "/") {
                f.push(c[e][m]());
              }
            }
          }
        }
      }
    }
  }
  return f;
};
window.cmp_getXMLLang = function () {
  var c = document.getElementsByTagName("html");
  if (c.length > 0) {
    c = c[0];
  } else {
    c = document.documentElement;
  }
  if (c && c.getAttribute) {
    var a = c.getAttribute("xml:lang");
    if (typeof a != "string" || a == "") {
      a = c.getAttribute("lang");
    }
    if (typeof a == "string" && a != "") {
      a = a.split("_").join("-").toUpperCase();
      var b = window.cmp_getsupportedLangs();
      return b.indexOf(a) != -1 || b.indexOf(a.substr(0, 2)) != -1 ? a : "";
    } else {
      return "";
    }
  }
};
window.cmp_getBrowserLangs = function () {
  var c = "languages" in navigator ? navigator.languages : [];
  var b = [];
  if (c.length > 0) {
    for (var a = 0; a < c.length; a++) {
      b.push(c[a]);
    }
  }
  if ("language" in navigator) {
    b.push(navigator.language);
  }
  if ("userLanguage" in navigator) {
    b.push(navigator.userLanguage);
  }
  return b;
};
(function () {
  var d = document.createElement("script");
  d.type = "text/javascript";
  d.async = true;
  d.src =
    "https://d.delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&api=html&design=0&rk=GDPR&divid=cmpvendorlist&l=" +
    cmp_getPageLang();

  if (document.head && document.head.appendChild) {
    document.head.appendChild(d);
  } else if (document.body) {
    document.body.appendChild(d);
  } else if (document.currentScript && document.currentScript.parentElement) {
    document.currentScript.parentElement.appendChild(d);
  } else {
    var s = document.getElementsByTagName("script");
    s = s[s.length - 1];
    s.parentElement.appendChild(d);
  }
})();
