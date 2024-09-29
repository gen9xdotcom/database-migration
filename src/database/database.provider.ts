import { Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from './constant';
import { sequelizeConfig } from './database.config';
import { User } from './models/user.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        ...sequelizeConfig,
        logging: Logger.log,
        define: {
          timestamps: true,
          underscored: true,
          paranoid: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at',
          deletedAt: 'deleted_at',
          charset: 'utf8mb4',
        },
        retry: {
          max: 20,
          match: [
            /ConnectionError/,
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/,
            /SequelizeConnectionAcquireTimeoutError/,
            /Connection terminated unexpectedly/,
          ],
        },
      });
      sequelize.addModels([
        User
      ]);
      await sequelize.sync();

      return sequelize;
    },
  },
];
