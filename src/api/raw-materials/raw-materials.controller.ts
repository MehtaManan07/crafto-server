import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorators';

@Controller('raw-materials')
@ApiTags('Raw materials')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class RawMaterialsController {
  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @Post()
  create(@Body() createRawMaterialDto: CreateRawMaterialDto) {
    return this.rawMaterialsService.create(createRawMaterialDto);
  }

  @Get()
  findAll(@Query() params: { name: string }) {
    return this.rawMaterialsService.findAll(params.name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rawMaterialsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRawMaterialDto: UpdateRawMaterialDto,
  ) {
    return this.rawMaterialsService.update(+id, updateRawMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rawMaterialsService.remove(+id);
  }

  @Delete('/hard/:id')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  hardRemove(@Param('id') id: string) {
    return this.rawMaterialsService.hardRemove(+id);
  }
}
