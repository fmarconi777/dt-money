import React from 'react'
import Modal from 'react-modal'
import { Container } from './styles'
import CloseImg from '@/views/assets/close.svg'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  return (
    <Modal
      testId={'modal'}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-moda-content'
    >
      <button
      type='button'
      onClick={onRequestClose}
      className='react-modal-close'>
        <CloseImg>Fechar modal</CloseImg>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder='Título'/>
        <input type='number' placeholder='Valor'/>
        <input placeholder='Categoria'/>
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
