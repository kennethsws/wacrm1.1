const http = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = Number.parseInt(process.env.PORT || process.env.NODE_PORT || '3000', 10)
const hostname = process.env.HOSTNAME || '0.0.0.0'

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => {
        handle(req, res)
      })
      .listen(port, hostname, () => {
        console.log(`Server ready on http://${hostname}:${port}`)
      })
  })
  .catch((error) => {
    console.error('Failed to start Next.js server', error)
    process.exit(1)
  })
