import { HttpGetClient } from 'service/protocols/api/http-get-client'
import { RemoteLoadTransactionList } from '../../../../src/service/usecases/transaction/remote-load-transaction-list'

const makeHttpGetClientSpy = (): HttpGetClient => {
  class HttpGetClientSpy implements HttpGetClient {
    private url: string

    async get<T> (url: string): Promise<T[]> {
      this.url = url
      return []
    }

    getUrl (): string {
      return this.url
    }
  }
  return new HttpGetClientSpy()
}

type SubTypes = {
  sut: RemoteLoadTransactionList
  httpGetClientSpy: HttpGetClient
}

const makeSut = (url = 'any_url'): SubTypes => {
  const httpGetClientSpy = makeHttpGetClientSpy()
  const sut = new RemoteLoadTransactionList(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteLoadTransactionList', () => {
  test('should call HttpGetClient with correct URL', async () => {
    const url = 'any_url'
    const { sut, httpGetClientSpy } = makeSut()
    await sut.loadTransanctionList()
    expect(httpGetClientSpy.getUrl()).toBe(url)
  })
})
