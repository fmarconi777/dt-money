import LogoImg from '@/views/assets/logo.svg'

import React from 'react'
import { Container, Content } from './styles'

type HeaderProps = {
  onOpenNewransactionModal: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <LogoImg />
        <button type='button' onClick={onOpenNewransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
