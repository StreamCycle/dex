import React from 'react'
import Logo from "../moralis-logo.svg"
import Eth from "../eth.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='leftH'>
        <img src={Logo} alt="logo" className="logo"></img>
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
        <div className="headerItem">Swap</div>
        <div className="headerItem">Token</div>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth"></img>
          Ethereum
        </div>
        <div className="connctButton">
          Connect
        </div>
      </div>
    </header>
  )
}

export default Header