import { TransactionModel } from '@/domain/model/transaction-model'
import faker from 'faker'

export const mockTransactionModel = (): TransactionModel => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.word(),
  amount: faker.datatype.float().toString(),
  type: faker.lorem.word(),
  category: faker.lorem.word(),
  createdAt: faker.date.past().toISOString()
})
