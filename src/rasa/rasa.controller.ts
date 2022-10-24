import { Controller, Get, Param } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { map, Observable } from "rxjs";
export interface RasaResponse {
  intent: {
    name: string;
    confidence: number;
  };
  entities: {
    start: number;
    end: number;
    value: string;
    entity: string;
    confidence: number;
    extractor: string;
  }[];
  intent_ranking: {
    name: string;
    confidence: number;
  }[];
  response_selector: {
    default: {
      response: {
        name: string;
        confidence: number;
      }[];
      ranking: {
        name: string;
        confidence: number;
      }[];
    };
  };
  text: string;
}

@Controller("rasa")
export class RasaController {
  constructor(private readonly httpService: HttpService) {}

  @Get(':text')
  findAll(@Param("text") text: string): Observable<string[]> {
      const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
      }
      
      return this.httpService.post('http://localhost:5005/model/parse', {text: text}, options).pipe(
        map((response)=> response.data.intent_ranking),
        map((intents)=> {
          console.log(intents);
          return intents.filter((intent)=> intent['confidence'] > 0.2).map((intent)=> intent['name']);
        })
      );
      }
    }