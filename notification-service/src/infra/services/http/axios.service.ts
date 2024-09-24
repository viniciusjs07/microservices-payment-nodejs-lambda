import axios, { AxiosResponse } from "axios";
import { IHttpServiceContract } from "src/domain/service/http/http.service.contract";

export class AxiosHttpService implements IHttpServiceContract {
  async post<TRequest, TResponse>(
    url: string,
    payload: TRequest,
    headers
  ): Promise<TResponse> {
    const response: AxiosResponse<TResponse> = await axios.post<TResponse>(
      url,
      payload,
      {
        headers,
      }
    );
    return response as TResponse;
  }
}
