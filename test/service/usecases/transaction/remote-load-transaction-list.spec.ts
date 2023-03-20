import { HttpGetClient } from '../../../../src/service/protocols/api/http-get-client'
import { RemoteLoadTransactionList } from '../../../../src/service/usecases/transaction/remote-load-transaction-list'
import { HttpGetClientSpy } from '../../mocks/mock-http-client'

type SubTypes = {
  sut: RemoteLoadTransactionList
  httpGetClientSpy: HttpGetClient
}

const makeSut = (url = 'any_url'): SubTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
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
