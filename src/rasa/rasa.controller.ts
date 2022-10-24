import { Controller, Get, Param, Post } from "@nestjs/common";
import {Step} from "../database/enum";

@Controller("rasa")
export class RasaController {
  @Get(':text')
  findAll(@Param("text") text: string): Step[] {
      let steps = [];
      fetch("http://localhost:5005/model/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: '{"text":"' + text + '"}',
      })
        .then((response) => response.json())
        .then((response) => response.intent_ranking)
        .then((response) => response.filter((intent) => (intent.confidence > 0.2)))
        .then((response) => response.map((intent) => intent.name as Step))
        .then((response) => {steps = response});
        return steps;
    }
    }