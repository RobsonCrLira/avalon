import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationsUseCase {
	constructor(private specificationsRepository: ISpecificationsRepository) {}

	execute({ name, description }: IRequest): void {
		const isExists = this.specificationsRepository.findByName(name);

		if (isExists) throw new Error('Category already exists!');

		this.specificationsRepository.create({ name, description });
	}
}
export { CreateSpecificationsUseCase };
