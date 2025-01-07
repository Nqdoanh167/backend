/** @format */

const mongoose = require('mongoose');
const {generateCode} = require('../../utils/util');
const {Schema} = mongoose;
const {ObjectId} = Schema.Types;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
    },
    category: ObjectId,
    brand: String,
    averageRating: {
      type: Number,
      default: 0,
    },
    // số lượng người đánh giá
    quantityRating: {
      type: Number,
      default: 1,
    },
    quantity_sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    entryPrice: {
      type: Number,
      default: 0,
    },
    images: [String],
    variants: [
      {
        code: {
          type: String,
        },
        color: {
          type: String,
        },
        size: {
          type: String,
        },
        price: {
          type: Number,
          default: 0,
        },
        inventory: {
          type: Number,
          default: 0,
        },
        image: {
          type: String,
        },
      },
    ],
    status: {type: String, enum: ['pending', 'active'], default: 'pending'},
  },
  {
    timestamps: true,
  },
);

productSchema.pre('save', function (next) {
  //slug
  this.slug = this.title.toLowerCase().replace(/ /g, '-');
  next();
});

productSchema.methods.calculateAverageRating = function (newRating) {
  // Tính tổng điểm hiện tại
  const totalRating = this.averageRating * this.quantityRating;

  // Cập nhật số lượng người đánh giá
  this.quantityRating += 1;

  // Tính toán trung bình mới và làm tròn tới 1 số thập phân
  this.averageRating = parseFloat(((totalRating + newRating) / this.quantityRating).toFixed(1));

  return this.save(); // Lưu lại vào cơ sở dữ liệu
};

// productSchema.index({title: 'text', slug: 'text', description: 'text'});

productSchema.methods = {
  view() {
    return {
      _id: this._id,
      title: this.title,
      slug: this.slug,
      description: this.description,
      category: this.category,
      brand: this.brand,
      averageRating: this.averageRating,
      quantityRating: this.quantityRating,
      quantity_sold: this.quantity_sold,
      variants: this.variants,
      price: this.price,
      entryPrice: this.entryPrice,
      images: this.images,
      status: this.status,
    };
  },
};

const Product = mongoose.model('Product', productSchema);
const productCreateDto = {
  title: Product.schema.tree.title,
  description: Product.schema.tree.description,
  category: Product.schema.tree.category,
  brand: Product.schema.tree.brand,
  status: Product.schema.tree.status,
  price: Number,
  entryPrice: Number,
  images: Product.schema.tree.images,
  variants: Product.schema.tree.variants,
};
const productUpdateDto = {
  title: Product.schema.tree.title,
  description: Product.schema.tree.description,
  category: Product.schema.tree.category,
  brand: Product.schema.tree.brand,
  status: Product.schema.tree.status,
  price: Number,
  entryPrice: Number,
  images: Product.schema.tree.images,
  variants: Product.schema.tree.variants,
};
module.exports = {
  Product,
  productCreateDto,
  productUpdateDto,
};
