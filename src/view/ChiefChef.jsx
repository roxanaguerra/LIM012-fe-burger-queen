import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import OrderCard from '../components/OrderCard';
import firestore from '../controller/firestore';

const ChiefChef = () => {
  const [orders, setOrders] = useState([]);
  // const [stateOrder, setStateOrder] = useState('pendiente');
  

  useEffect(() => {
    // console.log('state: ', stateOrder);
    firestore.getOrder((orderList) => {
      setOrders(orderList);
      console.log('orders: ', orderList);
    });
  }, []);

  // orders.map((order) => console.log(order.arrayOrder.products));
  return (
    <>
      <Header name="JEFE DE COCINA" />
      <NavigationBar />
      {
        orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))
      }
    </>
  );
};
export default ChiefChef;
