/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema(
  {
    name: String,
    date_joined: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    date_of_birth: Date,
    telephoneNumber: String,
    avatar: String,
    address: String,
    cityCode: String,
    districtCode: String,
    wardCode: String,
    city: String,
    district: String,
    ward: String,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    wishList: [String],
  },
  {
    timestamps: true,
  },
);

userSchema.methods = {
  view() {
    return {
      _id: this._id,
      name: this.name,
      date_joined: this.date_joined,
      email: this.email,
      date_of_birth: this.date_of_birth,
      telephoneNumber: this.telephoneNumber,
      avatar: this.avatar,
      address: this.address,
      role: this.role,
      wishList: this.wishList,
      cityCode: this.cityCode,
      districtCode: this.districtCode,
      wardCode: this.wardCode,
      city: this.city,
      district: this.district,
      ward: this.ward,
    };
  },
};

const User = mongoose.model('User', userSchema);
const userRegisterDto = {
  email: User.schema.tree.email,
  password: User.schema.tree.password,
  name: User.schema.tree.name,
  telephoneNumber: User.schema.tree.telephoneNumber,
};
const userLoginDto = {
  email: User.schema.tree.email,
  password: User.schema.tree.password,
};

const userCreateDto = {
  email: User.schema.tree.email,
  password: User.schema.tree.password,
  name: User.schema.tree.name,
  date_of_birth: User.schema.tree.date_of_birth,
  telephoneNumber: User.schema.tree.telephoneNumber,
  avatar: User.schema.tree.avatar,
  address: User.schema.tree.address,
  role: User.schema.tree.role,
  wishList: User.schema.tree.wishList,
  cityCode: User.schema.tree.cityCode,
  districtCode: User.schema.tree.districtCode,
  wardCode: User.schema.tree.wardCode,
  city: User.schema.tree.city,
  district: User.schema.tree.district,
  ward: User.schema.tree.ward,
};

const userUpdateDto = {
  email: User.schema.tree.email,
  password: User.schema.tree.password,
  name: User.schema.tree.name,
  date_of_birth: User.schema.tree.date_of_birth,
  telephoneNumber: User.schema.tree.telephoneNumber,
  avatar: User.schema.tree.avatar,
  address: User.schema.tree.address,
  role: User.schema.tree.role,
  wishList: User.schema.tree.wishList,
  cityCode: User.schema.tree.cityCode,
  districtCode: User.schema.tree.districtCode,
  wardCode: User.schema.tree.wardCode,
  city: User.schema.tree.city,
  district: User.schema.tree.district,
  ward: User.schema.tree.ward,
};
module.exports = {
  User,
  userLoginDto,
  userRegisterDto,
  userCreateDto,
  userUpdateDto,
};
