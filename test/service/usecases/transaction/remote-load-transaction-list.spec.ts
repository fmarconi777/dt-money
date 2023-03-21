import { HttpGetClient } from '../../../../src/service/protocols/api/http-get-client'
import { HttpStatusCode } from '../../../../src/service/protocols/api/http-response'
import { RemoteLoadTransactionList } from '../../../../src/service/usecases/transaction/remote-load-transaction-list'
import { UnexpectedError } from '../../../../src/domain/errors/unexpected-error'
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
    const getSpy = jest.spyOn(httpGetClientSpy, 'get')

    await sut.loadTransanctionList()

    expect(getSpy).toHaveBeenCalledWith({ url })
  })

  test('should throw UnexpectedError if HttpGetClient returns 400', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    jest.spyOn(httpGetClientSpy, 'get').mockReturnValueOnce(Promise.resolve({ statusCode: HttpStatusCode.badRequest }))

    const promise = sut.loadTransanctionList()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('should throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    jest.spyOn(httpGetClientSpy, 'get').mockReturnValueOnce(Promise.resolve({ statusCode: HttpStatusCode.notFound }))

    const promise = sut.loadTransanctionList()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    jest.spyOn(httpGetClientSpy, 'get').mockReturnValueOnce(Promise.resolve({ statusCode: HttpStatusCode.serverError }))

    const promise = sut.loadTransanctionList()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
