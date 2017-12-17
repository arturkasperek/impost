import { expect } from 'chai';
import {toMongooseSchema} from "../../src/core/toMongooseSchema";
import {Schema} from "../../src/interfaces/interfaces";
import { TEXT_FIELD, NUMBER_FIELD, HTML_FIELD, PASSWORD_FIELD, ARRAY_FIELD } from '../../src/constans/constans';
import {toJSONSchemaFormat} from "../../src/core/toJSONSchemaFormat";

describe('Schema to UI Mapper', () => {
	it('should be able to map basic types', () => {
		const schema: Schema = {
			name: { type: TEXT_FIELD },
			age: { type: NUMBER_FIELD },
			password: { type: PASSWORD_FIELD },
			description: { type: HTML_FIELD },
		};

		const uiSchema = {
			name: {
				"ui:widget": "text"
			},
			age: {
				"ui:widget": "integer"
			},
			password: {
				"ui:widget": "password"
			},
			description: {
				"ui:widget": "wyswig"
			}
		};

		expect(uiSchema).to.deep.equal(toJSONSchemaFormat(schema));
	});

	it('should be able to map nested schemas', () => {
		const schema: Schema = {
			users: {
				type: ARRAY_FIELD,
				fields: [{
					login: {
						type: TEXT_FIELD
					},
					password: {
						type: PASSWORD_FIELD
					}
				}]
			},
			other: {
				type: TEXT_FIELD
			}
		}
	});
});
