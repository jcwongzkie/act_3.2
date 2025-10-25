const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
  root: '.', // point to current folder since index.html is in root
  publicDir: 'static',
  base: './',
  server: {
    host: true,
    open: !isCodeSandbox
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
}
