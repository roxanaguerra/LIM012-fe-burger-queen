import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import OrderCard from '../components/OrderCard';
import firestore from '../controller/firestore';

const ChiefChef = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // getOrderFirestore();
    firestore.getOrder((orderList) => {
      setOrders(orderList);
      console.log('orderList: ', orderList);
    });
  }, []);

  // orders.map((order) => console.log(order.arrayOrder.products));
  return (
    <>
      <Header name="JEFE DE COCINA" history={history} />
      <NavigationBar />
      {
        orders.map((order) => (
          <OrderCard key={order.id} getOrder={order} />
        ))
      }
    </>
  );
};
export default ChiefChef;
