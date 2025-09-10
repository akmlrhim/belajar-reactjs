import Button from '../components/Elements/Button';

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        <a href="">
          <img
            src="/images/shoes-1.webp"
            loading="lazy"
            alt="products"
            className="p-8 rounded-t-lg"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-white">
              Sepatu Baru
            </h5>
            <p className="text-md text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              cupiditate dolore ratione fugit, sequi quas consequuntur labore
              saepe voluptatum! Suscipit mollitia, blanditiis ipsa
              reprehenderit, quo similique omnis illo hic voluptate temporibus
              sapiente obcaecati quis veritatis, vero deserunt repellendus!
              Modi, laborum.
            </p>
          </a>
        </div>
        <div className="flex items-center justify-between px-5 pb-5">
          <span className="text-xl font-bold text-white">Rp. 1.000.000,-</span>
          <Button classname="bg-blue-600">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
