import { AxiosHttpClient } from '@/api/http/axios-http-client/axios-http-client'
import { mockAxios } from '@/test/api/mocks'
import { mockGetRequest } from '@/test/service/mocks'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and verb', async () => {
    const request = mockGetRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.get(request)
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url)
  })

  test('should return the correct statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.get(mockGetRequest())
    expect(promise).toEqual(mockedAxios.get.mock.results[0].value)
  })
})
