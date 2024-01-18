import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';
import { SetUserIdInterceptor } from 'src/shared/interceptors/set-user-id.interceptor';
import { JwtGuard } from 'src/authz/jwt.guard';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @UseGuards(JwtGuard)
  @Post()
  @UseInterceptors(SetUserIdInterceptor)
  create(@Body() createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarkService.create(createBookmarkDto);
  }

  @Get()
  findAll() {
    return this.bookmarkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookmarkService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookmarkDto: UpdateBookmarkDto,
  ) {
    return this.bookmarkService.update(id, updateBookmarkDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookmarkService.remove(id);
  }
}
