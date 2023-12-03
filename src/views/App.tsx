import React, { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'

export const App: React.FC = () => {
  const [isNewTransactioModalOpen, setIsNewTransactioModalOpen] = useState(false)

  function handleOpenNewTransactioModal (): void {
    setIsNewTransactioModalOpen(true)
  }

  function handleCloseNewTransactioModal (): void {
    setIsNewTransactioModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewransactionModal={handleOpenNewTransactioModal} />
      <NewTransactionModal isOpen={isNewTransactioModalOpen} onRequestClose={handleCloseNewTransactioModal} />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
