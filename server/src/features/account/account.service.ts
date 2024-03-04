import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const newAccount = this.accountRepository.create(createAccountDto);
    return await this.accountRepository.save(newAccount);
  }

  async findAll(): Promise<Account[]> {
    return await this.accountRepository.find();
  }

  async findOne(id: string): Promise<Account> {
    const account = await this.accountRepository.findOneBy({ id });

    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }

    return account;
  }

  async update(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    const existingAccount = await this.findOne(id);

    // Merge the existing account with the updateAccountDto
    const updatedAccount = this.accountRepository.merge(
      existingAccount,
      updateAccountDto,
    );

    return await this.accountRepository.save(updatedAccount);
  }

  async remove(id: string): Promise<void> {
    const account = await this.findOne(id);
    await this.accountRepository.remove(account);
  }
}
