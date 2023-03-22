import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { TransactionModel } from '@/domain/model/transaction-model'
import { Transaction } from '@/domain/usecases/transaction'
import { HttpGetClient } from '@/service/protocols/api/http-get-client'
import { HttpStatusCode } from '@/service/protocols/api/http-response'

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
