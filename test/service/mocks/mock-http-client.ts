import { HttpGetClient, HttpGetParams } from '../../../src/service/protocols/api/http-get-client'
import { HttpResponse, HttpStatusCode } from '../../../src/service/protocols/api/http-response'

export class HttpGetClientSpy implements HttpGetClient {
  url: string
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async get (params: HttpGetParams): Promise<HttpResponse> {
    this.url = params.url
    return await Promise.resolve(this.response)
  }
}
