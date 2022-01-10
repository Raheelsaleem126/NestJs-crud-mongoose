import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateAdminDto } from "./dto/update-admin.dto";

import { Admin } from "./schemas/admin.schema";
import { AdminRepository } from "./admin.repository";

@Injectable()
export class AdminService {
    constructor(private readonly adminRepository: AdminRepository) {}

    async getUserById(adminId: string): Promise<Admin> {
        return this.adminRepository.findOne({ adminId })
    }

    async getUsers(): Promise<Admin[]> {
        return this.adminRepository.find({});
    }

    async createUser(name: string, email: string, password: string, age: number): Promise<Admin> {
        return this.adminRepository.create({
            adminId: uuidv4(),
            name,
            email,
            password,
            age
        })
    }

    async updateUser(adminId: string, adminUpdates: UpdateAdminDto): Promise<Admin> {
        return this.adminRepository.findOneAndUpdate({ adminId }, adminUpdates);
    }
}