import { Component } from '@nestjs/common';
import {Collection, CollectionResolved, UISettings} from "../../interfaces/interfaces";
import ImpostSettingsService from "../ImpostSettingsService";
import {get, kebabCase} from 'lodash';

@Component()
export class SchemaService {
	getUISettings(userType: string): UISettings {
		const collections = ImpostSettingsService.getSettings().collections;
		const collectionResolved = collections
			.filter((collection)=>{
				const accessList = collection.accessList;

				return accessList ? accessList.indexOf(userType) !== -1 : true;
			})
			.map<CollectionResolved>((collection) => {
				return {
					endpoint: kebabCase(`/${collection.name}`),
					name: collection.name,
					fieldsSchema: collection.fieldsSchema,
				};
			});

		return {
			collections: collectionResolved,
		};
	}

	getSchema(collectionName: string): Collection {
		return undefined;
	}
}