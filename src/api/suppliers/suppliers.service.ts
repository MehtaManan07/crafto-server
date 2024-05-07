import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from 'nestjs-prisma';
import { LoggerService } from 'src/common/logger';
import { SupplierEntity } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
  ) {}
  async create(createSupplierDto: CreateSupplierDto): Promise<void> {
    await this.prisma.supplier.create({
      data: createSupplierDto,
    });
    this.logger.log(`Created supplier with name: ${createSupplierDto.name}`);
    return;
  }

  async findAll(name: string): Promise<SupplierEntity[]> {
    const suppliers = await this.prisma.supplier.findMany({
      where: { name: { contains: name }, isDeleted: false },
      include: { rawMaterials: true },
    });
    this.logger.log(`Fetched suppliers with name: ${name}`);
    return suppliers;
  }

  findOne(id: number): Promise<SupplierEntity> {
    const supplier = this.prisma.supplier.findUnique({
      where: { id },
      include: { rawMaterials: true },
    });
    if (!supplier) throw new NotFoundException('Raw material not found');
    this.logger.log(`Fetched supplier with id: ${id}`);
    return supplier;
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    const supplier = this.prisma.supplier.update({
      where: { id },
      data: updateSupplierDto,
    });
    if (!supplier) throw new NotFoundException('Supplier not found');
    this.logger.log(`Updated supplier with id: ${id}`);
    return supplier;
  }

  remove(id: number) {
    const supplier = this.prisma.supplier.update({
      where: { id },
      data: { isDeleted: true },
    });
    if (!supplier) throw new NotFoundException('Supplier not found');
    this.logger.log(`Deleted supplier with id: ${id}`);
    return;
  }
}
