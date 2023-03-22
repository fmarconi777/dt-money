import { HttpGetParams } from '@/service/protocols/api/http'
import faker from 'faker'

export const mockGetRequest = (): HttpGetParams<any> => ({
  url: faker.internet.url()
})
