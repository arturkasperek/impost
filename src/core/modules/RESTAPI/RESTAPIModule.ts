import { Module } from '@nestjs/common';
import {SchemaService} from "../../services/SchemaService";
import {RESTAPIController} from "./RESTAPIController";
import {DatabaseModule} from "../Database/DatabaseModule";

@Module({
	modules: [ DatabaseModule ],
	controllers: [ RESTAPIController ],
	components: [ SchemaService ],
})
export class RESTAPIModule {}