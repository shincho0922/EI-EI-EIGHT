export interface Article {
  imageUrl: string
  title: string
  userId: string
  content: string
  contentCount: number
}

export interface ResponseArticle {
  imageUrl: string
  title: string
  userId: string
  content: string
  contentCount: number
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
