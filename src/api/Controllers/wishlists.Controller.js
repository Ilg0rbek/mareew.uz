import validation from "#validations/wishlists.Validation"
import Wishlist from "#repo/wishlists.Model"

const GET = async (req, res) => { 
	try{
		if(!["user", "admin"].includes(req?.user?.user_role)) throw new Error("You are not authorized to perform this action")

        if(validation.GET_ONE({ wishlist_id: req?.body?.wishlist_user_id ? req?.body?.wishlist_user_id  : req?.user?.user_id })?.status != true) throw new Error(validation.GET_ONE({ cart_user_id: req?.body?.cart_user_id ? req?.body?.cart_user_id  : req.user.user_id }).message)

		let wishlists = await Wishlist.GET({wishlist_user_id: req?.body?.wishlist_user_id ? req?.body?.wishlist_user_id  : req?.user?.user_id})

		if(!wishlists?.length) throw new Error("No withlist found")

		wishlists = wishlists.map(wishlist => {
		        wishlist.product_images = wishlist.product_images.map(image => {
                                image = `${process.env.APP_URL}/products/${image}`
                                return image 
                })
                wishlist.product_slug = "/" + wishlist.product_name.replace(/\s+/g, '-').toLowerCase()
			return wishlist
		})

		res.status(200).json({
			status: 200,
			message: "Wishlists successfully fetched",
			data: wishlists
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const GET_ONE = async (req, res) => { 
	try{ 
		if(validation.GET_ONE({ ...req.params })?.status != true) throw new Error(validation.GET_ONE({ ...req.params }).message)

		let wishlist = await Wishlist.GET_ONE({...req.params})

		if(!wishlist) throw new Error("Wishlist not found!")

		res.status(200).json({
			status: 200,
			message: "Wishlist successfully fetched",
			data: wishlist
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const POST = async (req, res) => { 
	try{
		if(validation.POST({ ...req.body,wishlist_user_id: req?.body?.wishlist_user_id ? req?.body?.wishlist_user_id  : req.user.user_id })?.status != true) throw new Error(validation.POST({ ...req.body }).message)
		
		if(!(await Wishlist.checkProduct({ ...req.body }))) throw new Error("Product not found")

		if(!(await Wishlist.checkUser({ wishlist_user_id: req?.body?.wishlist_user_id ? req?.body?.wishlist_user_id  : req.user.user_id }))) throw new Error("User not found")

		const wishlist = await Wishlist.POST({ ...req.body , wishlist_user_id: req?.body?.wishlist_user_id ? req?.body?.wishlist_user_id  : req.user.user_id})

		if(!wishlist) throw new Error("Wishlist not found!")

		res.status(200).json({
			status: 200,
			message: "Wishlist successfully created",
			data: wishlist
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const DELETE = async (req, res) => {
	try{
		if(validation.DELETE({ ...req.body })?.status != true) throw new Error(validation.DELETE({ ...req.body }).message)

		const wishlist = await Wishlist.DELETE({...req.body})

		if(!wishlist) throw new Error("Wishlist not found!")

		res.status(200).json({
			status: 200,
			message: "Wishlist successfully deleted!",
			data: wishlist
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}


export default {
	GET,
	POST,
	DELETE,
	GET_ONE
}