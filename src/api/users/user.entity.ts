import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn( {
    type:'bigint',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  email: string;

  @Column({type: 'timestamp', nullable: true})
  email_verified_at: Date;

  @Column({
    type: 'varchar',
    length: 255
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true
  })
  remember_token: string;

  @Column({type: 'timestamp', nullable: true})
  created_at: Date;

  @Column({type: 'timestamp', nullable: true})
  updated_at: Date;

}
