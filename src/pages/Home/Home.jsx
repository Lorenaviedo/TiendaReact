import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Layout from "../../components/Layout/Layout";
import {PlusIcon} from '@heroicons/react/24/solid';
import { infoProducts } from "../../components/utils/Dataproducts";

function Home() {
    return(
        <Layout>
            <div>
                <h1>Productos exclusivos</h1>
            </div>
            <input type="text" placeholder="Search products"/>
            <div>
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