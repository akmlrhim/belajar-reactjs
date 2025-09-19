import { Fragment, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';

const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    image: '/images/shoes-1.webp',
    price: 500000,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          quidem fugiat minus inventore quisquam et repudiandae sequi vitae ex
          facere eveniet ipsam, ipsum quod esse aspernatur quaerat.
          Exercitationem, iure sint quaerat doloremque voluptatem ea. Ullam quos
          cum officia est consequuntur!`,
  },
  {
    id: 2,
    name: 'Sepatu Lama',
    image: '/images/shoes-1.webp',
    price: 2000000,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: 'Sepatu Pudidi',
    image: '/images/shoes-1.webp',
    price: 970000,
    description: `Quibusdam
          quidem fugiat minus inventore quisquam et repudiandae sequi vitae ex
          facere eveniet ipsam, ipsum quod esse aspernatur quaerat.
          Exercitationem, iure sint quaerat doloremque voluptatem ea. Ullam quos
          cum officia est consequuntur!`,
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end bg-blue-800 text-white h-20 items-center px-10 font-medium">
        {email}
        <Button classname="bg-red-800 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          <table className="w-full text-left text-gray-800">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Qty</th>
                <th className="px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody className="font-medium text-left">
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp. {''}
                      {product.price.toLocaleString('id-ID')}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp. {''}
                      {(item.qty * product.price).toLocaleString('id-ID')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
