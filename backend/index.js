import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Table Wooden',
            price: 200,
            image: 'https://www.ulcdn.net/opt/www.ulcdn.net/images/products/312898/slide/666x363/Arabia_Dining_Table_TK_4.jpg?1609230340'
        },
        {
            id: 2,
            name: 'Table glass',
            price: 400,
            image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61lPmASI2lL._AC_UF1000,1000_QL80_DpWeblab_.jpg'
        },
        {
            id: 3,
            name: 'Table Wooden',
            price: 200,
            image: 'https://www.ulcdn.net/opt/www.ulcdn.net/images/products/312898/slide/666x363/Arabia_Dining_Table_TK_4.jpg?1609230340'
        },
        {
            id: 4,
            name: 'Chair',
            price: 500,
            image: 'https://www.ulcdn.net/opt/www.ulcdn.net/images/products/312898/slide/666x363/Arabia_Dining_Table_TK_4.jpg?1609230340'
        },
        {
            id: 5,
            name: 'Stool',
            price: 300,
            image: 'https://www.ulcdn.net/opt/www.ulcdn.net/images/products/312898/slide/666x363/Arabia_Dining_Table_TK_4.jpg?1609230340'
        }
    ]

    if(req.query.search){
        const filterProduct = products.filter(product =>
            product.name.includes(req.query.search))
            res.send(filterProduct);
            return;
    }
    
    setTimeout(() => {
        res.send(products)
    }, 3000);
})

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
