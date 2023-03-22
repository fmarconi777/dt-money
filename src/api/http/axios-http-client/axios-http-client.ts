import { HttpGetClient, HttpGetParams, HttpResponse, HttpStatusCode } from '@/service/protocols/api/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpGetClient<HttpGetParams<any>, any> {
  async get (params: HttpGetParams<any>): Promise<HttpResponse<any>> {
    await axios.get(params.url)
    return {
      statusCode: HttpStatusCode.ok,
      body: ''
    }
  }
}
