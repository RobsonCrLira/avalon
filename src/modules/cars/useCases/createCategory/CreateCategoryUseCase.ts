import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) {}

	execute({ name, description }: IRequest): void {
		const isExists = this.categoriesRepository.findByName(name);

		if (isExists) throw new Error('Category already exists!');

		this.categoriesRepository.create({ name, description });
	}
}
export { CreateCategoryUseCase };
