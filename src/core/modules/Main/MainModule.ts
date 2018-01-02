import { Module } from '@nestjs/common';
import {MainController} from "./MainController";
import {SchemaService} from "../../services/SchemaService";
import {UIModule} from "../UI/UIModule";
import {RESTAPIModule} from "../RESTAPI/RESTAPIModule";
import {DatabaseModule} from "../Database/DatabaseModule";

@Module({
	modules: [ UIModule, RESTAPIModule ],
	controllers: [],
	components: [],
})
export class MainModule {}