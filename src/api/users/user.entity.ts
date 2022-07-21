import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn( {
    type:'bigint',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false, default: false
  })
  Name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false, default: false
  })
  Email: string;

  @Column({type: 'timestamp', nullable: true, default: null })
  email_verified_at: Date;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false, default: false
  })
  Password: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true, default: null
  })
  Remember_token: string;

  @Column({type: 'timestamp', nullable: true, default: null})
  Created_at: Date;

  @Column({type: 'timestamp', nullable: true, default: null})
  Updated_at: Date;

}
