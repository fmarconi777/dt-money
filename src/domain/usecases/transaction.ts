import { TransactionModel } from '@/domain/models'

export interface Transaction {
  loadTransanctionList: () => Promise<TransactionModel[]>
}
