import query from "#query/products.Query";
import db from "#config/db";
import { Sequelize, Model, DataTypes } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});

class Product extends Model {}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    product_category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Category",
        key: "category_id",
      },
    },
    product_brand_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Brand",
        key: "brand_id",
      },
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_safe_price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    product_images: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    product_colors: {
      type: DataTypes.JSON,
    },
    product_details: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.TEXT,
    },
    product_stock: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    product_shipping_price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    product_status_new: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    product_status_sale: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    product_created_at: {
      type: DataTypes.TIME,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    product_updated_at: {
      type: DataTypes.TIME,
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
      allowNull: false,
    },
    product_deleted_at: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);
export default Product;