function getProducts(req, res) {
    req.app.get('db').getProducts()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(500).json(error))
}

function addProduct(req, res) {
    const { name, price, img_url } = req.body
    req.app.get('db').addProduct([ name, price, img_url ])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(200).json(err))
}

function removeProduct(req, res) {
    req.app.get('db').removeProduct(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(err => res.sendStatus(500))
}

function updateProduct(req, res) {
    const { name, price, img_url } = req.body
    req.app.get('db').updateProduct([ name, price, img_url, req.params.id ])
    .then(response => res.status(200).json(response))
    .catch(err => res.sendStatus(500))
}

module.exports = {
    getProducts,
    addProduct,
    removeProduct,
    updateProduct
}