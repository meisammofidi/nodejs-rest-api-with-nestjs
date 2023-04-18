export class CreateProductDto {
  name: string;
  price: number;
  category: string;
  manufacturer?: string;
  color?: string;
  model?: string;
  description?: string;
}
