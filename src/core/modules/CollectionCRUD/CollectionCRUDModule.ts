import { Module } from '@nestjs/common';
import {SchemaService} from "../../services/SchemaService";
import {CollectionCRUDController} from "./CollectionCRUDController";

@Module({
	controllers: [CollectionCRUDController],
	components: [ SchemaService ],
})
export class CollectionCRUDModule {}