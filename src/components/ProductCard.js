import React from "react";

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="product-details">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buy-button"
                >
                    Comprar via Mercado Pago
                </a>

            </div>
        </div>
    );
}

export default ProductCard;
