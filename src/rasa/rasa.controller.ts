import { Controller, Get, Post } from "@nestjs/common";

@Controller("rasa")
export class RasaController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
      }
    }