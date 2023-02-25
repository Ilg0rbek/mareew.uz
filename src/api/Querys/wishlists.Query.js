const GET = `
	select 
		w.wishlist_id,
		u.user_id,
		u.user_phone,
		p.product_name,
		p.product_price,
		p.product_images,
		w.wishlist_user_id,
		w.wishlist_product_id,
		w.wishlist_created_at,
		w.wishlist_updated_at,
		w.wishlist_deleted_at
	from wishlists w
	join products p on w.wishlist_product_id = p.product_id 
	join users u on w.wishlist_user_id = u.user_id
	where wishlist_deleted_at is null and w.wishlist_user_id = $1::int;
`;

const GET_ONE = `
	select 
		w.wishlist_id,
		u.user_id,
		u.user_phone,
		p.product_name,
		p.product_price,
		w.wishlist_user_id,
		w.wishlist_product_id,
		w.wishlist_created_at,
		w.wishlist_updated_at,
		w.wishlist_deleted_at
	from wishlists w
	join products p on w.wishlist_product_id = p.product_id 
	join users u on w.wishlist_user_id = u.user_id
	where wishlist_deleted_at is null and w.wishlist_id = $1::int;
`;

const POST = `
	insert into wishlists (wishlist_user_id, wishlist_product_id) values 
	($1::int, $2::int)
	returning *;
`

const DELETE = `
	update wishlists set
		wishlist_deleted_at = now()
	where wishlist_deleted_at is null and wishlist_id = $1::int
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
	POST,
	DELETE,
	checkProduct,
	checkUser
}