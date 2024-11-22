import React, {useState,useEffect,useContext} from 'react';
import { WishlistContext } from '../App';



function WishlistPage(){
    const {wishlist, removeProducts} = useContext(WishlistContext); //receiving the products
    const [likedProducts, setLikedProducts] = useState([]);


    useEffect(()=>{
        const savedLikes = JSON.parse(localStorage.getItem('likedProducts') )|| [];
        setLikedProducts(savedLikes);
      },[]);


      const removeFroWishlist = (productId)=>{
        const updateProducts = likedProducts.filter(product => product.id !== productId );

        //update state
        setLikedProducts(updateProducts);


        //update local storage
        localStorage.setItem('likedProducts', JSON.stringify(updateProducts));
      }

    return(
        <div className='container pt-5 ' style={{ minHeight: '34vh' }}>
            {likedProducts.length === 0 ? (<h1 className='container pt-5 text-body-secondary maxWidth text-center'>Your wishlist is empty!</h1>) : (<div className='productBoard m-auto row d-flex  align-items-center flex-wrap g-4 g-lg-3 pb-5 pt-[30px] justify-content-md-start justify-content-lg-start'>
        {likedProducts.map((product)=>(
        <div className="col-12 col-md-4 col-lg-2 w-md-50 w-lg-225" key={product.id}>
        <div className="card border-0" >
          <img src={product.image} className="card-img-top w-100 pb-2" alt="..."/>
          <div className="">
          <h5 className="fs-4 mb-2">{product.title}</h5>
          <p className="fw-light mb-0">{product.category}</p>
          <div className='d-flex justify-center algin-center gap-2'>
          <p className="card-text text-decoration-line-through fw-light ">NT$ {product.origin_price}</p>
          <p className="card-text text-secondary fw-light">NT$ {product.price}</p>
          </div>
          <div className='btn btn-primary text-center' onClick={()=>removeFroWishlist(product.id)}>
            <p className='m-0'>Remove</p>
          </div>
          </div>
        </div>
        </div>
        )
        )}
      </div>)}
        </div>
    );
}

export default WishlistPage;