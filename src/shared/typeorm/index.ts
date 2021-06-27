import { createConnection } from 'typeorm'

if (process.env.NODE_ENV === 'production') {
  createConnection({
    type: 'postgres',
    url: 'postgres://uzyqhktp:BS8NoM814eGLeeQwdQr6gbtlczFTdSIT@tuffi.db.elephantsql.com/uzyqhktp',
    synchronize: true,
    logging: true,
    migrations: [
      './dist/shared/typeorm/migrations/*.js'
    ],
    entities: [
      './dist/modules/**/infra/typeorm/entities/*.js'
    ],
    cli: {
      migrationsDir: './src/shared/typeorm/migrations'
    }
  })
} else {
  createConnection()
}
