// import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RootModule } from './root.module';
import { getConfig } from './config';
import { PrismaExceptionsFilter } from './filters/prisma-exception.filter';

function loadEnv() {
  const NODE_ENV = process.env.NODE_ENV || 'development';
  const envFile =
    path.resolve(__dirname, `../.env.${NODE_ENV}`) ||
    path.resolve(__dirname, `../.env`);
  if (fs.existsSync(envFile)) {
    console.log(`Loading env file: ${envFile}`);
    //dotenv.config({ path: envFile, override: true });
  }
}

async function main() {
  loadEnv();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RootModule,
    getConfig({ port: process.env.PORT, host: process.env.HOST }),
  );
  app.useGlobalFilters(new PrismaExceptionsFilter());
  await app.listen();
}

main();
