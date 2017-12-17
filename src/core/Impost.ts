import {Collection} from "./Collection";
import * as express from 'express';
import * as http from "http";
import { NestFactory } from '@nestjs/core';
import {MainModule} from "./modules/Main/MainModule";
import {ImpostSettings} from "../interfaces/interfaces";
import ImpostSettingsService from "./ImpostSettingsService";

export default class Impost {
	// private collections: CollectionSchema[] = [];
	// public expressApp: express.Application;
	// private server: http.Server;
	// private field:

	constructor( settings: ImpostSettings ) {
		ImpostSettingsService.setSettings(settings);
	}

	public getMainModule(): MainModule {
		return MainModule;
	}

	private loadImpostAPIs() {
	}

	public async start(): Promise<any> {
		const app = await NestFactory.create(this.getMainModule());

		return app.listen(3000);
	}

	// validate(collectionToRegister: CollectionSchema) {
	// 	this.collections.forEach((collection) => {
	// 		if ( collectionToRegister.getName() === collection.getName() ) {
	// 			throw new Error(`We can't register collection with ${collectionToRegister.getName()} cause name is not unique`);
	// 		}
	// 	})
	// }
	//
	// registerCollection(collection: CollectionSchema) {
	// 	this.validate(collection);
	// 	this.collections.push(collection);
	// }
	//
	// getCollections(): CollectionSchema[] {
	// 	return this.getCollections();
	// }
}