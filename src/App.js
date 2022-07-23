import './App.css';
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/ListOfItems';
import Cart from './components/Cart';
import data from './data/Data'

function App() {


  const [cartItems, setCartItems] = useState([]);


  function handleAddCart(itemIndex, quantity) {


    let itemId = 0;
    let foundItem = 0;

    // Find ID by Index
    for (let i = 0; i < data.productData.length; i++) {
      if (i === itemIndex) {
        console.log('i: ' + i + '=== itemIndex: ' + itemIndex);
        console.log('id: ' + data.productData[i].id);
        itemId = data.productData[i].id;
      }
    }
    // Check size of the list
    if (cartItems.length > 0) {
      // Update the cart that already has items
      let updatedList = cartItems.map(item => {
        if (item.id === itemId) {
          foundItem++;
          item.quantity = item.quantity + Number(quantity);
          item.total = item.quantity * item.price;
          return { ...item, quantity: item.quantity, total: item.total }; //gets everything that was already in item, and updates quantity and total.
        }
        return item; // else return unmodified item
      });
      if (foundItem > 0) {
        // Update cart item quantity
        setCartItems(updatedList);
      } else {
        // Add a new item to the cart items list.
        for (let i = 0; i < data.productData.length; i++) {
          if (i === itemIndex) {
            let item = data.productData[i];
            item['quantity'] = quantity;
            item['total'] = quantity * item.price;
            setCartItems([...cartItems, item])
          }
        }
      }

    } else {
      // Add an item to an empty cart.
      let item = data.productData[itemIndex];
      item['quantity'] = quantity;
      item['total'] = quantity * item.price;
      setCartItems(
        [
          {
            id: item.id,
            img: item.img,
            title: item.title,
            desc: item.desc,
            price: item.price,
            quantity: item.quantity,
            total: item.total,
          }
        ]
      );
    }


  }


  function handleRemoveCart(index) {
    let newcartItems = [...cartItems]
    newcartItems.splice(index, 1)
    setCartItems(newcartItems)
  }


  return (
    <>
      <List data={data} addCart={handleAddCart} />
      <Cart cartItems={cartItems} removeCart={handleRemoveCart} />
    </>
  );


}

export default App;
