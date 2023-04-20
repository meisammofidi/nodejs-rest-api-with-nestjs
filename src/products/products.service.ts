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
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return await newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.productModel.findOneAndUpdate({ _id: id }, updateProductDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.productModel.findOneAndRemove({ _id: id });
  }
}
