import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
   id           Int       @id @default(autoincrement())
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  isDeleted    Boolean   @default(false)
  name         String
  quantity     Float
  unit         String
  pricePerUnit Float
  description  String?
  category     String
  supplierId   Int?
  supplier     Supplier? @relation(fields: [supplierId], references: [id])
 */
export class CreateRawMaterialDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  size: string;

  @IsNumber()
  @IsNotEmpty()
  pricePerUnit: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  //   @IsNumber()
  //   @IsNotEmpty()
  //   supplierId: number;
}
