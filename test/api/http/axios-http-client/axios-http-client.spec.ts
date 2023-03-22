import { AxiosHttpClient } from '@/api/http/axios-http-client/axios-http-client'
import { HttpGetParams } from '@/service/protocols/api/http'
import faker from 'faker'
import axios from 'axios'

jest.mock('axios')
export const mockedAxios = axios as jest.Mocked<typeof axios>

const mockRequest = (): HttpGetParams<any> => ({
  url: faker.internet.url()
})

const mockedAxiosResult = {
  status: faker.datatype.number(),
  data: faker.random.objectElement()
}

mockedAxios.get.mockResolvedValue(mockedAxiosResult)

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

  test('should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.get(mockRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
