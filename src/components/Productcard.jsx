function ProductCard({product,addToCart}){

    return(

        <div className="card">

            <img src={product.image} />

            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>

            <button onClick={()=>addToCart(product)}>

                Add To Cart

            </button>

        </div>

    );

}

export default ProductCard;