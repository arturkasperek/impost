import { expect } from 'chai';
import Impost from "../../src/core/Impost";
import * as request from 'supertest';
import {Test} from "@nestjs/testing";
import * as express from 'express';
import {CollectionSchema, ImpostSettings, UISettings} from "../../src/interfaces/interfaces";
import {map} from 'lodash';

async function initAppWithSettings(server: express.Express, settings: ImpostSettings = {collections: []}) {
	const impost = new Impost(settings);
	const module = await Test.createTestingModule({
		modules: [impost.getMainModule()],
	}).compile();

	const app = module.createNestApplication(server);

	return app.init();
}

const catCollection: CollectionSchema = {
	name: 'Cat',
	fieldsSchema: [{
		name: 'name',
		type: 'string',
	}, {
		name: 'age',
		type: 'number',
	}]
};

const userCollection: CollectionSchema = {
	name: 'User',
	fieldsSchema: [{
		name: 'name',
		type: 'string',
	}, {
		name: 'password',
		type: 'password',
	}]
};

const imageCollection: CollectionSchema = {
	name: 'Image',
	fieldsSchema: [{
		name: 'name',
		type: 'string',
	}, {
		name: 'image',
		type: 'image',
	}]
};

const oneCollectionSettings = {
	collections: [catCollection]
};

describe('User', () => {
	const server = express();
	it('should be able to enter on UI route', async () => {
		await initAppWithSettings(server);

		return request(server)
			.get('/ui')
			.expect(200);
	});

	it('should be able to add fieldsSchema', async () => {
		await initAppWithSettings(server, oneCollectionSettings);

		return request(server)
			.get('/ui').expect((res) => {
				const body = res.body;

				expect(body.collections.length).to.be.equal(1);
			});
	});

	it('should set fieldsSchema and receive endpoint to resource', async () => {
		await initAppWithSettings(server, oneCollectionSettings);

		return request(server)
			.get('/ui').expect((res) => {
				const body = res.body;

				expect(body.collections[0]).to.haveOwnProperty('endpoint');
			});
	});

	it('should set fieldsSchema with permissions and get only collections which he has writes', async () => {
		await initAppWithSettings(server, {
			collections: [catCollection, {
				...userCollection,
				accessList: ['admin'],
			}, {
				...imageCollection,
				accessList: ['admin', 'basic-user'],
			}]
		});

		return request(server)
			.get('/ui?userType=basic-user').expect((res) => {
				const body: UISettings = res.body;

				expect(map(body.collections, 'name')).to.deep.equal([catCollection.name, imageCollection.name]);
			});
	});
});
