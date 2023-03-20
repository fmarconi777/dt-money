import { TransactionModel } from 'domain/model/transaction-model'
import { Transaction } from 'domain/usecases/transaction'
import { HttpGetClient } from 'service/protocols/api/http-get-client'

export class RemoteLoadTransactionList implements Transaction {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) { }

  async loadTransanctionList (): Promise<TransactionModel[]> {
    await this.httpGetClient.get(this.url)
    return []
  }
}
