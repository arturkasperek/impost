import {Collection} from "./Collection";

export default class Impost {
	private collections: Collection[] = [];
	// private field:

	constructor() {

	}

	validate(collectionToRegister: Collection) {
		this.collections.forEach((collection) => {
			if ( collectionToRegister.getName() === collection.getName() ) {
				throw new Error(`We can't register collection with ${collectionToRegister.getName()} cause name is not unique`);
			}
		})
	}

	registerCollection(collection: Collection) {
		this.validate(collection);
		this.collections.push(collection);
	}

	getCollections(): Collection[] {
		return this.getCollections();
	}
}