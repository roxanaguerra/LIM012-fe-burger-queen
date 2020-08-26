import React from 'react';

const OrderCard = (props) =>
  // console.log('tipe date: ', typeof props.getOrder.date);
  (
    <div className="status">
      <p className="">
        <span>Nº Pedido: </span>
        <span className="info">1</span>
      </p>
      <p className="">
        <span>Cliente: </span>
        <span className="info">{props.getOrder.client} </span>
        <span>N° de Mesa: </span>
        <span className="info">{props.getOrder.table}</span>
      </p>
      <p className="">
        <span>Hora de Pedido: </span>
        <span className="info">{props.getOrder.date}</span>
      </p>
      <p>
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
          {
              props.getOrder.products.map((p) => (
                <tr>
                  <td>{p.quantity}</td>
                  <td>{p.productName}</td>
                  <td>{p.price.toFixed(2)}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <p className="tot">
        TOTAL = S/. {props.getOrder.total}
      </p>
      <button type="button">
        LISTO!
      </button>
    </div>
  );
export default OrderCard;
