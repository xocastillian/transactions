import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsInt,
} from 'class-validator'

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  author: string

  @IsNotEmpty()
  @IsNumber()
  sum: number

  @IsOptional()
  @IsString()
  comment?: string

  @IsNotEmpty()
  @IsInt()
  categoryId: number
}
