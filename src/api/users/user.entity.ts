import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { hash } from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    default: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    default: false,
  })
  email: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  email_verified_at: Date;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    default: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  remember_token: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true, default: null })
  updated_at: Date;

  //@BeforeInsert()
  //@BeforeUpdate()
  //async hashPassword() {
  //if (!this.password) {
  //    return;
  // }
  //  this.password = await hash(this.password, 10);
  //}
}
