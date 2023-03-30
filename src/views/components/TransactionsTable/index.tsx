import React from 'react'
import { Container } from './styles'

export const TransactionsTable: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='title'>Desenvovimento de website</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvovimento</td>
            <td>20/02/2023</td>
          </tr>
          <tr>
            <td className='title'>Aluguel</td>
            <td className='withdraw'>- R$1.100</td>
            <td>Desenvovimento</td>
            <td>17/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
