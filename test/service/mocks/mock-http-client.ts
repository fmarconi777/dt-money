import { HttpGetClient, HttpGetParams } from '@/service/protocols/api/http-get-client'
import { HttpResponse, HttpStatusCode } from '@/service/protocols/api/http-response'

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
