import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { Filter } from './entities/filter.entity';

@Injectable()
export class FilterService {
  constructor(
    @InjectRepository(Filter) private filterRepository: Repository<Filter>,
  ) {}

  async create(createFilterDto: CreateFilterDto): Promise<Filter> {
    const newFilter = this.filterRepository.create(createFilterDto);
    return await this.filterRepository.save(newFilter);
  }

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

  async update(id: string, updateFilterDto: UpdateFilterDto): Promise<Filter> {
    const existingFilter = await this.findOne(id);

    // Merge the existing filter with the updateFilterDto
    const updatedFilter = this.filterRepository.merge(
      existingFilter,
      updateFilterDto,
    );

    return await this.filterRepository.save(updatedFilter);
  }

  async remove(id: string): Promise<void> {
    const filter = await this.findOne(id);
    await this.filterRepository.remove(filter);
  }
}
