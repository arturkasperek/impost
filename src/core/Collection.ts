import {Schema} from "../interfaces/interfaces";
import { forEach } from 'lodash';
import {ALL_TYPES} from "../constans/constans";

export class Collection {
	constructor(private name: string, private schema: Schema) {
		this.validate();
	}

	validate() {
		forEach(this.schema, (value, key) => {
			if (ALL_TYPES.indexOf(value.type) === -1) {
				throw new Error(`Field with '${key}' not exist in our system`);
			}
		});
	}

	getName() {
		return this.name;
	}
}