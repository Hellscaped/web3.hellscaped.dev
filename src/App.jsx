import { React, useState } from 'react'
import './App.css'
import { Button } from 'antd'

function Scare() {
  var audio = new Audio('/alert.mp3')
  audio.loop = true
  audio.volume = 1
  audio.play()

  var warning = document.createElement("img")
  warning.src = "/fbi.png"
  warning.style.position = "fixed"
  warning.style.top = "0"
  warning.style.left = "0"
  warning.style.width = "100%"
  warning.style.height = "100%"
  warning.style.zIndex = "1000"
  document.body.appendChild(warning)
}



function CryptoWallet(address,type) {
  return (
    <div class="cryptowallet">
      <p class="cryptotext">
        {type}: {address}
      </p>
      <Button class="cryptobutton" type="primary" onClick={Scare}>Click to reveal wallet address</Button>
    </div>
  )

}
function MonkeyPicture(sorc) {
  return (
    <div>
      <img src={sorc} alt="monkey" />
    </div>
  )
}

function App() {
  
  return (
    <>
      <div>
        <h1>Hellscaped's Web3 Assets</h1>
        <p>
          <br></br>
          Crypto Wallets (Anti-scraping measures in place, click to reveal wallet address)
        </p>
        {CryptoWallet("13LCTo7hMvfqTWbJ1hF","BTC")}
        {CryptoWallet("0x2a7fS8mj9TwD2A3FG","ETH")}
        {CryptoWallet("41a7fS8mj1JgSdA3F3G","XMR")}
        <p>NFTs</p>
        {MonkeyPicture("/monkeypics/monkey1.avif")}
        {MonkeyPicture("/monkeypics/monkey2.avif")}
        {MonkeyPicture("/monkeypics/monkey3.avif")}
        {MonkeyPicture("/monkeypics/monkey4.avif")}
      </div>
    </>
  )
}



export default App
