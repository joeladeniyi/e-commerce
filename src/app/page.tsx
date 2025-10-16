import Image from "next/image";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
   <div> <Hero/>
       <h2 className="w-full font-semibold text-center text-2xl md:text-4xl py-6"> All Products</h2>
     <ProductList/>
    
    </div>

  )
}