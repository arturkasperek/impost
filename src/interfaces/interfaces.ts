export interface IField {
	type: string,
	options?: Object
}

export interface TextField extends IField {
	type: 'text-field'
}

export interface NumberField extends IField {
	type: 'number-field'
}

export interface PasswordField extends IField {
	type: 'password-field'
}

export interface HTMLField extends IField {
	type: 'html-field'
}

type ImageProvider = 'cloudinary' | 'url-image' | 's3-bucket';

export interface ImageField extends IField {
	type: 'image-field',
	options: {
		provider: ImageProvider,
		providerOptions?: Object
	}
}

export interface Schema {
	[name: string]: IField
}