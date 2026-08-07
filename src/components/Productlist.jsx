import products from "../Data/Product";
import ProductCard from "./Productcard";

function ProductList({addToCart}){

    return(

        <div className="products">

            {

                products.map((item)=>(

                    <ProductCard
                    key={item.id}
                    product={item}
                    addToCart={addToCart}
                    />

                ))

            }

        </div>

    );

}

export default ProductList;