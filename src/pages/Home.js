import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import VisitorCounter from "../components/VisitorCounter";


const productsNerds = [
    { id: 1, name: "Action Figure - Star Wars", price: "R$ 299,99", img: "https://m.media-amazon.com/images/I/51JsqskZEiL._AC_SL1000_.jpg",
        link: "https://www.mercadolivre.com.br/boneco-baby-yoda-beb-star-wars-mandalorian-serie-tv-filme/p/MLB20789395#polycard_client=search-nordic&wid=MLB4631633974&sid=search&searchVariation=MLB20789395&position=1&search_layout=grid&type=product&tracking_id=c63ebcd7-4850-4bf7-874d-44cd1f32dfb3" },
    { id: 2, name: "Quadrinho - Batman #1", price: "R$ 499,99", img: "https://m.media-amazon.com/images/I/61q-+ohQ7WL._SY466_.jpg",
        link: "https://www.mercadolivre.com.br/batman-a-piada-mortal-dc-de-bolso-de-alan-moore-brian-bolland-editorial-editora-panini-capa-mole-em-portugus-2024/p/MLB43455503?pdp_filters=item_id:MLB5217768230#is_advertising=true&searchVariation=MLB43455503&position=2&search_layout=grid&type=pad&tracking_id=6816bdcf-cd54-4e23-93c2-dee22b68a2bc&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=YWUzM2MxMGMtZjFlMS00YjAxLTk2ODMtNzJiNTQ3MDY0OGFj" },
    { id: 3, name: "Funko Pop - Iron Man", price: "R$ 149,99", img: "https://m.media-amazon.com/images/I/81DUvc2+mLL._AC_SL1500_.jpg" },
    { id: 4, name: "PS5 - Console", price: "R$ 3.799,99", img: "https://m.media-amazon.com/images/I/612SFC+tsbL._AC_SX679_.jpg" },
    { id: 5, name: "Nintendo Switch", price: "R$ 7.499,99", img: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" },
    { id: 6, name: "Coleção Harry Potter", price: "R$ 799,99", img: "https://m.media-amazon.com/images/I/61UQDAOBVWL._SL1000_.jpg" }
];

const productsBeachTennis = [
    { id: 1, name: "Raquete Pro Beach Tennis", price: "R$ 899,99", img: "https://m.media-amazon.com/images/I/714GPBq9XgL._AC_SX679_.jpg",
        link: "https://www.mercadolivre.com.br/shark-predator-2022-raquete-beach-tennis-andre-baran-cor-violeta-escuro/p/MLB27587901#polycard_client=search-nordic&wid=MLB3595315447&sid=search&searchVariation=MLB27587901&position=4&search_layout=stack&type=product&tracking_id=f5ed8f3f-a5e5-449e-ab60-13f89aba8e09"},
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
