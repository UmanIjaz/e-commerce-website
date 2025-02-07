import { useState, useEffect } from "react";
import AddToCartBtn from "./AddToCartBtn";
import products from "../data/products.json";

function ProductCatalog({ cart, setCart, removeFromCart }) {
  return (
    <section className="flex w-full flex-col">
      <h1 className="py-6 text-4xl font-bold">Desserts</h1>
      <div
        id="productCatalogList"
        className="flex flex-wrap justify-start gap-4"
      >
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            cart={cart}
            setCart={setCart}
            removeFromCart={() => removeFromCart(product)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCatalog;

//Product Card
function ProductCard({ product, cart, setCart, removeFromCart }) {
  const [currentProduct, setCurrentProduct] = useState({ quantity: 0 });

  // Update product quantity in state whenever the cart changes
  useEffect(() => {
    const foundProduct = cart.find((item) => item.name === product.name);
    setCurrentProduct(foundProduct ? foundProduct : { quantity: 0 });
  }, [cart, product.name]);

  // Adds the product to the cart or increases its quantity if already present
  const addToCart = () => {
    setCart((prevCart) => {
      const foundProduct = prevCart.find((item) => item.name === product.name);
      return foundProduct
        ? prevCart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <article className="relative flex max-w-48 flex-grow basis-48 flex-col space-y-6 bg-white pb-4">
      {/* Product image */}
      <img
        className="max-h-full max-w-full rounded-md"
        src={product.image.desktop}
        alt={product.name}
      />

      {/* Add to cart button with quantity controls */}
      <AddToCartBtn
        className="absolute left-[22px] top-[142px] mt-0 text-center"
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        quantity={currentProduct.quantity}
      />

      {/* Product details */}
      <div className="flex flex-col justify-start space-y-0">
        <p className="text-sm text-neutral-400">{product.name.split(" ")[0]}</p>
        <h3 className="text-[15px] font-semibold">{product.name}</h3>
        <h3 className="text-[15px] font-semibold text-red-500">
          ${product.price}
        </h3>
      </div>
    </article>
  );
}
