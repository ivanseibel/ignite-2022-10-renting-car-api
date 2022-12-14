import { Router } from 'express';

import { CloseRentalController } from '@modules/rentals/useCases/closeRental/CloseRentalController';
import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';
import { ListRentalsByUserController } from '@modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const closeRentalController = new CloseRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

// Below routes are protected by the ensureAuthenticated middleware
rentalRoutes.use(ensureAuthenticated);

rentalRoutes.post('/', createRentalController.handle);
rentalRoutes.post('/close/:id', closeRentalController.handle);
rentalRoutes.get('/user', listRentalsByUserController.handle);

// Below routes are protected by the ensureAdmin middleware
rentalRoutes.use(ensureAdmin);

export { rentalRoutes };
