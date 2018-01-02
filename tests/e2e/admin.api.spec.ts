import { expect } from 'chai';
import Impost from "../../src/core/Impost";
import * as request from 'supertest';
import {Test} from "@nestjs/testing";
import * as express from 'express';
import {CollectionSchema, ImpostSettings, UISettings} from "../../src/interfaces/interfaces";
import {map} from 'lodash';

/*
	Impost should generate API for admin panel
 */

async function initAppWithSettings(server: express.Express, settings: ImpostSettings = {collections: []}) {
	const impost = new Impost(settings);
	const module = await Test.createTestingModule({
		modules: [impost.getMainModule()],
	}).compile();

	const app = module.createNestApplication(server);

	return app.init();
}

const carBasicCollection: CollectionSchema = {
	name: 'Car',
	fieldsSchema: [{
		name: 'model',
		type: 'string',
	}, {
		name: 'year',
		type: 'number',
	}]
};

describe('API user', () => {
	const server = express();
	it('should be able to GET_LIST of collection', async () => {
		const appSettings: ImpostSettings = {
			collections: [carBasicCollection],
		};

		await initAppWithSettings(server, appSettings);

		return request(server)
			.get(`/rest-api/cars`)
			.expect(200);
	});
});
