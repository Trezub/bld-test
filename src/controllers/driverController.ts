import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Driver from '../models/Driver';
import { Address, getAddressFromCEP } from '../services/viacep';

export default {
    async create(req: Request, res: Response) {
        const { name, postalCode } = req.body;
        const driverRepository = getRepository(Driver);
        try {
            const driver = driverRepository.create({
                cep: postalCode,
                name,
            });
            await driverRepository.insert(driver);
            res.status(201).json(driver);
        } catch (err) {
            console.error(`Error creating a new driver: ${err}`);
            res.status(500).send();
        }
    },
    async index(req: Request, res: Response) {
        const driverRepository = getRepository(Driver);
        try {
            const drivers = await driverRepository.find({
                relations: ['vehicles'],
            });
            res.json(
                await Promise.all(
                    drivers.map(async (driver) => {
                        let address = {} as Address;
                        try {
                            address = await getAddressFromCEP(driver.cep);
                        } catch (err) {
                            console.warn(
                                `Error fetching address for CEP ${driver.cep}`
                            );
                        }
                        const { city, state } = address;
                        return {
                            ...driver,
                            city: city ?? '',
                            state: state ?? '',
                            vehicles: driver.vehicles
                                .map((vehicle) => vehicle.plate)
                                .join(', '),
                        };
                    })
                )
            );
        } catch (err) {
            console.error(`Error listing drivers: ${err}`);
            res.status(500).send();
        }
    },
};
