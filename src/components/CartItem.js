import React from 'react';

function CartItem({ index, data, removeCart }) {
    return (
        <tr>
            <td>{data.title}</td>
            <td>{data.quantity}</td>
            <td>$ {data.price}</td>
            <td>$ {data.total}</td>
            <td className="text-center text-danger text-decoration-underline"
                onClick={() => { removeCart(index) }}>
                <span role="button">Remove</span>
            </td>
        </tr>
    );
}

export default CartItem;