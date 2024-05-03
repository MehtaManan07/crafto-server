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
  unit: string;

  @IsNumber()
  @IsNotEmpty()
  pricePerUnit: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  //   @IsNumber()
  //   @IsNotEmpty()
  //   supplierId: number;
}
