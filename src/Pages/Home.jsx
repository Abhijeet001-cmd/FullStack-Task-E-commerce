import ProductList from "../components/Productlist";

function Home({addToCart}){

    return(

        <div>

            <h1>Our Products</h1>

            <ProductList addToCart={addToCart}/>

        </div>

    );

}

export default Home;