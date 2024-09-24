export interface IHttpServiceContract {
  post<TRequest, TResponse>(
    url: string,
    payload: TRequest,
    headers
  ): Promise<TResponse>;
}
