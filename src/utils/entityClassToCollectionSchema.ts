import {CLASS_CONSTRUCTOR, CollectionSchema} from "../interfaces/interfaces";
import {EntityBase} from "../core/EntityBase";

export function entityClassToCollectionSchema<T extends CLASS_CONSTRUCTOR>(entityClass: T): CollectionSchema {
	return {
		name: 'to-implement',
		fieldsSchema: [],
	};
}