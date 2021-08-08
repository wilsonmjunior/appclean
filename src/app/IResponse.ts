export type IResponse<T> = {
  data: T | null
  error: Error | null
}
