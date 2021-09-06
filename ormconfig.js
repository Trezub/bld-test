module.exports =
    process.env.NODE_ENV === 'production'
        ? {
              type: process.env.DB_CONNECTION,
              host: process.env.DB_HOST,
              port: process.env.DB_PORT,
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_DATABASE,
              logging: false,
              synchronize: false,
              entities: ['dist/models/**/*.js'],
              migrations: ['dist/migrations/**/*.js'],
              cli: {
                  entitiesDir: 'dist/models',
                  migrationsDir: 'dist/migrations',
              },
          }
        : {
              type: process.env.DB_CONNECTION,
              host: process.env.DB_HOST,
              port: process.env.DB_PORT,
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_DATABASE,
              logging: false,
              synchronize: false,
              entities: ['src/models/**/*.ts'],
              migrations: ['src/migrations/**/*.ts'],
              cli: {
                  entitiesDir: 'src/models',
                  migrationsDir: 'src/migrations',
              },
          };
