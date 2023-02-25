// order_content is array!
// order_content = [{product_id: 1, quantity: 2, color: 'White', name: 'Product1', image: 'image1.jpg'}, {product_id: 2, quantity: 1, color: 'Red', name: 'Product1', image: 'image2.jpg'}]
// join order_content with product_id to products table to get product_name
// order_content in table orders is array of objects
const GET = `
	select
		order_id,
		order_user_id,
		order_status,
		order_content,
		order_created_at,
		order_updated_at,
		order_deleted_at
	from orders
	where order_deleted_at is null
`

const GET_ONE = `
	select 
		o.order_id,
		u.user_id,
		u.user_phone,
		o.order_content,
		o.order_phone_number,
		o.order_status,
		o.order_address,
		o.order_created_at,
		o.order_deleted_at,
		o.order_updated_at
	from orders o
	join users u on o.order_user_id = u.user_id
	where o.order_deleted_at is null and o.order_id = $1::int;
`

const GET_FOR_USER = `
	select 
		o.order_id,
		u.user_id,
		u.user_phone,
		o.order_content,
		o.order_phone_number,
		o.order_status,
		o.order_address,
		o.order_created_at,
		o.order_deleted_at,
		o.order_updated_at
	from orders o
	join users u on o.order_user_id = u.user_id
	where o.order_deleted_at is null and o.order_user_id = $1::int;
`

const POST = `
	insert into orders (order_user_id, order_content, order_address, order_phone_number) values 
	($1::int, $2::json, $3::text, $4::varchar) 
	returning *;
`

const PUT = `
	update orders set
		order_user_id = (
			case
				when $1::int is not null then $1::int
				else order_user_id
			end
		),
		order_content = (
			case
				when $2::json is not null then $2::json
				else order_content
			end
		),
		order_status = (
			case
				when $3::varchar is not null then $3::varchar
				else order_status
			end
		),
		order_address = (
			case
				when $4::varchar is not null then $4::varchar
				else order_address
			end
		),
		order_phone_number = (
			case
				when $6::varchar is not null then $6::varchar
				else order_phone_number
			end
		),
		order_updated_at = now()
	where order_deleted_at is null and order_id = $5::int
	returning *;
`

const DELETE = `
	update orders set
		order_deleted_at = now()
	where order_deleted_at is null and order_id = $1::int
	returning *;
`

const checkProduct = `
	select
		*
	from products
	where product_id = $1::int and product_deleted_at is null;
`

const checkUser = `
	select
		*
	from users
	where user_id = $1::int and user_deleted_at is null;
`

export default {
	GET,
	GET_ONE,
	GET_FOR_USER,
	POST,
	PUT,
	DELETE,
	checkProduct,
	checkUser
}