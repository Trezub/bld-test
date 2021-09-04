import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Vehicle from './Vehicle';

@Entity({ name: 'drivers' })
export default class Driver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cep: string;

    @OneToMany(() => Vehicle, (vehicle) => vehicle.driver)
    vehicles: Vehicle[];
}
