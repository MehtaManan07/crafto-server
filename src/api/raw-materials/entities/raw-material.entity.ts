import { ApiProperty } from '@nestjs/swagger';
import { RawMaterial } from '@prisma/client';

export class RawMaterialEntity implements RawMaterial {
  constructor(partial: Partial<RawMaterialEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  isDeleted: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  pricePerUnit: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  supplierId: number;

  @ApiProperty()
  unit: string;
}
