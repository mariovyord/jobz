import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const newArticle = this.articleRepository.create(createArticleDto);
    return await this.articleRepository.save(newArticle);
  }

  async findAll(): Promise<Article[]> {
    return await this.articleRepository.find();
  }

  async findOne(id: string): Promise<Article> {
    const article = await this.articleRepository.findOneBy({ id });

    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }

    return article;
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    const existingArticle = await this.findOne(id);

    // Merge the existing article with the updateArticleDto
    const updatedArticle = this.articleRepository.merge(
      existingArticle,
      updateArticleDto,
    );

    return await this.articleRepository.save(updatedArticle);
  }

  async remove(id: string): Promise<void> {
    const article = await this.findOne(id);
    await this.articleRepository.remove(article);
  }
}
