import {TextFieldProps} from "./interfaces/interfaces";
import {toMongooseSchema} from "./core/toMongooseSchema";

const a: TextFieldProps = {
	type: 'text-field',
	name: 'heja'
};

toMongooseSchema(null);
console.log('ha ', a);