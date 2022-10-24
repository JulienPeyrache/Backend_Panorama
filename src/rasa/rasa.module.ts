import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { RasaController } from "./rasa.controller";
@Module({
    imports: [HttpModule],
  controllers: [RasaController],
})
export class RasaModule {}