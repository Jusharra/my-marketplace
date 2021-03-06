import React, { Component} from 'react';
import Web3 from 'web3';
//import logo from '../logo.png';
//import logo from '../eth-logo.png';
import './App.css';
import Marketplace from '../abis/Marketplace.json'



import Menu from './Menu' //Navbar old
import Main from './Main'

//import Header from './Header';
//import Footer from './Footer';


//import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    
  }

  async loadWeb3() {
      if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
      }
      else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
      }
      else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
  }
  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      this.setState({ productCount })
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call()
        this.setState({
          products: [...this.state.products, product]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('Please switch to the kovan testnet to try use the Market Place.')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true
    }

    this.createProduct = this.createProduct.bind(this)
    this.purchaseProduct = this.purchaseProduct.bind(this)
  }

  createProduct(name, price) {
    this.setState({ loading: true })
    this.state.marketplace.methods.createProduct(name, price).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  purchaseProduct(id, price) {
    this.setState({ loading: true })
    this.state.marketplace.methods.purchaseProduct(id).send({ from: this.state.account, value: price })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      
      <div>
        
        <Menu account={this.state.account} />
        
        <div className="container">
          <div className="row v-center">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1000px' }}>
              { this.state.loading
                ? <div id="preloader" className="preloader"><p className="text-center">Loading...</p></div>
                : <Main
                  products={this.state.products}
                  createProduct={this.createProduct}
                  purchaseProduct={this.purchaseProduct} />
              }
              
            </main>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

//<AddAsset />