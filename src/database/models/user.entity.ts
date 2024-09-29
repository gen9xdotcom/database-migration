
import {
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';


@Table
export class User extends Model<User> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

}
