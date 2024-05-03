import { Injectable } from '@nestjs/common';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';
import { PrismaService } from 'nestjs-prisma';
import { LoggerService } from 'src/common/logger';
import { RawMaterialEntity } from './entities/raw-material.entity';

@Injectable()
export class RawMaterialsService {
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
  ) {
    this.logger.setContext(RawMaterialsService.name);
  }

  /**
   * Creates a new raw material.
   *
   * @param createRawMaterialDto - The data for creating the raw material.
   * @returns Promise<void>
   */
  async create(createRawMaterialDto: CreateRawMaterialDto) {
    await this.prisma.rawMaterial.create({
      data: { ...createRawMaterialDto, supplierId: 1 },
    });
    return;
  }

  async findAll(name: string): Promise<RawMaterialEntity[]> {
    const materials = await this.prisma.rawMaterial.findMany({
      where: { name: { contains: name } },
    });
    const entities = materials.map((item) => new RawMaterialEntity(item));
    return entities;
  }

  async findOne(id: number): Promise<RawMaterialEntity> {
    const material = await this.prisma.rawMaterial.findUnique({
      where: { id },
    });
    if (!material) throw new Error('Raw material not found');
    return new RawMaterialEntity(material);
  }

  async update(
    id: number,
    updateRawMaterialDto: UpdateRawMaterialDto,
  ): Promise<RawMaterialEntity> {
    const material = await this.prisma.rawMaterial.update({
      where: { id },
      data: updateRawMaterialDto,
    });
    if (!material) throw new Error('Raw material not found');
    return new RawMaterialEntity(material);
  }

  async remove(id: number) {
    const material = await this.prisma.rawMaterial.update({
      where: { id },
      data: { isDeleted: true },
    });
    if (!material) throw new Error('Raw material not found');
    return;
  }

  async hardRemove(id: number) {
    await this.prisma.rawMaterial.delete({ where: { id } });
    return;
  }
}
