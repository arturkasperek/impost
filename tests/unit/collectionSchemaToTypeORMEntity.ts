import {CollectionSchema} from "../../src/interfaces/interfaces";
import {ImageType} from "../../src/coreTypes/ImageType";
import {EntityBase} from "../../src/core/EntityBase";
import {List} from "../../src/annotation/List";
import {Field} from "../../src/annotation/Field";
import {entityClassToCollectionSchema} from "../../src/utils/entityClassToCollectionSchema";
import {expect} from "chai";

const collectionsSchema: CollectionSchema = {
	name: 'Car',
	fieldsSchema: [{
		name: 'model',
		type: 'string',
	}, {
		name: 'color',
		type: 'color',
	}, {
		name: 'year',
		type: 'number'
	}, {
		name: 'images',
		type: 'list',
		fields: [{
			name: 'description',
			type: 'string'
		}, {
			name: 'photo',
			type: 'image'
		}]
	}]
};

describe('Transformer', () => {
	it('should be able to map impost entity into TypeORM Entity', async () => {

	});
});