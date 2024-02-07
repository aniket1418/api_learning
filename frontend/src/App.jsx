import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import waitinglogo from './assets/waiting-7579_256.gif'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [products, errors, loading] = customReactQuery('/api/products');

  if(errors){
    return <h1>Something went wrong here!!</h1>
  }
  if(loading){
    return <>
      <img src={waitinglogo} alt="loading..." />
    </>
  }
  function imageCatch(name){
    alert("The item clicked is"+name);
  }
  return (
    <>
      <h1>React Learning stuff</h1>
      <h2>Numbers of products are {products.length}</h2>
      <div>
        <p>Representing the Data from the API request..</p>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Imaage</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => {
                return <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td> <img src={product.image} alt="image" className='product-image' onClick={() => {imageCatch(product.name)}}/></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App

const customReactQuery = (urlPath) => {
  const [products, setProducts] = new useState([]);
  const [errors, setErrors] = new useState(false);
  const [loading, setLoading] = new useState(false);

  useEffect(() => {
    (async ()=> {
      try {
        setLoading(true);
        setErrors(false);
        const response = await axios.get(urlPath)
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setErrors(true);
        
      }
    })()
  }, [])
  return [products, errors, loading];
}
