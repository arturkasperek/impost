import { expect } from 'chai';
import {Collection} from "../../src/core/Collection";
import {TEXT_FIELD, NUMBER_FIELD} from "../../src/constans/constans";
import Impost from "../../src/core/Impost";

describe('User', () => {
	let app: Impost;
	beforeEach(() => {
		// maybe in future we should add clear or something similar
		app = new Impost();
	});

	it('should be able to register empty schema', () => {
		const User = new Collection('user', {});
		expect(User.getName()).to.equal('user');
	});
	it('should be able to create schema with fields', () => {
		const User = new Collection('user', {
			name: {
				type: TEXT_FIELD,
			},
			age: {
				type: NUMBER_FIELD
			}
		});
	});
	it(`should't be able to create schema with field which not exist`, () => {
		let errorOccured = false;

		try {
			const User = new Collection('user', {
				fakeType: {
					type: 'fake-type'
				}
			});
		} catch (err) {
			errorOccured = true;
		}

		expect(errorOccured).to.equal(true);
	});

	it('should be able to register in system collections', () => {
		const Coll1 = new Collection('coll-1', {});
		const Coll2 = new Collection('coll-2', {});

		app.registerCollection(Coll1);
		app.registerCollection(Coll2);
	});

	it(`should't be able to register in system collections with the same name`, () => {
		const Coll1 = new Collection('coll-1', {});
		let errorOccured = false;

		try {
			app.registerCollection(Coll1);
			app.registerCollection(Coll1);
		} catch (err) {
			errorOccured = true;
		}

		expect(errorOccured).to.equal(true);
	});

	it('')
});
