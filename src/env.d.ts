/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_GITHUB_REPO: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }