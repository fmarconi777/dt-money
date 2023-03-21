import { HttpGetClient, HttpGetParams } from '../../../src/service/protocols/api/http-get-client'

export class HttpGetClientSpy implements HttpGetClient {
  private url: string

  async get<T> (params: HttpGetParams): Promise<T[]> {
    this.url = params.url
    return []
  }

  getUrl (): string {
    return this.url
  }
}
