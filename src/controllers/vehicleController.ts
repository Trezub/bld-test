import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Vehicle from '../models/Vehicle';

export default {
    async create(req: Request, res: Response) {
        const { plate } = req.body;
        const { id: driverId } = req.params;
        const vehicleRepository = getRepository(Vehicle);
        const vehicle = vehicleRepository.create({
            plate: plate.toUpperCase(),
            driver: { id: Number(driverId) },
        });
        try {
            await vehicleRepository.insert(vehicle);
            const { id, driver } = vehicle;
            return res.status(201).json({
                plate,
                id,
                driverId: driver.id,
            });
        } catch (err: any) {
            if (err.code === '23503') {
                // Violates foreign key
                return res
                    .status(404)
                    .json({ message: `Driver ${driverId} not found.` });
            }
            if (err.code === '23505') {
                return res.status(400).json({
                    message: 'A vehicle with this plate already exists.',
                });
            }
            console.error(`Error creating vehicle: ${err}`);
            res.status(500).send();
        }
    },
};
