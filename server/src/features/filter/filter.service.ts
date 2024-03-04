import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filter } from './entities/filter.entity';

@Injectable()
export class FilterService {
  constructor(
    @InjectRepository(Filter) private filterRepository: Repository<Filter>,
  ) {}

  async findAll(): Promise<Filter[]> {
    return await this.filterRepository.find();
  }

  async findOne(id: string): Promise<Filter> {
    const filter = await this.filterRepository.findOneBy({ id });

    if (!filter) {
      throw new NotFoundException(`Filter with ID ${id} not found`);
    }

    return filter;
  }
}
