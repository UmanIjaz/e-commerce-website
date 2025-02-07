import CartItem from "./CartItem";
function CartItemList({ cart, setCart, removeFromCart, showDetails }) {
  return (
    <article>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          image={item.image.thumbnail}
          removeFromCart={() => removeFromCart(item)}
          showDetails={showDetails}
        />
      ))}
    </article>
  );
}

export default CartItemList;
