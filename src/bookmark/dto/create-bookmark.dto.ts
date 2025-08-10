import { IsString } from 'class-validator';

export class createBookmarkDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  link: string;
}
