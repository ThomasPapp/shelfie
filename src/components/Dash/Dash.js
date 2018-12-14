import React, { Component } from 'react'
import axios from 'axios'
import './dash.css'

import Product from './Product/Product'

export default class Dash extends Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/products')
        .then(res => this.setState({ products: res.data }))
        .catch(err => console.log('Error while fetching products in mount', err))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.products != prevState.products) {
            axios.get('/api/products')
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log('Error while fetching products in update', err))
        }
    }

    delete = id => {
        axios.delete("/api/products/"+ id)
        .then(prod => {
            const index = this.state.products.findIndex(product => prod.id === product.id);
            if (index === -1) {
                console.log("Error finding product to delete")
                return;
            }
            let products = this.state.products;
            products = products.splice(index, 1);

            this.setState({ products })
        })
    }

    update = id => {
        axios.put("/api/products/"+ id)
        .then(prod => {
            const index = this.state.products.findIndex(product => prod.id === product.id);
            if (index === -1) {
                console.log("Error finding product to update")
                return;
            }
            let products = this.state.products;
            products[index] = prod;

            this.setState({ products })
        })
    }

    render() {
        const products = this.state.products.map(product => <Product key={product.id} product={product} delete={this.delete} update={this.update} />)
        return (
            <div className="dash">
                { products }
            </div>
        )
    }
}