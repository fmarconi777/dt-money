import { UnexpectedError } from '@/domain/errors'
import { TransactionModel } from '@/domain/models'
import { LoadTransanctionList } from '@/domain/usecases'
import { HttpStatusCode, HttpGetClient } from '@/service/protocols/api/http'

export class RemoteLoadTransactionList implements LoadTransanctionList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<void, TransactionModel[]>
  ) { }

  async loadAll (): Promise<TransactionModel[]> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}
