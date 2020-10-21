import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
// import NavigationBar from '../components/NavigationBar';
import OrderCard from '../components/OrderCard';
import firestore from '../controller/firestore';

const ChiefChef = () => {
  const [orders, setOrders] = useState([]);
  const [stateOrder, setStateOrder] = useState('pendiente');
  

  useEffect(() => {
    console.log('state: ', stateOrder);
    firestore.getOrder(stateOrder, (orderList) => {
      setOrders(orderList);
      console.log('orders: ', orderList);
      // console.log('state2: ', stateOrder);
    });
  }, [stateOrder]);

  // ACTUALIZAR STATE DE PEDIDO
  const updateStateOrder = (id, state) => {
    firestore.updateState(id, state)
    console.log('stateUpdate: ', state);
    console.log('id: ',id);
    setOrders([...orders]);
  };

  // // ENVIAR A MESERO Y ACTUALIZAR ESTADO DEL PEDIDO
  // const handleFinished = (e) => {
  //   e.preventDefault();
  //   updateStateFirestore(order);
  //   // setOrder({ ...initialStateOrder });
  // };

  // 
  const handleSendToWaiter = (id, stateListo) => {
    // e.preventDefault();
    updateStateOrder(id , stateListo);
    // setOrders({...orders});
  }
  // orders.map((order) => console.log(order.arrayOrder.products));
  return (
    <>
      <Header name="JEFE DE COCINA" />
      {/* <NavigationBar /> */}
      <nav className="nav-order">
        <ul>
          <li><input type="button" className="nav-btn" value="Pendiente" onClick={(e) => {e.preventDefault(); setStateOrder('pendiente')}}/></li>
          <li><input type="button" className="nav-btn" value="Listo" onClick={(e) => {e.preventDefault(); setStateOrder('listo')}}/></li>
          <li><input type="button" className="nav-btn" value="Entregado" onClick={(e) => {e.preventDefault(); setStateOrder('entregado')}}/></li>
        </ul>
      </nav>
      {
        orders.map((order) => (
          <OrderCard key={order.id} order={order} handleSendToWaiter={handleSendToWaiter}/>
        ))
      }
    </>
  );
};
export default ChiefChef;
