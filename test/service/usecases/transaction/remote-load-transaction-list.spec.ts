import { HttpGetClient } from '../../../../src/service/protocols/api/http-get-client'
import { RemoteLoadTransactionList } from '../../../../src/service/usecases/transaction/remote-load-transaction-list'
import { HttpGetClientSpy } from '../../mocks/mock-http-client'
import faker from 'faker'

type SubTypes = {
  sut: RemoteLoadTransactionList
  httpGetClientSpy: HttpGetClient
}

const makeSut = (url: string = faker.internet.url()): SubTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteLoadTransactionList(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteLoadTransactionList', () => {
  test('should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.loadTransanctionList()
    expect(httpGetClientSpy.getUrl()).toBe(url)
  })
})
