import React from 'react';
import ProductList from './ProductList';

// eslint-disable-next-line max-len
const AddOrder = ({order, handleInputChange, handleClick, handleClear, handleIncrementItem, 
  handleDecreacetItem, total, deleteAproduct, confirmation}) => {
  
  return (
    <div className="add-order">
      <div className="order-header">
        <label htmlFor="user">Cliente:
          <input
            className="input-user"
            placeholder="Nombre"
            onChange={handleInputChange}
            name="client"
            value={order.client}
          />
        </label>
        <label htmlFor="table"> N° Mesa:
          <input
            className="input-user"
            placeholder="N° de Mesa"
            onChange={handleInputChange}
            name="table"
            value={order.table}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <td>Cantidad.</td>
            <td>Descripcion</td>
            <td>Precio</td>
            <td>Borrar</td>
          </tr>
        </thead>
        <tbody>
          <ProductList products={order.products} handleIncrementItem={handleIncrementItem} 
            handleDecreacetItem={handleDecreacetItem}  deleteAproduct={deleteAproduct} />
        </tbody>
      </table>
      <div className="total">
        <p>Total:</p>
        <span>{`S/. ${total().toFixed(2)}`}</span>
      </div>
      <div className="order-description">
        <p>Descripción</p>
        <textarea
          className="box"
          placeholder="Ingresa descripción"
          onChange={handleInputChange}
          name="description"
          value={order.description}
        />
      </div>      
      {
        confirmation ? 
          <div className="confirmation">
            Pedido Enviado a Cocina
          </div>
                    : null
      }
      <div>
        <button className="btn btn-order" type="button" onClick={handleClick}>Enviar a cocina</button>
        <button className="btn btn-order" type="button" onClick={handleClear}>Cancelar pedido</button>
      </div>
    </div>
  );
};

export default AddOrder;
