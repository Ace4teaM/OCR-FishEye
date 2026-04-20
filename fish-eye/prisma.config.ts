// prisma.config.ts
import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: 'file:./prisma/dev.db', // Définition de l'URL SQLite ici 
  },
  migrations: {
    // On indique à Prisma d'utiliser Node pour exécuter votre fichier seed.js
    seed: 'node seed.js', 
  },
});