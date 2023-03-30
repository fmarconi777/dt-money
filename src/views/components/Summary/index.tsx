import React from 'react'
import { Container } from './styles'
import IncomeImg from '@/views/assets/income.svg'
import OutcomeImg from '@/views/assets/outcome.svg'
import TotalImg from '@/views/assets/total.svg'

export const Summary: React.FC = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <IncomeImg />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <OutcomeImg />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <TotalImg />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}
