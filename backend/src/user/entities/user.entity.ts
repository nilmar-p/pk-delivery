import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../enums/user-role.enum";
import { UserFileEntity } from "../../file/entities/user-file.entity";


@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 100,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 200,
        select: false
    })
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.CUSTOMER,
    })
    role: UserRole;

    @OneToMany(() => UserFileEntity, (userFile) => userFile.user, { cascade: true })
    userFile: UserFileEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}