import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import VisitorCounter from "../components/VisitorCounter";


const productsNerds = [
    { id: 1, name: "Action Figure - Star Wars", price: "R$ 299,99", img: "https://m.media-amazon.com/images/I/51JsqskZEiL._AC_SL1000_.jpg",
        link: "https://www.mercadolivre.com.br/" },
    { id: 2, name: "Quadrinho - Batman #1", price: "R$ 499,99", img: "https://m.media-amazon.com/images/I/61q-+ohQ7WL._SY466_.jpg",
        link: "https://www.mercadolivre.com.br/" },
    { id: 3, name: "Funko Pop - Iron Man", price: "R$ 149,99", img: "https://m.media-amazon.com/images/I/81DUvc2+mLL._AC_SL1500_.jpg" },
    { id: 4, name: "PS5 - Console", price: "R$ 3.799,99", img: "https://m.media-amazon.com/images/I/612SFC+tsbL._AC_SX679_.jpg" },
    { id: 5, name: "Nintendo Switch", price: "R$ 7.499,99", img: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" },
    { id: 6, name: "Coleção Harry Potter", price: "R$ 799,99", img: "https://m.media-amazon.com/images/I/61UQDAOBVWL._SL1000_.jpg" }
];

const productsBeachTennis = [
    { id: 1, name: "Raquete Pro Beach Tennis", price: "R$ 899,99", img: "https://m.media-amazon.com/images/I/714GPBq9XgL._AC_SX679_.jpg",
        link: "https://www.mercadolivre.com.br/"},
    { id: 2, name: "Bolsa Nike - Beach", price: "R$ 299,99", img: "https://m.media-amazon.com/images/I/617rqUXPtzL._AC_SX522_.jpg" },
    { id: 3, name: "Óculos de Sol UV", price: "R$ 199,99", img: "https://m.media-amazon.com/images/I/51T1xQwz9tL._AC_SX679_.jpg" },
    { id: 4, name: "Camisa Adidas Beach", price: "R$ 149,99", img: "https://m.media-amazon.com/images/I/610crhLDfjL._AC_SX679_.jpg" },
    { id: 5, name: "Bola de Beach Tennis", price: "R$ 49,99", img: "https://m.media-amazon.com/images/I/710+ttV0GHL._AC_SL1500_.jpg" },
    { id: 6, name: "Visor Pro Beach", price: "R$ 99,99", img: "https://m.media-amazon.com/images/I/51VuQMmut6L._AC_SX679_.jpg" }
];

function Home() {
    const [activeTab, setActiveTab] = useState("nerds");

    return (
        <div>
            <Navbar />
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <section className="products-section">
                <h2>{activeTab === "nerds" ? "Colecionáveis Nerds" : "Importados Beach Tennis"}</h2>
                <div className="products-grid">
                    {(activeTab === "nerds" ? productsNerds : productsBeachTennis).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <VisitorCounter />
            <Footer />
        </div>
    );
}

export default Home;
