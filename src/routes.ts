import { Router } from 'express';
import driverController from './controllers/driverController';
import vehicleController from './controllers/vehicleController';
import driverValidations from './validations/driverValidations';
import vehicleValitadions from './validations/vehicleValitadions';

const router = Router();

router.post('/drivers', driverValidations.create, driverController.create);
router.get('/drivers', driverController.index);
router.post(
    '/drivers/:id/vehicles',
    vehicleValitadions.create,
    vehicleController.create
);

export default router;
