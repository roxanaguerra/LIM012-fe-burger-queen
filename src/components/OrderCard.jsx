import React from 'react';

const OrderCard = ({order}) => {
  return (
    <div className="status">
      <p className="">
        <span>Nº Pedido: </span>
        <span className="info">1</span>
      </p>
      <p className="">
        <span>Cliente: </span>
        <span className="info">{order.client} </span>
        <span>N° de Mesa: </span>
        <span className="info">{order.table}</span>
      </p>
      <p className="">
        <span>Fecha de Pedido: </span>
        <span className="info">{new Date(order.date).toLocaleString('es-PE')}</span>
        <span>Tiempo Transcurrido: </span>
        <span className="info">03 min</span>
      </p>
      <table className="tableOrderCard">
        <thead>
          <tr>
            <td>CANT. </td>
            <td>DESCRIPCIÓN</td>
            <td>PRECIO</td>
          </tr>
        </thead>
        <tbody>
          {order.products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="tot">
        TOTAL = S/.{order.total}
      </p>
      <button type="button">
        LISTO!
      </button>
    </div>
  );
export default OrderCard;
