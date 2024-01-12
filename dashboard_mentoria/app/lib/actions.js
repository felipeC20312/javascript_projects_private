"use server";

import { redirect } from "next/navigation";
import { Products, User } from "./model";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { signIn } from "../auth";

// --> ADD USER <--
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to create User");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// --> UPDATE USER <--
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updateFilds = {
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFilds).forEach(
      (key) => (updateFilds[key] === "" || undefined) && delete updateFilds[key]
    );

    await User.findByIdAndUpdate(id, updateFilds);
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to update User");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// --> DELETE USER <--
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to delete User");
  }

  revalidatePath("/dashboard/users");
};

// --> ADD PRODUCT <--
export const addProduct = async (formData) => {
  const { productname, category, price, stock, color, size, description } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Products({
      productname,
      category,
      price,
      stock,
      color,
      size,
      description,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to create Product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// --> UPDATE PRODUCT <--
export const updateProcuct = async (formData) => {
  const { id, productname, category, price, stock, color, size, description } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFilds = {
      productname,
      category,
      price,
      stock,
      color,
      size,
      description,
    };

    Object.keys(updateFilds).forEach(
      (key) => (updateFilds[key] === "" || undefined) && delete updateFilds[key]
    );

    await Products.findByIdAndUpdate(id, updateFilds);
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to update products");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// --> DELETE PRODUCT <--
export const deleteProcutc = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Products.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Error: Failed to delete Product");
  }

  revalidatePath("/dashboard/products");
};

// --> AUTHENTICATE <--
export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
