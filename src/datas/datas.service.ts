import { Injectable } from '@nestjs/common';
import { Data } from './entities/data.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { promises } from 'dns';

@Injectable()
export class DatasService {
  constructor(
    @InjectRepository(Data)
    private readonly dataRepository:Repository<Data>
    ){}
  async create_data(data: Data):Promise<Data> {
    return this.dataRepository.save(data) ;
  }

  async findAll_data():Promise<Data[]> {
    return this.dataRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} data`;
  // }

  // update(id: number, updateDataDto: UpdateDataDto) {
  //   return `This action updates a #${id} data`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} data`;
  // }
}
