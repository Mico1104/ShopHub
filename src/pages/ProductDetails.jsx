import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProducts(foundProduct);
  }, [id]);

  if (!products) {
    return <h1>Loading...</h1>;
  }

  const productInCart = cartItems.find((item) => item.id === products.id);
  const productCartLabel = productInCart ? `{${productInCart.quantity} }` : "";

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={products.image} alt={products.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{products.name}</h1>
            <p className="product-detail-price">{products.price}</p>
            <p className="product-detail-description">{products.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(products.id)}
            >
              Add to Cart {productCartLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
