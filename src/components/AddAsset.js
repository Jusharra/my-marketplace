import React, { Component } from 'react'
import logo from '../eth-logo.png'



class AddAsset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

    render() {
        
        return (
          
          <div id="content">

            <div className="spacer-2x">&nbsp;</div>

            <h1>Add Asset</h1>
            <form onSubmit={(event) => {
              event.preventDefault()
              const name = this.productName.value
              const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
              this.props.createProduct(name, price)
            }}>
              <div className="form-group mr-sm-2">
                <input
                  id="productName"
                  type="text"
                  ref={(input) => { this.productName = input }}
                  className="form-control"
                  placeholder="Product Name"
                  required />
              </div>
              <div className="form-group mr-sm-2">
                <input
                  id="productPrice"
                  type="text"
                  ref={(input) => { this.productPrice = input }}
                  className="form-control"
                  placeholder="Product Price"
                  required />
              </div>
              <button type="submit" className="btn btn-primary">Add Asset</button>
            </form>
            <p>&nbsp;</p>
            
          </div>
        );
      }
    }
    
    export default AddAsset;

    // {product.img} this will add the product image to the end users product
    // {logo} this will be the logo for ETH coin image
