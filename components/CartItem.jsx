import Image from "next/image";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: item.id,
    };
    dispatch(updateCart(payload));
  };

  let itemTotal = parseFloat(item.attributes.price.toFixed(2));

  return (
    <div className="my-4">
      <div className="flex justify-between py-4 ">
        <div className="flex space-x-4">
          <Image
            src={`${item.attributes.thumbnail.data.attributes.url}`}
            width={120}
            height={120}
            alt="shoe-image"
            className="rounded-lg h-[130px] w-[130px] object-none"
          />

          <div>
            <h2 className="pt-1 font-semibold text-xl">
              {item.attributes.name}
            </h2>

            <div className="text-md text-gray-500">${itemTotal}</div>

            <div className="flex gap-4 items-center">
              <div className="mt-3 flex gap-1 items-center">
                <p className="text-sm">Size:</p>
                <select
                  name="shoe-size"
                  id="shoe-size"
                  className="text-xs border-none rounded-xl"
                  onChange={(e) => updateCartItem(e, "selectedSize")}
                >
                  {item.attributes.size.data.map((size, i) => (
                    <option
                      key={i}
                      value={size.size}
                      disabled={!size.enabled ? true : false}
                      selected={item.selectedSize === size.size}
                    >
                      {size.size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-3 flex gap-1 items-center">
                <p className="text-sm">Quantity:</p>
                <select
                  name="shoe-size"
                  id="shoe-size"
                  className="text-xs border-none rounded-xl"
                  onChange={(e) => updateCartItem(e, "quantity")}
                >
                  {Array.from({ length: 6 }, (_, i) => i + 1).map((q, i) => {
                    return (
                      <option key={i} value={q} selected={item.quantity === q}>
                        {q}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <button
              className="text-sm text-blue-500 hover:text-blue-700 active:text-blue-800 duration-100 ease-out"
              onClick={() =>
                dispatch(
                  removeFromCart({
                    id: item.id,
                  })
                )
              }
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
