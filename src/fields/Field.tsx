import {IField} from "../interfaces/interfaces";
import {Schema, SchemaDefinition} from "mongoose";
import * as React from 'react';

export abstract class Field {
	constructor(field: IField) {

	}

	// abstract getMongooseSchema(): Schema | SchemaDefinition;
	abstract getComponent() : JSX.Element;
}

class Dupa extends Field {
	constructor() {

	}

	getComponent() {
		return null;
	}
}