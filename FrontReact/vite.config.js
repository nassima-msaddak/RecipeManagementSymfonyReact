import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// nassima : très important : infos pour ce fichier
// vite.config.js :
//est exécuté par Node.js
// sert à configurer Vite
// ❌ n’est PAS importable dans ton code React
// 👉 Le code React ne voit jamais ce fichier.



// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
})
