
import React,{ useContext } from 'react';
import { dataContext } from '../Context/DataContext';

const Products = () => {
    const {data} = useContext(dataContext);

   return <div className="container">
    <div className="row justify-content-center">
      {data.map((product) => (
        <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card d-flex justify-content-center align-items-center" style={{ width: "300px", marginBottom: "20px" }}>
            <img
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <button>Buy</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>



};
  


export default Products