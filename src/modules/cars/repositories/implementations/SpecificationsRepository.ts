import { Specifications } from '../../model/Specifications';
import { ICreateCategoryDTO } from '../ICategoriesRepository';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
	private specifications: Specifications[];

	constructor() {
		this.specifications = [];
	}
	create({ name, description }: ICreateCategoryDTO) {
		const specification = new Specifications();

		Object.assign(specification, {
			name,
			description,
			createAt: new Date(),
		});

		this.specifications.push(specification);
	}
	findByName(name: string): Specifications {
		const specification = this.specifications.find(
			(specification) => specification.name === name
		);
		return specification;
	}
}

export { SpecificationsRepository };
