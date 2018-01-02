import { Module } from '@nestjs/common';
import { databaseProviders } from './DatabaseProvider';

@Module({
	components: [...databaseProviders],
	exports: [...databaseProviders],
})
export class DatabaseModule {}