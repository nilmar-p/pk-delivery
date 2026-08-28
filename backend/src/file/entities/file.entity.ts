import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 500 })
    path: string;

    @Column({ type: 'varchar', length: 10 })
    type: string;

    @CreateDateColumn()
    createdAt: Date;
}