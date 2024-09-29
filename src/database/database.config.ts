const dotenv = require('dotenv');
dotenv.config();

import { SequelizeOptions } from 'sequelize-typescript';
import { Dialect } from 'sequelize';

export const sequelizeConfig: SequelizeOptions = {
  dialect: 'mysql' as Dialect,
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'your_database',
  logging: false,
};
