import { createConnection } from 'typeorm';
import ImpostSettingsService from "../../ImpostSettingsService";

export const databaseProviders = [
	{
		provide: 'DbConnectionToken',
		useFactory: async () => {
			const settings = ImpostSettingsService.getSettings();

			return await createConnection({
				type: "mysql",
				host: "localhost",
				port: 3306,
				username: "root",
				password: "",
				database: "impost_test",
				synchronize: true,
				entitySchemas: []
			});
		},
	},
];