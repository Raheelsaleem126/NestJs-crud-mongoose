import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { ProductoneModule } from './productone/productone.module';
import { ProducttwoModule } from './producttwo/productone.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/EMS'), UsersModule, ProductoneModule , ProducttwoModule , CartModule , AdminModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
