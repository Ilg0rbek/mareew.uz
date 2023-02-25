import validation from "#validations/compare.Validation"
import Compare from "#repo/compare.Model"

const POST = async (req, res) => { 
	try{ 
		if(validation.GET_ONE({ ...req.body })?.status != true) throw new Error(validation.GET_ONE({ ...req.body }).message)


		if(!(await model.checkProduct({ product_id: req.body.first_product_id }))?.length) throw new Error("First product not found")
		if(!(await model.checkProduct({ product_id: req.body.second_product_id }))?.length) throw new Error("Second product not found")

		if(req.body.first_product_id == req.body.second_product_id) throw new Error("Compare not working!")

		let first_product = await model.GET_ONE({product_id: req.body.first_product_id})
		let second_product = await model.GET_ONE({product_id: req.body.second_product_id})

		if(!first_product) throw new Error("Compare not working!")
		if(!second_product) throw new Error("Compare not working!")

		res.status(200).json({
			status: 200,
			message: "Compare successfully fetched",
			data: {first_product, second_product}
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
	POST
}