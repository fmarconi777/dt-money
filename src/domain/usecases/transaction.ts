import { TransactionModel } from '@/domain/model/transaction-model'

export interface Transaction {
  loadTransanctionList: () => Promise<TransactionModel[]>
}
