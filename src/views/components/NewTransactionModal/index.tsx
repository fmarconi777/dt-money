import React from 'react'
import Modal from 'react-modal'

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
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  )
}
