import {IField} from "../interfaces/interfaces";
import {Schema, SchemaDefinition} from "mongoose";

export abstract class Field {
	constructor(field: IField) {

	}

	abstract getMongooseSchema(): Schema | SchemaDefinition;
}