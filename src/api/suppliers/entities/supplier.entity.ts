import { ApiProperty } from '@nestjs/swagger';
import { Supplier } from '@prisma/client';

export class SupplierEntity implements Supplier {
  constructor(partial: Partial<SupplierEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  isDeleted: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  contactInfo: string;
}
