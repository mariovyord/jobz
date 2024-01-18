import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FilterService } from './filter.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('filters')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createFilterDto: CreateFilterDto) {
    return this.filterService.create(createFilterDto);
  }

  @Get()
  findAll() {
    return this.filterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filterService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilterDto: UpdateFilterDto) {
    return this.filterService.update(id, updateFilterDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filterService.remove(id);
  }
}
