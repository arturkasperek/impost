import {CLASS_CONSTRUCTOR} from "../interfaces/interfaces";

export function Entity<T extends CLASS_CONSTRUCTOR>(constructor: T): T {
	return class extends constructor {
	}
}