export interface Post extends FetchedPost {
  type: PostTypes,
  imgSrc?: string
  date: Date,
  // labels:
}

export type PostTypes = "work" | "holiday" | "hobby" | "sport"

export interface FetchedPost {
  id: number,
  userId: number
  title: string,
  body: string,
}