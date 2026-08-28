import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { FileEntity } from "./file.entity";

@Entity()
export class UserFileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, (user) => user.userFile, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @ManyToOne(() => FileEntity, {
        eager: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'file_id' })
    file: FileEntity;
}