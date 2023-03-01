const brand = [ 'id', 'name', 'description', 'images' ]
const brandExtended = [...brand, 'is_hide']

const category = [ 'id', 'name', 'description', 'images' ]
const categoryExtended = [...category, 'is_hide']

export const attributes = {
    brand,
    brandExtended,

    category,
    categoryExtended
}