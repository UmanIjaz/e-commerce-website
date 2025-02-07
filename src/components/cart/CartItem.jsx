export default function CartItem({
  name,
  quantity,
  price,
  image,
  showDetails,
  removeFromCart,
}) {
  return (
    <div className="flex items-center justify-between border-b border-b-slate-200 p-2 pb-2">
      {/* Grouped Left Side: Image + Content */}
      <div className="flex items-center space-x-4">
        {/* Thumbnail (Shown only if showDetails is true) */}
        {showDetails && (
          <img
            src={image}
            alt={name}
            className="h-10 w-10 rounded-md object-cover"
          />
        )}

        {/* Content */}
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <span className="flex space-x-2">
            <h3 className="text-sm text-secondary">{quantity}x</h3>
            <p className="text-sm text-grey">@${price.toFixed(2)}</p>
          </span>
        </div>
      </div>

      {/* Right Side: Either Total Price OR Delete Icon */}
      {showDetails ? (
        <p className="font-bold text-matblack">
          ${(price * quantity).toFixed(2)}
        </p>
      ) : (
        <button
          onClick={removeFromCart}
          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-[1px] border-grey text-grey"
        >
          &times;
        </button>
      )}
    </div>
  );
}
