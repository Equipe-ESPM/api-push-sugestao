import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'IdentidadeConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.DB_HOST || '172.30.0.4',
        port: parseInt(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || '123456',
        database: process.env.DB_NAME || 'identidade_cidada',
        schema: process.env.DB_SCHEMA || 'public',
        entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
        dropSchema: false,
        synchronize: false,
      }),
  },
];
