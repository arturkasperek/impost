import {Controller, Get, Inject, Param, Query} from '@nestjs/common';
import {SchemaService} from "../../services/SchemaService";
import ImpostSettingsService from "../../ImpostSettingsService";
import {CollectionSchema, ImpostSettings} from "../../../interfaces/interfaces";

@Controller('rest-api')
export class RESTAPIController {
	private impostSettings: ImpostSettings;

	constructor(
		private schemaService: SchemaService,
		@Inject('DbConnectionToken') private dbConnectionProvider) {
		this.impostSettings = ImpostSettingsService.getSettings();
	}

	private getCollectionSettings(collectionName: string): CollectionSchema {
		const searchCollectionNameSmall = collectionName.toLowerCase();

		return this.impostSettings.collections.find((collection) => {
			const collectionNameSmall = collection.name.toLowerCase();

			return `${collectionNameSmall}s` === searchCollectionNameSmall;
		});
	}

	@Get(':collectionName')
	async getList(@Param('collectionName') collectionName: string) {
		console.log('ha :(', this.dbConnectionProvider, this.getCollectionSettings(collectionName));
		return [];
	}
}