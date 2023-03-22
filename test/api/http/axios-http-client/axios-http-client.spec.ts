import { AxiosHttpClient } from '@/api/http/axios-http-client/axios-http-client'
import faker from 'faker'
import axios from 'axios'

jest.mock('axios')
export const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.get({ url })
    expect(mockedAxios.get).toHaveBeenCalledWith(url)
  })
})
