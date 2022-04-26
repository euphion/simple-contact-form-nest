import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FormEntity } from './form.entity';
import { FormsService } from './forms.service';
import { CreateFormDto } from './create-form.dto';

@Controller('forms')
export class FormsController {
  constructor(private formsService: FormsService) {}

  @Get('/')
  getForms(): Promise<FormEntity[]> {
    return this.formsService.getForms();
  }

  @Post('/')
  createForm(@Body() createFormDto: CreateFormDto): Promise<FormEntity> {
    return this.formsService.createForm(createFormDto);
  }

  @Delete('/:id')
  deleteForms(@Param('id') id: string): Promise<void> {
    return this.formsService.deleteForm(id);
  }
}
