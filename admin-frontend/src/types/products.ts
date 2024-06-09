export type Product = {
  "id": number
  "name": string
  "price_int": number
  "images": string[]
  "label_id": {
    "Int32": number
    "Valid": boolean
  }
    "description": {
      "String": string
      "Valid": boolean
    },
    "characteristics": {
      "String": string
      "Valid": boolean
    },
    "in_stock": boolean
    "category_id": {
      "Int32": number
      "Valid": boolean
    }
  }

export type ProductForm = {
  name: string
  price_int: number
  in_stock: boolean
  label_id: number
  description: string
  characteristics: string
  category_id: number
}

export function convertResponseToProductForm(response: Product): ProductForm {
  return {
    name: response.name,
    price_int: response.price_int,
    in_stock: response.in_stock,
    label_id: response.label_id.Valid ? response.label_id.Int32 : 0,
    description: response.description.Valid ? response.description.String : "",
    characteristics: response.characteristics.Valid ? response.characteristics.String : "",
    category_id: response.category_id.Valid ? response.category_id.Int32 : 0
  } 
}
