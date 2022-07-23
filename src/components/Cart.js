import React from 'react';
import CartItem from './CartItem'

function Cart({ cartItems, removeCart }) {


    function sumArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i += 1) {
            sum += array[i].total;
        }
        return sum;
    }


    return (
        <div className='container mt-4'>
        <h2>Ordem Details</h2>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => {
                        return (
                            <CartItem
                                key={index}
                                index={index}
                                data={item}
                                removeCart={removeCart}
                            />
                        )
                    })}
                    <tr>
                        <td colSpan="3" className='text-end'>Total</td>
                        <td className='text-end'>
                            $ {sumArray(cartItems)}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cart;