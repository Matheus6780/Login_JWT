const knexfile = require('../knexfile')
import knex from 'knex'

const connection = knex(knexfile.development)

export default connection