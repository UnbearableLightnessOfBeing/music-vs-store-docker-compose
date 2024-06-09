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
  }

export type ProductForm = {
  name: string
  price_int: number
  in_stock: boolean
  label_id: number
  description: string
  characteristics: string
}

export function convertResponseToProductForm(response: Product): ProductForm {
  return {
    name: response.name,
    price_int: response.price_int,
    in_stock: response.in_stock,
    label_id: response.label_id.Valid ? response.label_id.Int32 : 0,
    description: response.description.Valid ? response.description.String : "",
    characteristics: response.characteristics.Valid ? response.characteristics.String : "",
  } 
}
