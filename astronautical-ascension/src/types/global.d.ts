// src/types/global.d.ts
interface Window {
    dataLayer: any[];
  }

  declare global {
    interface Window {
      cmp_getlang?: (a?: boolean) => string | undefined;      // Funktion, die einen String zurückgibt
      cmp_getlangs?: () => string[];                         // Funktion, die ein Array von Strings zurückgibt
      cmp_getPageLangs?: () => string[];                     // Funktion, die ein Array von Strings zurückgibt
      cmp_customlanguages?: Record<string, unknown>;         // Optionales Objekt für benutzerdefinierte Sprachen
    }
  }