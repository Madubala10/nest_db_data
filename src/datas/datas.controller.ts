import { Controller, Get, Post, Body,Res, Patch, Param, Delete, Query } from '@nestjs/common';
import { DatasService } from './datas.service';
import { Data } from './entities/data.entity';


@Controller('datas')
export class DatasController {
  constructor(private readonly datasService: DatasService) {}

  @Post()
  async create(@Body() datas:Data):Promise<any> {
    const result=this.datasService.create_data(datas);
    console.log(result)
    
  }

  @Get()
  async findAll() {
    return this.datasService.findAll_data();
   
   }


}
