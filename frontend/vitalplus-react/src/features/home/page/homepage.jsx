//Pagina publica

import heroBg from "@/assets/images/imagen-hero.jpg"
import { products } from "@/data/product/products.js"
import { Card } from "@/shared/components"


export default function HomePage(){

    // Encontrar una Card por ID
    const product = products.find(prod =>prod.id ===4)

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center text-black" 
        style={
            {
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }
        }>
        
            <div className="absolute inset-0 -z-10  bg-white/60"> </div> 
            <div className="relative z-10 text-center "> 
                <h1 className="text-h1 font-bold">Mis productos</h1>

            <div className="
                grid
                gap-8
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                justify-items-center
            ">
                {/* Se renderizan todas las cards */}

                {/* {products.map((product) => ( <Card key={product.id} product= {product} />))} */}
            </div>

            {/* Renderiza una card por ID */}
            {product && <Card product={product}/>}

            </div>
        </section>
    )


}
