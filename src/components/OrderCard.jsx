import React from 'react';

const OrderCard = ({order, handleSendToWaiter }) => {

  return (
    <div className="status">
      <p>
        <span>Nº Pedido: </span>
        <span className="info">5</span>
      </p>
      <p>
        <span className="name-info">Cliente: </span>
        <span className="info">{order.client} </span>
        <span className="name-info">N° de Mesa: </span>
        <span className="info">{order.table} </span>        
      </p>
      <p>          
        <span>Tiempo Transcurrido: </span>
        <span className="info">03 min </span>
      </p>
      <p>
        <span>Fecha de Pedido: </span>
        <span className="info">{new Date(order.date).toLocaleString('es-PE')} </span>
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
              <td>{item.quantity}</td>
              <td>{item.productName}</td>
              <td>{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="tot">
        TOTAL = S/.{order.total}
      </p>
      <button className="" type="button" onClick={ (e) =>{ e.preventDefault(); handleSendToWaiter(order.id , 'listo')}}>
        LISTO!
      </button>
    </div>
  );
};
export default OrderCard;
