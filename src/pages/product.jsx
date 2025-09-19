import { Fragment } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';
import Counter from '../components/Fragments/Counter';

const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    image: '/images/shoes-1.webp',
    price: 'Rp. 1.000.000',
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
    price: 'Rp. 132.000',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: 'Sepatu Pudidi',
    image: '/images/shoes-1.webp',
    price: 'Rp. 970.000',
    description: `Quibusdam
          quidem fugiat minus inventore quisquam et repudiandae sequi vitae ex
          facere eveniet ipsam, ipsum quod esse aspernatur quaerat.
          Exercitationem, iure sint quaerat doloremque voluptatem ea. Ullam quos
          cum officia est consequuntur!`,
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>

      <div className="flex justify-center">
        <Counter />
      </div>
    </Fragment>
  );
};

export default ProductsPage;
