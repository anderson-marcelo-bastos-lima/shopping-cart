import React from 'react';
import Itemcard from './ItemCard'

function List({ data, addCart }) {

    return (
        <div>
            <h1 className='text-center mt-4'>All Items</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard
                                key={index}
                                index={index}
                                data={item}
                                addCart={addCart}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default List;