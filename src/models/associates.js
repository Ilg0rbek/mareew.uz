import { Brand, Cart, Category, Order, OrderItem, Product, User, Wishlist, Comment } from './index.js'

export function associate() {
    Brand.hasMany(Product, {
        foreignKey: 'brand_id',
        onDelete: 'RESTRICT'
    })

    Category.hasMany(Product, {
        foreignKey: 'category_id',
        onDelete: 'RESTRICT'
    })

    Order.hasMany(OrderItem, {
        foreignKey: 'order_id',
        onDelete: 'RESTRICT'
    })

    Product.hasMany(OrderItem, {
        foreignKey: 'product_id',
        onDelete: 'RESTRICT'
    })

    Product.hasMany(Cart, {
        foreignKey: 'product_id',
        onDelete: 'CASCADE'
    })

    Product.hasMany(Wishlist, {
        foreignKey: 'product_id',
        onDelete: 'CASCADE'
    })

    Product.hasMany(Comment, {
        foreignKey: 'product_id',
        onDelete: 'CASCADE'
    })

    User.hasMany(Order, {
        foreignKey: 'user_id',
        onDelete: 'RESTRICT'
    })

    User.hasMany(Order, {
        foreignKey: 'courier_id',
        onDelete: 'RESTRICT'
    })

    User.hasMany(Cart, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    })

    User.hasMany(Wishlist, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    })

    User.hasMany(Comment, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    })
}