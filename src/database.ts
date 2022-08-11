import dotenv from 'dotenv'
import { Pool } from 'pg'
import { connected } from 'process'

dotenv.config()

const { PG_HOST, PG_DB, PG_DB_test, PG_USER, PG_PASSWORD, ENV } = process.env
let cli: Pool
if (ENV === 'dev') {
  cli = new Pool({
    host: PG_HOST,
    database: PG_DB,
    user: PG_USER,
    password: PG_PASSWORD
  })
} else if (ENV === 'test') {
  cli = new Pool({
    host: PG_HOST,
    database: PG_DB_test,
    user: PG_USER,
    password: PG_PASSWORD
  })
} else {
  cli = new Pool({
    host: PG_HOST,
    database: PG_DB_test,
    user: PG_USER,
    password: PG_PASSWORD
  })
}
cli.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})
const client = cli

export default client
