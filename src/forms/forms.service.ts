import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormEntity } from './form.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(FormEntity)
    private formRepository: Repository<FormEntity>,
  ) {}

  getForms(): Promise<FormEntity[]> {
    return this.formRepository.find();
  }

  async createForm(createFormDto): Promise<FormEntity> {
    const { name, email, message } = createFormDto;

    const form = await this.formRepository.create({
      id: uuid(),
      name,
      email,
      message,
    });

    try {
      await this.formRepository.save(form);
      return form;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteForm(id: string): Promise<void> {
    const { affected } = await this.formRepository.delete({ id });

    if (!affected) throw new NotFoundException();
  }
}
