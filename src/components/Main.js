import React, { Component } from 'react'
import ethlogo from '../eth-logo.png'
//import AddAsset from './AddAsset'



class Main extends Component {

    render() {

        return (
          
          <div id="content">

            <div class="spacer-2x">&nbsp;</div>
            
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
              <button type="submit" className="btn btn-primary-gradient">Add Asset</button>
            </form>
            <p>&nbsp;</p>
            <h2>Purchase Assets</h2>
            <div className="table-overflow">
            <table className="table-xl border" >
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Owner</th>
                  <th className="text-center" scope="col"></th>
                </tr>
              </thead>
              <tbody id="productList">
                { this.props.products.map((product, key) => {
                  return(
                    <tr className="bg-white" key={key}>
                      <th scope="row">{product.id.toString()}</th>
                      <td>
                      <div class="list-media">
                                        <div class="list-item">
                                            <div class="media-img">
                                                 <img src="assets/images/placeholder-square.jpg" alt="" />
                                                 &nbsp;&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                    <h5>{product.name} &nbsp; </h5>
                                </td>
                      <td> {window.web3.utils.fromWei(product.price.toString(), 'Ether') } 
                      <div className="input-group-append">
                          <div className="input-group-text">
                            <img src={ethlogo} height='32' alt=""/>
                            &nbsp; ETH
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5>{product.owner}</h5>
                      {/* <div class="list-media">
                                        <div class="list-item">
                                            <div class="media-img">
                                                <img class="circle" src="assets/images/placeholder-square.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div> */}
                      </td>
                      <td>
                        { !product.purchased
                          ? <button
                              className="btn btn-primary-gradient"
                              name={product.id}
                              value={product.price}
                              onClick={(event) => {
                                this.props.purchaseProduct(event.target.name, event.target.value)
                              }}
                            >
                              Buy
                            </button>
                          : null
                        }
                        </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            </div>
          </div>
        );
      }
    }
    
    export default Main;

    // {product.img} this will add the product image to the end users product
    // {logo} this will be the logo for ETH coin image
