import React, { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'

export const App: React.FC = () => {
  const [isNewTransactioModalOpen, setIsNewTransactioModalOpen] = useState(false)

  function handleOpenNewTransactioModal (): void {
    setIsNewTransactioModalOpen(true)
  }

  return (
    <>
      <Header onOpenNewransactionModal={ handleOpenNewTransactioModal }/>
      <Modal testId={'modal'} isOpen={isNewTransactioModalOpen}>
        <h2>Cadastrar transação</h2>
      </Modal>
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
