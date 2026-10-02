import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'

// Serves whichever PDF the CMS "Resume" field points to at a stable
// /Rahul-Setia-Resume.pdf, so the link never changes with the uploaded filename.
function resumeAlias() {
  const resumeFile = () => {
    const { resume } = JSON.parse(fs.readFileSync('src/content/site.json', 'utf8'))
    return resume?.startsWith('/') ? `public${resume}` : null
  }

  return {
    name: 'resume-alias',
    configureServer(server) {
      server.middlewares.use('/Rahul-Setia-Resume.pdf', (req, res, next) => {
        const file = resumeFile()
        if (!file) return next()
        res.setHeader('Content-Type', 'application/pdf')
        fs.createReadStream(file).pipe(res)
      })
    },
    generateBundle() {
      const file = resumeFile()
      if (file) this.emitFile({ type: 'asset', fileName: 'Rahul-Setia-Resume.pdf', source: fs.readFileSync(file) })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), resumeAlias()],
})
