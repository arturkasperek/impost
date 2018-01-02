import {Router} from "express";

export interface IField {
	type: string,
	name: string,
	fields?: IField[],
	options?: Object
}

// export interface TextField extends IField {
// 	type: 'text-field'
// }
//
// export interface NumberField extends IField {
// 	type: 'number-field'
// }
//
// export interface PasswordField extends IField {
// 	type: 'password-field'
// }
//
// export interface HTMLField extends IField {
// 	type: 'html-field'
// }
//
// type ImageProvider = 'cloudinary' | 'url-image' | 's3-bucket';
//
// export interface ImageField extends IField {
// 	type: 'image-field',
// 	options: {
// 		provider: ImageProvider,
// 		providerOptions?: Object
// 	}
// }

export interface Schema {
	[name: string]: IField
}

export interface Collection {
	name: string;
	fieldsSchema: IField[];
}

export type CLASS_CONSTRUCTOR = { new (...args: any[]): {} };

export interface CollectionSchema extends Collection {
	accessList?: string[];
}

export interface CollectionResolved extends Collection{
	endpoint: string;
}

export interface UISettings {
	collections: CollectionResolved[];
}

export interface ImpostSettings {
	collections: CollectionSchema[];
}