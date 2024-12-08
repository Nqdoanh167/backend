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
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
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
};

const userUpdateDto = {
  name: User.schema.tree.name,
  date_of_birth: User.schema.tree.date_of_birth,
  telephoneNumber: User.schema.tree.telephoneNumber,
  avatar: User.schema.tree.avatar,
  address: User.schema.tree.address,
};
module.exports = {
  User,
  userLoginDto,
  userRegisterDto,
  userCreateDto,
  userUpdateDto,
};
