import { HttpGetClient } from '../../../src/service/protocols/api/http-get-client'

export class HttpGetClientSpy implements HttpGetClient {
  private url: string

  async get<T> (url: string): Promise<T[]> {
    this.url = url
    return []
  }

  getUrl (): string {
    return this.url
  }
}
