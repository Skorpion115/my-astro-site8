/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    SITE_URL: string;
    // Weitere Umgebungsvariablen hier hinzufügen
  }
  
  interface ImportMeta {
    env: ImportMetaEnv;
  }
