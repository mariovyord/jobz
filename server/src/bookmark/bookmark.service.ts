import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';
import { Bookmark } from './entities/bookmark.entity';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private bookmarkRepository: Repository<Bookmark>,
  ) {}

  async create(createBookmarkDto: CreateBookmarkDto): Promise<Bookmark> {
    const newBookmark = this.bookmarkRepository.create(createBookmarkDto);
    return await this.bookmarkRepository.save(newBookmark);
  }

  async findAll(): Promise<Bookmark[]> {
    return await this.bookmarkRepository.find();
  }

  async findOne(id: string): Promise<Bookmark> {
    const bookmark = await this.bookmarkRepository.findOneBy({ id });

    if (!bookmark) {
      throw new NotFoundException(`Bookmark with ID ${id} not found`);
    }

    return bookmark;
  }

  async update(
    id: string,
    updateBookmarkDto: UpdateBookmarkDto,
  ): Promise<Bookmark> {
    const existingBookmark = await this.findOne(id);

    // Merge the existing bookmark with the updateBookmarkDto
    const updatedBookmark = this.bookmarkRepository.merge(
      existingBookmark,
      updateBookmarkDto,
    );

    return await this.bookmarkRepository.save(updatedBookmark);
  }

  async remove(id: string): Promise<void> {
    const bookmark = await this.findOne(id);
    await this.bookmarkRepository.remove(bookmark);
  }
}
