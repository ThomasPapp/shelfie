import React, { Component } from 'react'
import './form.css'
import axios from 'axios';

export default class Form extends Component {

    constructor() {
        super()
        this.state = {
            url: "",
            name: "",
            price: 0
        }

        this.handleUrl = this.handleUrl.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUrl(e) {
        this.setState({ url: e.target.value })
    }

    handleName(e) {
        this.setState({ name: e.target.value })
    }

    handlePrice(e) {
        this.setState({ price: e.target.value })
    }

    cancel() {
        this.setState({
            url: "",
            name: "",
            price: 0
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const product = {
            name: this.state.name,
            price: this.state.price,
            img_url: this.state.url
        }

        axios.post('/api/products', product)
        .then(() => 
            this.setState({
                url: "",
                name: "",
                price: 0
            })
        )
        .catch(error => console.log("Error while adding producting", error))
    }

    render() {
        return (
            <form className="product-form" onSubmit={ this.handleSubmit }>
                <div className="product-container">
                    <div className="img-container">
                        <div className="img-sub-container">

                        </div>
                    </div>
                    <label>Image URL:</label>
                    <input required type="text" onChange={ this.handleUrl } value={ this.state.url } placeholder="Image url..." />
                    <label>Product Name:</label>
                    <input required type="text" onChange={ this.handleName } value={ this.state.name } placeholder="Product name..." />
                    <label>Product Price:</label>
                    <input required type="text" pattern="[0-9]*" onChange={ this.handlePrice } value={ this.state.price } placeholder="Product price..." />

                    <div className="button-container">
                        <button type="button" onClick={ this.cancel }>Cancel</button>

                        <input type="submit" value="Add to inventory"/>
                    </div>
                </div>
            </form>
        )
    }
}