import { useState } from "react";
import ProductCatalog from "../components/ProductCatalog.jsx";
import CartBox from "../components/cart/CartBox.jsx";
import Modal from "../components/Modal.jsx";

function HomePage() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const handleNewOrder = () => {
    toggleModal();
    setCart([]);
  };

  return (
    <section
      id="homePage"
      className="flex max-w-[1080px] justify-center px-8 py-4"
    >
      <ProductCatalog
        cart={cart}
        setCart={setCart}
        removeFromCart={removeFromCart}
      />
      <CartBox
        cart={cart}
        setCart={setCart}
        removeFromCart={removeFromCart}
        onConfirmOrder={toggleModal}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleNewOrder}
        cart={cart}
        setCart={setCart}
      />
    </section>
  );
}

export default HomePage;
