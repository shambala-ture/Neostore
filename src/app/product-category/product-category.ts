export class ProductCategory {
  id: string;
  category_name: string;
  category_description: string;
  category_isactive: boolean;
  images: ProductCategoryImage[]
}

export class ProductCategoryImage {
  ImgURL: string;
  ThumbURL100: string;
  ThumbURL250: string;
  container: string;
  id: string;
  isActive: boolean;
  name: string;
  productId: string;
  type: string
}