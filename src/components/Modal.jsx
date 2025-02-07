import CartItemList from "./cart/CartItemList";
import calculateCartTotal from "../utils/calculateCartTotal";
export default function Modal({ isOpen, onClose, cart, setCart }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 sm:items-center">
      {/* Modal Box */}
      <div
        className={`relative w-full rounded-t-2xl bg-white p-6 shadow-lg transition-transform duration-300 sm:w-96 sm:rounded-2xl ${isOpen ? "translate-y-0" : "translate-y-full md:translate-y-0"} max-h-[85vh] sm:max-h-[90vh]`}
      >
        {/* Modal Content */}
        <h2 className="mb-4 text-2xl font-bold">Order Confirmed</h2>
        <p className="mb-2 text-sm text-grey">We hope you enjoy your food!</p>
        <CartItemList
          removeFromCart={false}
          setCart={setCart}
          cart={cart}
          showDetails={true}
        />
        <span className="flex w-full justify-between pb-0 pt-7">
          <h4 className="text-grey">Order Total</h4>
          <h2 className="text-xl font-bold">
            ${calculateCartTotal(cart).toFixed(2)}
          </h2>
        </span>
        <div className="text-center">
          <button
            onClick={onClose}
            className="mt-7 cursor-pointer rounded-full bg-primary px-14 py-2 text-center text-sm font-semibold text-white hover:bg-primaryhover sm:w-full sm:px-6 md:text-base"
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}
