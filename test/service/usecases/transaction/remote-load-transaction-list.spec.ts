import { HttpGetClient, HttpStatusCode } from '@/service/protocols/api/http'
import { RemoteLoadTransactionList } from '@/service/usecases/transaction/remote-load-transaction-list'
import { TransactionModel } from '@/domain/models'
import { UnexpectedError } from '@/domain/errors'
import { HttpGetClientSpy, mockTransactionModel } from '@/test/service/mocks'
import faker from 'faker'

type SubTypes = {
  sut: RemoteLoadTransactionList
  httpGetClientSpy: HttpGetClient<void, TransactionModel[]>
}

const makeSut = (url: string = faker.internet.url()): SubTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<void, TransactionModel[]>()
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

  test('should return an array of TransactionModel if HttpGetClient returns 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResult = [mockTransactionModel()]
    jest.spyOn(httpGetClientSpy, 'get').mockReturnValueOnce(Promise.resolve({ statusCode: HttpStatusCode.ok, body: httpResult }))

    const transactionArray = await sut.loadTransanctionList()

    expect(transactionArray).toEqual(httpResult)
  })
})
