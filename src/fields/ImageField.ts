import {ImageField as ImageFieldProps} from '../interfaces/interfaces';
import {Field} from "./Field";
import {Schema} from "mongoose";

export class ImageField extends Field {
	constructor(public props: ImageFieldProps) {
		super(props);
	}

	getMongooseSchema() {
		//const imageProvider = this.props.options.provider;

		/*switch (imageProvider) {
			case 'cloudinary':
				return new Schema({
					provider: String,
					id: { type: String, unique: true }
				});
				break;
			case 'localfile':

				break;
		}*/

		return new Schema({
			provider: String,
			id: { type: String, unique: true }
		});
	}
}