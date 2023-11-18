import { TransactionModel } from '@/domain/models'

export interface LoadTransanctionList {
  loadAll: () => Promise<TransactionModel[]>
}
