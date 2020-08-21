import React, { useState, useEffect } from 'react';
import data from '../data.json';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import AddOrder from '../components/AddOrder';
import MainButton from '../components/MainButton';
import firestore from '../controller/firestore';

const productList = data.products;

const Waiter = () => {
  const [products, setProducts] = useState([]);
  const [group, setGroup] = useState('Desayuno');
  const initialStateOrder = {
    client: '',
    table: '',
    products: [],
    total: '',
    description: '',
    date: new Date().toLocaleString(),
    state: 'pendiente',
  };
  const [order, setOrder] = useState(initialStateOrder);
  const handleIncrementItem = (productId) => {
    console.log(productId);
    const newOrder = { ...order };
    const newItem = newOrder.products.find((element) => element.id === productId);
    newItem.quantity = (newItem.quantity ? newItem.quantity + 1 : 2);
    setOrder(newOrder);
    console.log(newItem);
  };
  // const handleDecrementItem=() =>{

  // };
  const addAproduct = (product) => {
    const newOrder = { ...order };
    const itemIndex = newOrder.products.findIndex((element) => element.id === product.id);
    if (itemIndex >= 0) {
      newOrder.products[itemIndex].quantity += 1;
    }else{
      product.quantity = 1;
      newOrder.products.push(product);
    }
    setOrder(newOrder);
    // setProducts((prevState) => [...prevState, product]);
  };

  const addOrderFirestore = (arrayOrder) => {
    firestore.addOrder(arrayOrder);
    console.log(arrayOrder);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
    // console.log(name, value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(order);
    addOrderFirestore(order);
    setOrder({ ...initialStateOrder });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setOrder({ ...initialStateOrder });
    console.log('Clear');
  };

  return (
    <>
      <Header name="ORDEN DE PEDIDO" />
      <MainButton classbtn="btn btn-header" name="Estados de Pedido" reference="/mozo" />
      <div className="body-waiter">
        <div className="grid-left">
          <AddOrder addOrderFirestore={addOrderFirestore} order={order} handleInputChange={handleInputChange} handleClick={handleClick} handleClear={handleClear} handleIncrementItem={handleIncrementItem} />
        </div>
        <div className="grid-right">
          <div className="content-groups">
            <button className="btn btn-waiter" onClick={() => setGroup('Desayuno')} type="button">DESAYUNO</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Hamburguesas')} type="button">HAMBURGUESA</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Acompañamientos')} type="button">ACOMPAÑAMIENTO</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Bebidas')} type="button">BEBIDAS</button>
          </div>
          <div className="content-products">
            {
              productList.filter((product) => (product.group === group)).map((p) => (
                <ProductsCard
                  key={p.id}
                  product={p}
                  onClick={addAproduct}
                />
              ))
          }
          </div>
        </div>
      </div>
    </>
  );
};
export default Waiter;
