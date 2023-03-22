import { HttpGetClient, HttpGetParams, HttpResponse, HttpStatusCode } from '@/service/protocols/api/http'

export class HttpGetClientSpy<T, R> implements HttpGetClient<T, R> {
  url: string
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async get (params: HttpGetParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    return await Promise.resolve(this.response)
  }
}
