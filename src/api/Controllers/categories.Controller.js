import validation from "#validations/categories.Validation"
import Category from "#repo/categories.Model"

const GET = async (req, res) => { 
	try{
		const categories = await Category.GET()

		if(!categories) throw new Error("Categories not found")

		res.status(200).json({
			status: 200,
			message: "Categories successfully fetched",
			data: categories
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

		const category = await Category.GET_ONE({...req.params})

		if(!category?.length) throw new Error("Category not found")

		res.status(200).json({
			status: 200,
			message: "Category successfully fetched",
			data: category
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const GET_PRODUCTS = async (req, res) => { 
	try{
		if(validation.GET_PRODUCTS({ ...req.params })?.status != true) throw new Error(validation.GET_PRODUCTS({ ...req.params }).message)

		let products = await Category.GET_PRODUCTS({...req.params, ...req.query})

		if(!products?.length) throw new Error("Products not found")

		let response = {
			status: 200,
			message: "Products successfully fetched",
			data: products
		}

		products = products.map(product => {
			product.product_images = product.product_images.map(image => {
				image = `${process.env.APP_URL}/products/${image}`
				return image 
			})
			product.slug = "/" + product.product_name.replace(/\s+/g, '-').toLowerCase()
			return product
		})

		if (req.query.limit) {
			response.count = products.length
			response.offset = parseInt(req.query.offset)
		}

		res.status(200).json(response)
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
		if(req.user.user_role !== "admin") throw new Error("You are not authorized to perform this action")

		if(validation.POST({ ...req.body })?.status !== true) throw new Error(validation.POST({ ...req.body }).message)

		if(await Category.checkCategory({ ...req.body })) throw new Error("Category already exist!") 
		
		const category = await Category.POST({ ...req.body });


		res.status(200).json({
			status: 200,
			message: "Category successfully created",
			data: category
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}


const PUT = async (req, res) => {
	try{
		if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.PUT({ ...req.body })?.status != true) throw new Error(validation.PUT({ ...req.body }).message)
		
		if(await Category.checkCategory({ ...req.body })) throw new Error("Category already exist!") 

		const category = await Category.PUT({ ...req.body });

		if(!category) throw new Error("Category not found")

		res.status(200).json({
			status: 200,
			message: "Category successfully updated",
			data: category
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
		if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.DELETE({ ...req.body })?.status != true) throw new Error(validation.DELETE({ ...req.body }).message)

		const category = await Category.DELETE({...req.body});

		if(!category) throw new Error("Category not found")

		res.status(200).json({
			status: 200,
			message: "Category successfully deleted",
			data: category
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
	GET_ONE,
	GET_PRODUCTS,
	POST,
	PUT,
	DELETE
}