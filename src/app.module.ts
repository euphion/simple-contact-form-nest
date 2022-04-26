import { Module } from '@nestjs/common';
import { FormsModule } from './forms/forms.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'forms',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FormsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
