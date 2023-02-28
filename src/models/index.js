export { Brand } from './brand.js'
export { Cart } from './cart.js'
export { Category } from './category.js'
export { Color } from './color.js'
export { Comment } from './comment.js'
export { Order } from './order.js'
export { OrderItem } from './order_item.js'
export { Product } from './product.js'
export { User } from './user.js'
export { Wishlist } from './wishlist.js'

export { Transaction, sequelize } from '../config/index.js'

import { associate } from './associates.js'

associate()