import { useState } from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Layout from "../../components/Layout/Layout";
import { infoProducts } from "../../utils/Dataproducts";

function Home() {
    return(
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Productos exclusivos</h1>
            </div>
            <input className="rounded-lg border-black w-80 p-4 mb-4 border" type="text" placeholder="Search products"/>
            <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
                {
                    infoProducts.map((product) => (
                        <Card key={product.id} product={product}/>
                    ))
                }
                {/*<Card />*/}
            </div>
        </Layout>
    )
}
export default Home