import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { loggingMiddleware, PrismaModule } from 'nestjs-prisma';
import { RawMaterialsModule } from './raw-materials/raw-materials.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        explicitConnect: true,
        middlewares: [loggingMiddleware()],
      },
    }),
    AuthModule,
    UsersModule,
    RawMaterialsModule,
    SuppliersModule,
  ],
  exports: [AuthModule, UsersModule],
})
export class ApiModule {}
