import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Admin, AdminDocument } from "./schemas/admin.schema";

@Injectable()
export class AdminRepository {
    constructor(@InjectModel(Admin.name) private userModel: Model<Admin>) {}

    async findOne(userFilterQuery: FilterQuery<Admin>): Promise<Admin> {
        return this.userModel.findOne(userFilterQuery);
    }

    async find(usersFilterQuery: FilterQuery<Admin>): Promise<Admin[]> {
        return this.userModel.find(usersFilterQuery)
    }

    
    async create(admin: Admin): Promise<Admin> {
        const newadmin = new this.userModel(admin);
        return newadmin.save()
    }

    async findOneAndUpdate(userFilterQuery: FilterQuery<Admin>, admin: Partial<Admin>): Promise<Admin> {
        return this.userModel.findOneAndUpdate(userFilterQuery, admin, { new: true });
    }
}