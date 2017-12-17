import { Module } from '@nestjs/common';
import {MainController} from "./MainController";
import {SchemaService} from "../../services/SchemaService";
import {UIModule} from "../UI/UIModule";

@Module({
	modules: [ UIModule ],
	controllers: [],
	components: [],
})
export class MainModule {}