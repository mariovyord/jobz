import { Injectable } from '@nestjs/common';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Thread } from './entities/thread.entity';
import { Repository } from 'typeorm';

// TODO: Add decorator validator for UUI
@Injectable()
export class ThreadService {
  constructor(
    @InjectRepository(Thread) private threadRepository: Repository<Thread>,
  ) {}

  public create(createThreadDto: CreateThreadDto): Promise<Thread> {
    const thread = new Thread();
    thread.title = createThreadDto.title;
    thread.content = createThreadDto.content;
    thread.image = createThreadDto.image;
    thread.owner = createThreadDto.owner;

    return this.threadRepository.save(thread);
  }

  public findAll(): Promise<Thread[]> {
    return this.threadRepository.find();
  }

  public findOne(id: string): Promise<Thread | null> {
    return this.threadRepository.findOneBy({ id });
  }

  public update(id: string, updateThreadDto: UpdateThreadDto) {
    const thread = new Thread();
    thread.title = updateThreadDto.title;
    thread.content = updateThreadDto.content;
    thread.image = updateThreadDto.image;
    thread.owner = updateThreadDto.owner;
    thread.id = id;

    return this.threadRepository.save(thread);
  }

  public remove(id: string) {
    return this.threadRepository.delete(id);
  }
}
