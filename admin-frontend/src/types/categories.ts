export type Category = {
  id: number
  name: string
  slug: string
  img_url: {
    String: string
    Valid: boolean
  }
}

export type CategoryForm = {
  name: string
  slug: string
}
