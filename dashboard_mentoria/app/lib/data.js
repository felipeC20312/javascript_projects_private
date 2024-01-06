import { Products, User } from "./model";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {

  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Products.find({ productname: { $regex: regex } }).count();
    const products = await Products.find({ productname: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products};
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {

  try {
    connectToDB();
    const product = await Products.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to fetch product!");
  }
};
