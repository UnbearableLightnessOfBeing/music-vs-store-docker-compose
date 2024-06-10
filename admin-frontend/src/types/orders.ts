export type Order = {
  id: number
  city: string
  country_id: number
  created_at: {
    Time: string
    Valid: boolean
  }
  customer_firstname: string
  customer_lastname: string
  customer_middlename: string
  customer_addres: string
  customer_email: string
  customer_phone_number: string
  delivery_method: {
    String: string
    Valid: boolean
  }
  delivery_price_int: number
  district: string
  payment_method: {
    String: string
    Valid: number
  }
  postal_code: number
  price_int: number
  product_count: number
  total_int: number
  user_id: number
}

export type OrderProduct = {
  "name": string,
  "images": string[],
  "count": number,
  "price_int": number,
  "product_total": number
}

export type OrderSingle = {
  "id": number,
  "user_id": number,
  "product_count": number,
  "price_int": number,
  "price_dec": {
    "Int32": number,
    "Valid": boolean
  },
  "delivery_price_int": number,
  "delivery_price_dec": {
    "Int32": number,
    "Valid": boolean
  },
  "total_int": number,
  "total_dec": {
    "Int32": number,
    "Valid": boolean
  },
  "country_id": number,
  "district": "Брянская область",
  "city": "Braynsk",
  "postal_code": number,
  "delivery_method_id": number,
  "payment_method_id": number,
  "customer_firstname": "Pavel",
  "cusotmer_middlename": "СИДОРОВИЧ",
  "customer_lastname": "Golomazdin",
  "customer_phone_number": "89532702473",
  "customer_email": "golomazdinp@gmail.com",
  "customer_address": "pochtovaya 77 66",
  "customer_comment": {
    "String": "asdf3333fdsaf",
    "Valid": boolean
  },
  "created_at": {
    "Time": "2024-06-07T18:40:33.809115Z",
    "Valid": boolean
  },
  "created_formatted": "07.06.2024 06:06",
  "payment_name": {
    "String": "Наличные",
    "Valid": boolean
  },
  "delivery_name": {
    "String": "Курьером",
    "Valid": boolean
  }
}
