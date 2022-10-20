import { Module } from "@nestjs/common";
import { RedirectionService } from "./redirection.service";
import { RedirectionController } from "./redirection.controller";
import { Redirection } from "./entities/redirection.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [TypeOrmModule.forFeature([Redirection])],
	controllers: [RedirectionController],
	providers: [RedirectionService],
})
export class RedirectionModule {}
