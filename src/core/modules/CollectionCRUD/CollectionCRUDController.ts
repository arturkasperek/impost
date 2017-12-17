import {Controller, Get, Query} from '@nestjs/common';
import {SchemaService} from "../../services/SchemaService";

@Controller('rest')
export class CollectionCRUDController {
	constructor(private schemaService: SchemaService) {}

	@Get()
	async getRoute() {
		return {foo: 'bar'};
	}
}