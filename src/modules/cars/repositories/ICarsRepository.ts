import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { IListAvailableCarsDTO } from '../dtos/IListAvailableCarsDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  listAvailable(filters?: IListAvailableCarsDTO): Promise<Car[]>;
  findById(id: string): Promise<Car>;
  update(car: Car): Promise<void>;
}

export { ICarsRepository };
