import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/AWS_New_Batch_Trainee_Program/' : '/',
  plugins: [react()],
}))
