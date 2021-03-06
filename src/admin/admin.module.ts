import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Admin, AdminSchema } from "./schemas/admin.schema";
import { AdminController } from "./admin.controller";
import { AdminRepository } from "./admin.repository";
import { AdminService } from "./admin.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])],
    controllers: [AdminController],
    providers: [AdminService, AdminRepository]
})
export class AdminModule {}
