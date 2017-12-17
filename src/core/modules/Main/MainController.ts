import { Get, Controller } from '@nestjs/common';

@Controller()
export class MainController {
	@Get()
	root(): string {
		return 'Hello World!';
	}
}