import { Module } from "@nestjs/common";
import { RasaController } from "./rasa.controller";
@Module({
  controllers: [RasaController],
})
export class RasaModule {}