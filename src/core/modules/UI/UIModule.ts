import { Module } from '@nestjs/common';
import {UIController} from "./UIController";
import {SchemaService} from "../../services/SchemaService";

@Module({
	controllers: [UIController],
	components: [ SchemaService ],
})
export class UIModule {}