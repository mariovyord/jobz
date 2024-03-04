import { Controller, Get, Param } from '@nestjs/common';
import { FilterService } from './filter.service';

@Controller('filters')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @Get()
  findAll() {
    return this.filterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filterService.findOne(id);
  }
}
