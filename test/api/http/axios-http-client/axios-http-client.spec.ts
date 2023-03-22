import { AxiosHttpClient } from '@/api/http/axios-http-client/axios-http-client'
import faker from 'faker'
import axios from 'axios'
import { HttpGetParams } from '@/service/protocols/api/http'

jest.mock('axios')
export const mockedAxios = axios as jest.Mocked<typeof axios>

const mockRequest = (): HttpGetParams<any> => ({
  url: faker.internet.url()
})

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and verb', async () => {
    const request = mockRequest()
    const sut = makeSut()
    await sut.get(request)
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url)
  })
})
