import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EstablishmentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'owner_id' })
    ownerId: string;

    @ManyToOne(() => User, (user) => user.establishment, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'owner_id' })
    owner: User;
}