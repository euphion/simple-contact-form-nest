import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FormEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  message: string;
}
