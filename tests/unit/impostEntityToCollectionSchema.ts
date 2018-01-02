import {map} from "lodash";
import {expect} from "chai";
import * as express from "express";
import {CollectionSchema, UISettings} from "../../src/interfaces/interfaces";
import {Entity} from "../../src/annotation/Entity";
import {EntityBase} from "../../src/core/EntityBase";
import {Field} from "../../src/annotation/Field";
import {List} from "../../src/annotation/List";
import {ImageType} from "../../src/coreTypes/ImageType";
import {entityClassToCollectionSchema} from "../../src/utils/entityClassToCollectionSchema";

describe('Class transformer', () => {
	it('should be able to map TS entity to object with settings', async () => {
		class Image {
			@Field()
			description: string;
			@Field()
			photo: ImageType;
		}

		class Car extends EntityBase {
			@Field()
			model: string;
			@Field({
				ui: 'color'
			})
			color: string;
			@Field()
			year: number;
			@List(type => Image)
			images: Image[];
		}

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

		expect(entityClassToCollectionSchema(Car)).to.deep.equal(collectionsSchema);
	});
});