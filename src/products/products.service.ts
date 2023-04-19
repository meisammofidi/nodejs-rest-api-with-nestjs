import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) : Promise<Product> {
    const newProduct = new this.productModel(createProductDto)
    return await newProduct.save()
  }

  async findAll() : Promise<Product[]> {
    return await this.productModel.find()
  }

  async findOne(id: number): Promise<Product> {
    return this.productModel.findOne({_id : id})
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
