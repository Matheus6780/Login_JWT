import path from 'path'

// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      user: "postgres",
      database: "login_jwt_2",
      password: "mamute"
    },
    migrations: {
      directory: path.resolve(__dirname, 'database', 'migrations'),
      tableName: 'knex_migrations',
      extension: 'ts'
    },
    seeds: {
      directory: path.resolve(__dirname, 'database', 'seeds'),
      extension: 'ts'
    }

  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
