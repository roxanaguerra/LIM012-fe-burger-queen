import React from 'react';

const ProductList = ({products, handleIncrementItem, handleDecreacetItem, deleteAproduct}) => {
  return (
    <>
      {products.map((p)=> (
        <tr className="listPedidoOrder" key={p.id}>
          <td>
            <button className="btn-increaseProduct" type="button" onClick={(() => handleIncrementItem(p.id))}>+</button>
            <span>{p.quantity}</span>
            <button className="btn-decreaseProduct" type="button" onClick={(() => handleDecreacetItem(p.id))} disabled={p.quantity === 1 ? true : false}>-</button>
          </td>
          <td>{p.productName}</td>
          <td>{`S/. ${p.price * p.quantity}`}</td>
          <td>
            <button className="btn-delete" type="button" onClick={(() => deleteAproduct(p))}>
              <img src="https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/trash-512.png" alt="eliminar" />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductList;
