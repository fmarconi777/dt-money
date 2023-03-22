import { AxiosHttpClient } from '@/api/http/axios-http-client/axios-http-client'
import faker from 'faker'
import axios from 'axios'

jest.mock('axios')
export const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL', async () => {
    const url = faker.internet.url()
    const sut = new AxiosHttpClient()
    await sut.get({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
