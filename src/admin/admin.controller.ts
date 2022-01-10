import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

import { Admin } from './schemas/admin.schema';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get(':adminId')
  async getUser(@Param('adminId') adminId: string): Promise<Admin> {
    return this.adminService.getUserById(adminId);
  }

  @Get()
  async getUsers(): Promise<Admin[]> {
      return this.adminService.getUsers();
  }

  @Post()
  async createUser(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
      return this.adminService.createUser(createAdminDto.name, createAdminDto.email, createAdminDto.password, createAdminDto.age)
  }

  @Patch(':adminId')
  async updateUser(@Param('adminId') adminId: string, @Body() updateAdminDto: UpdateAdminDto): Promise<Admin> {
      return this.adminService.updateUser(adminId, updateAdminDto);
  }
}
