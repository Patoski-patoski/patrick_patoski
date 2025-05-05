"use client"

import { useState } from "react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, Transaction, SystemProgram } from "@solana/web3.js"
import "../styles/SolanaWallet.css"

interface SolanaWalletProps {
  recipientAddress: string
}

const SolanaWallet = ({ recipientAddress }: SolanaWalletProps) => {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const [amount, setAmount] = useState(0.1)
  const [isLoading, setIsLoading] = useState(false)
  const [txSignature, setTxSignature] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSendSol = async () => {
    if (!publicKey) {
      setError("Please connect your wallet first")
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const lamports = amount * LAMPORTS_PER_SOL
      const recipient = new PublicKey(recipientAddress)

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipient,
          lamports,
        }),
      )

      const signature = await sendTransaction(transaction, connection)
      await connection.confirmTransaction(signature, "confirmed")

      setTxSignature(signature)
      setIsLoading(false)
    } catch (err) {
      console.error("Error sending SOL:", err)
      setError("Failed to send SOL. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="solana-wallet-container">
      {publicKey ? (
        <div className="wallet-connected">
          <p className="wallet-address">
            Connected: {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
          </p>

          <div className="send-sol-form">
            <div className="amount-input">
              <label htmlFor="amount">Amount (SOL)</label>
              <input
                id="amount"
                type="number"
                min="0.001"
                step="0.001"
                value={amount}
                onChange={(e) => setAmount(Number.parseFloat(e.target.value))}
              />
            </div>

            <button className="send-button" onClick={handleSendSol} disabled={isLoading}>
              {isLoading ? "Sending..." : "Send SOL"}
            </button>
          </div>

          {txSignature && (
            <div className="transaction-success">
              <p>Transaction successful!</p>
              <a
                href={`https://explorer.solana.com/tx/${txSignature}?cluster=devnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="explorer-link"
              >
                View on Solana Explorer
              </a>
            </div>
          )}

          {error && (
            <div className="transaction-error">
              <p>{error}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="wallet-disconnected">
          <p>Please connect your wallet to send SOL</p>
        </div>
      )}
    </div>
  )
}

export default SolanaWallet
