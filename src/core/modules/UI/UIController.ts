import {Controller, Get, Query} from '@nestjs/common';
import {SchemaService} from "../../services/SchemaService";
import ImpostSettingsService from "../../ImpostSettingsService";

@Controller('ui')
export class UIController {
	constructor(private schemaService: SchemaService) {}

	@Get()
	async getUI(@Query('userType') userType: string) {
		return this.schemaService.getUISettings(userType);
	}
}