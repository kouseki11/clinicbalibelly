"use client"

import { useState } from "react"
import CartOffcanvas from "./components/CartOffcanvas"

const products = [
  {
    id: 1,
    title: "Bali Belly",
    desc: "IV therapy that combines fluids, electrolytes, vitamins, and occasionally medications for enhanced wellness.",
    price: "IDR 1,690,000",
    image: "/img/index/infuss1.jpeg",
    duration: "45 minutes",
    solution: "Normal Saline Solution",
    multivitamin: [
      "Vitamin C",
      "B-Complex Vitamins (Vit B1, B2, B3, B5, B6, B7, B9, B12)",
      "Anti-Nausea",
      "Pain Relief",
      "Gaster Protector"
    ],
    oralMeds: ["Antibiotic", "Antidiarrheal", "Zinc Supplements"]
  },
  {
    id: 2,
    title: "Hangover Infusion",
    desc: "Experience fast and effective hangover relief with our revitalizing IV hydration therapy.",
    price: "IDR 1,550,000",
    image: "/img/index/infuss2.jpeg",
    duration: "40 minutes",
    solution: "Lactated Ringer's",
    multivitamin: [
      "Vitamin B Complex",
      "Glutathione",
      "Anti-Nausea"
    ],
    oralMeds: ["Painkiller", "Hydration Tablets"]
  },
  {
    id: 3,
    title: "Standard Immune-Booster",
    desc: "A powerful blend of fluids, vitamins, and minerals designed to boost and strengthen your immune system.",
    price: "IDR 800,000",
    image: "/img/index/infuss3.jpeg",
    duration: "30 minutes",
    solution: "Vitamin Infusion",
    multivitamin: ["Vitamin C", "Zinc"],
    oralMeds: []
  },
  {
    id: 4,
    title: "Essential Immune-Booster IV",
    desc: "A blend of fluids, vitamins, and minerals crafted to enhance and strengthen your body's health.",
    price: "IDR 1,200,000",
    image: "/img/index/infuss4.jpeg",
    duration: "35 minutes",
    solution: "Immune Mix",
    multivitamin: ["Vitamin C", "B6", "Magnesium"],
    oralMeds: ["Antioxidant"]
  },
  {
    id: 5,
    title: "Core Immune-Booster IV",
    desc: "A carefully balanced mix of fluids, vitamins, minerals, and antioxidants designed to boost and support your immune system.",
    price: "IDR 1,650,000",
    image: "/img/index/infuss5.jpeg",
    duration: "50 minutes",
    solution: "Hydration & Immune Support",
    multivitamin: ["Glutathione", "Zinc", "Vitamin C"],
    oralMeds: []
  },
  {
    id: 6,
    title: "Prime Immune-Booster IV",
    desc: "A powerful blend of fluids, vitamins, minerals, antioxidants, and zinc to help fortify and strengthen your immune system.",
    price: "IDR 1,990,000",
    image: "/img/index/infuss6.jpeg",
    duration: "60 minutes",
    solution: "High-Dose Vitamin IV",
    multivitamin: ["Vitamin C", "B Complex", "Zinc", "Magnesium", "Glutathione"],
    oralMeds: ["Anti-inflammatory"]
  }
]

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <>
      <div className="products_list d-grid">
        {products.map(product => (
          <div className="products_list-item" key={product.id}>
            <div className="products_list-item_wrapper d-flex flex-column">
              <div className="media bg">
                <img
                  className="lazy preview"
                  data-src={product.image}
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="main d-flex flex-column align-items-center justify-content-between">
                <a
                  className="main_title"
                  href="#"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  {product.title}
                </a>
                <p className="main_desc">{product.desc}</p>
                <div className="main_price">
                  <span className="price">{product.price}</span>
                </div>
                <a
                  className="featured_btn btn mt-0"
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#cartOffcanvas"
                  aria-controls="cartOffcanvas"
                  onClick={() => setSelectedProduct(product)}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Kirim data produk terpilih ke CartOffcanvas */}
      <CartOffcanvas product={selectedProduct} />
    </>
  )
}