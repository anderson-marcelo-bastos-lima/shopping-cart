import React, { useState } from 'react'

function Itemcard({index, data, addCart}) {

    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(event) {
        const valueToChange = event.target.value;
        setQuantity(valueToChange);
    }

    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
                <img src={data.img} className="card-img-top img-fluid" alt={data.title} />
                <div id="card-body-id" className="card-body text-center">
                    <h5 className="card-title text-primary">{data.title}</h5>
                    <h5 className="card-title text-danger">$ {data.price}</h5>
                    <p className="card-text">{data.desc}</p>
                    <input id="quantity" value={quantity} onChange={handleQuantityChange} type="text" />
                    <button id="add-btn-id" className="btn btn-success mt-2" onClick={() => { addCart(index, quantity) }}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Itemcard;