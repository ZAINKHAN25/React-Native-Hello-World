import { useEffect, useState } from 'react';
import './app.css';

export default function App() {
  const [dataofapi, setdataofapi] = useState([]);

  useEffect(() => {
    async function getdata() {
      try {
        const api = await fetch('https://fakestoreapi.com/products/');
        const data = await api.json();
        setdataofapi(data);
      } catch (error) {
        console.log(error);
      }
    }
    getdata();
  }, []);

  return (
    <div className="container">
      <h1>Api Fetch</h1>
      <div className="fatherofsingledata">
        {dataofapi.map((x, i) => (
          <div key={i} className="productContainer">
            <img src={x.image} alt={x.title} className="image" />
            <div className="productInfo">
              <p className='title'>{x.title}</p>
              <p className='description'>{x.description}</p>
              <p className='price'>${x.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
