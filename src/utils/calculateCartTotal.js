export default function calculateCartTotal(cart) {
    let price = 0;
    cart.forEach((item) => {
        price += item.quantity * item.price;
    });
    return price;
}