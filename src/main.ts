import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix("api");

  const options = new DocumentBuilder()
    .setTitle("Panorama")
    .setDescription("Panorama API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api/doc", app, document);

  await app.listen(3000);
}
bootstrap();