import LogoImg from '@/views/assets/logo.svg'

import React from 'react'
import { Container, Content } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoImg />
        <button type='button'>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
