import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatasModule } from './datas/datas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasService } from './datas/datas.service';
import { Data } from './datas/entities/data.entity';
import { DatasController } from './datas/datas.controller';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'madubala',
      database:'postgres',
      entities:[Data],
      synchronize:true,
      logging:true

    }),
    TypeOrmModule.forFeature([Data])

  ], 
  
  controllers: [AppController,DatasController],
  providers: [AppService,DatasService]
 
  
})
export class AppModule {}
