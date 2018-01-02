import {CLASS_CONSTRUCTOR, CollectionSchema, IField} from "../interfaces/interfaces";
import {EntityBase} from "../core/EntityBase";
import {ColumnType, EntitySchema, EntitySchemaColumn} from "typeorm";

function getField(field: IField): EntitySchemaColumn {
	let type: ColumnType;
	if (field.type == 'string' || field.type == 'color' ) {
		type = 'text';
	} else if (field.type == 'number') {
		type = 'int';
	} else if (field.type == 'list') {
		type = 'json';
	} else if (field.type == 'image') {
		type = 'json';
	}

	return {
		type,
	}
}

export function collectionSchemaToTypeORMEntity(collection: CollectionSchema): EntitySchema {
	const collectionName = collection.name;
	const typeORMCollectionSchema = collection.fieldsSchema.reduce((acc, fieldSchema) => {
		return {
			...acc,
			[fieldSchema.name]: getField(fieldSchema)
		};
	}, {});

	return {
		name: collectionName,
		columns: typeORMCollectionSchema,
	};
}