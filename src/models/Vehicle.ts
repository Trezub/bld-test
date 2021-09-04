import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Driver from './Driver';

@Entity({ name: 'vehicles' })
export default class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    plate: string;

    @ManyToOne(() => Driver, (driver) => driver.vehicles)
    @JoinColumn({ name: 'driverId', referencedColumnName: 'id' })
    driver: Driver;
}
