import { UnexpectedError } from '@/domain/errors'
import { TransactionModel } from '@/domain/models'
import { Transaction } from '@/domain/usecases'
import { HttpStatusCode, HttpGetClient } from '@/service/protocols/api'

export class RemoteLoadTransactionList implements Transaction {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<void, TransactionModel[]>
  ) { }

  async loadTransanctionList (): Promise<TransactionModel[]> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}
