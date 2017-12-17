import { expect } from 'chai';
import {toMongooseSchema} from "../../src/core/toMongooseSchema";
import {Schema} from "../../src/interfaces/interfaces";
import { TEXT_FIELD, NUMBER_FIELD, HTML_FIELD, PASSWORD_FIELD } from '../../src/constans/constans';

describe('Mapper to Mongoose', () => {
	it('should be able to map basic types', () => {
		const schema: Schema = {
			name: { type: TEXT_FIELD },
			age: { type: NUMBER_FIELD },
			password: { type: PASSWORD_FIELD },
			description: { type: HTML_FIELD },
		};
		const mongoSchema = {
			name: {type: String },
			age: { type: Number },
			password: { type: String },
			description: { type: Number },
		};

		expect(mongoSchema).to.deep.equal(toMongooseSchema(schema));
	});

	it('should be able to ')
});
