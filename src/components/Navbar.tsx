import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { 
  PhantomWalletAdapter, 
  SolflareWalletAdapter,
  CoinbaseWalletAdapter
} from '@solana/wallet-adapter-wallets'
import {
  ConnectionProvider,
  WalletProvider,
  // useWallet,
  // useConnection
} from '@solana/wallet-adapter-react'
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css'
import '../styles/Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  // Configure Solana wallet adapters
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new CoinbaseWalletAdapter()
  ]

  const endpoint = clusterApiUrl('devnet')

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-text">~$ patrick_patoski</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={activeLink === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/projects" className={activeLink === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/writeups" className={activeLink === '/writeups' ? 'active' : ''}>
          Writeups
        </Link>
        <Link to="/tools" className={activeLink === '/tools' ? 'active' : ''}>
          Tools
        </Link>
        <Link to="/about" className={activeLink === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/contact" className={activeLink === '/contact' ? 'active' : ''}>
          Contact
        </Link>
        
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <div className="wallet-button-container">
                <WalletMultiButton className="wallet-button">
                  Send me SOL
                </WalletMultiButton>
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </nav>
  )
}

export default Navbar
