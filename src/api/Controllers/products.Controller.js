import validation from "#validations/products.Validation";
import Product from "#repo/products.Model";

import { resolve } from "path";

const GET = async (req, res) => {
  try {
    let products = await Product.GET(req.query);

    if (!products) throw new Error("No products found");

    products = products.map((product) => {
      product.product_images = product.product_images.map((image) => {
        image = `${process.env.APP_URL}/products/${image}`;
        return image;
      });
      product.slug =
        "/" + product.product_name.replace(/\s+/g, "-").toLowerCase();
      return product;
    });

    let response = {
      status: 200,
      message: "Products successfully fetched",
      data: products,
    };

    if (req.query.limit) {
      response.count = products.length;
      response.offset = parseInt(req.query.offset);
    }

    res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

const GET_ONE = async (req, res) => {
  try {
    if (validation.GET_ONE({ ...req.params })?.status != true)
      throw new Error(validation.GET_ONE({ ...req.params }).message);

    let product = await Product.GET_ONE({ ...req.params });

    if (!product) throw new Error("No product found");

    product.product_images = product.product_images.map((image) => {
      image = `${process.env.APP_URL}/products/${image}`;
      return image;
    });
    product.slug =
      "/" + product.product_name.replace(/\s+/g, "-").toLowerCase();

    res.status(200).json({
      status: 200,
      message: "Product successfully fetched",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

const GET_COMMENTS = async (req, res) => {
  try {
    if (validation.GET_COMMENTS({ ...req.params })?.status != true)
      throw new Error(validation.GET_COMMENTS({ ...req.params }).message);

    let comments = await Product.GET_COMMENTS({ ...req.params });

    if (!comments?.length) throw new Error("No comments found");

    res.status(200).json({
      status: 200,
      message: "Comments successfully fetched",
      data: comments,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

const POST = async (req, res) => {
  try {
    if (req.files) {
      let files = Object.values(req.files);
      files = files.map((file) => {
        if (
          file.mimetype != "image/jpeg" &&
          file.mimetype != "image/webp" &&
          file.mimetype != "image/jpg" &&
          file.mimetype != "image/png" &&
          file.size < 10000
        )
          throw new Error("Invalid file type");
        return Date.now() + "-" + file.name.replace(/\s+/g, "-").toLowerCase();
      });

      if (req.body?.product_colors) {
        req.body.product_colors = JSON.parse(req.body.product_colors);
      }

      if (req.body?.product_details) {
        req.body.product_details = JSON.parse(
          JSON.stringify(JSON.parse(req.body.product_details))
        );
      }

      // Validation product data with post methods
      const valid = validation.POST({ ...req.body, product_images: files });
      if (!valid.status) throw new Error(valid.message);

      if (!(await Product.checkBrand({ ...req.body })))
        throw new Error("Brand not found");

      if (!(await Product.checkCategory({ ...req.body })))
        throw new Error("Category not found");

      const product = await Product.POST({ ...req.body, product_images: files });

      if (!product) throw new Error("Product not created!");

      const dataFiles = Object.values(req.files);

      for (let i = 0; i < dataFiles.length; i++) {
        await dataFiles[i].mv(
          resolve(process.cwd(), "src", "uploads", "products", files[i])
        );
      }

      res.status(200).json({
        status: 200,
        message: "Product successfully created",
        data: product,
      });
    } else {
      if (req.body.product_colors) {
        req.body.product_colors = JSON.parse(req.body.product_colors);
      }
      if (req.body.product_details) {
        req.body.product_details = JSON.parse(
          JSON.stringify(JSON.parse(req.body.product_details))
        );
      }

      // Validation product data with post methods
      const valid = validation.POST({ ...req.body, product_images: files });
      if (!valid.status) throw new Error(valid.message);

      if (!(await Product.checkBrand({ ...req.body })))
        throw new Error("Brand not found");

      if (!(await Product.checkCategory({ ...req.body })))
        throw new Error("Category not found");

      const product = await Product.POST({ ...req.body, product_images: files });

      if (!product) throw new Error("Product not created!");

      const dataFiles = Object.values(req.files);

      for (let i = 0; i < dataFiles.length; i++) {
        await dataFiles[i].mv(
          resolve(process.cwd(), "src", "uploads", "products", files[i])
        );
      }

      res.status(200).json({
        status: 200,
        message: "Product successfully created",
        data: product,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

const PUT = async (req, res) => {
  try {
    if (req?.files) {
      let files = Object.values(req.files);
      files = files.map((file) => {
        if (
          file.mimetype != "image/jpeg" &&
          file.mimetype != "image/webp" &&
          file.mimetype != "image/jpg" &&
          file.mimetype != "image/png" &&
          file.size < 10000
        )
          throw new Error("Invalid file type");
        return Date.now() + "-" + file.name.replace(/\s+/g, "-").toLowerCase();
      });

      if (req.body.product_colors) {
        req.body.product_colors = JSON.parse(req.body.product_colors);
      }
      if (req.body.product_details) {
        req.body.product_details = JSON.parse(
          JSON.stringify(JSON.parse(req.body.product_details))
        );
      }

      const valid = validation.PUT({ ...req.body, product_images: files });

      if (!valid.status) throw new Error(valid.message);

      if (!(await Product.checkProduct({ ...req.body }))) {
        throw new Error("Product not found");
      }
      if (!(await Product.checkBrand({ ...req.body })))
        throw new Error("Brand not found");

      if (!(await Product.checkCategory({ ...req.body })))
        throw new Error("Category not found");

      const product = await Product.PUT({ ...req.body, product_images: files });

      if (!product) throw new Error("Product not created!");

      const dataFiles = Object.values(req.files);

      for (let i = 0; i < dataFiles.length; i++) {
        await dataFiles[i].mv(
          resolve(process.cwd(), "src", "uploads", "products", files[i])
        );
      }

      res.status(200).json({
        status: 200,
        message: "Product successfully created",
        data: product,
      });
    } else {
      if (req.body.product_colors) {
        req.body.product_colors = JSON.parse(req.body.product_colors);
      }
      if (req.body.product_details) {
        req.body.product_details = JSON.parse(
          JSON.stringify(JSON.parse(req.body.product_details))
        );
      }

      const valid = validation.PUT({ ...req.body });

      if (!valid.status) throw new Error(valid.message);

      if (!(await Product.checkProduct({ ...req.body }))) {
        throw new Error("Product not found");
      }
      if (!(await Product.checkBrand({ ...req.body })))
        throw new Error("Brand not found");

      if (!(await Product.checkCategory({ ...req.body })))
        throw new Error("Category not found");

      const product = await Product.PUT({ ...req.body });

      if (!product) throw new Error("Product not updated!");

      res.status(200).json({
        status: 200,
        message: "Product successfully updated",
        data: product,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

const DELETE = async (req, res) => {
  try {
    if (req?.user?.user_role !== "admin")
      throw new Error("You are not authorized to perform this action");

    if (validation.DELETE({ ...req.params })?.status !== true)
      throw new Error(validation.DELETE({ ...req.params }).message);

    if (!(await Product.checkProduct({ ...req.params })))
      throw new Error("Product not found");

    if (!(await Product.DELETE({ ...req.params })))
      throw new Error("Product not deleted!");

    res.status(200).json({
      status: 200,
      message: "Product successfully deleted",
      data: [],
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

export default {
  GET,
  GET_ONE,
  GET_COMMENTS,
  POST,
  PUT,
  DELETE,
};
