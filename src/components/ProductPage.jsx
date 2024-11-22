import React, { useEffect, useState, useContext }  from 'react';
import axios from 'axios';
// import { WishlistContext } from '../App';
import likeIcon from '../assets/img/products/like-brown.png';
import cartIcon from '../assets/img/products/cart-brown.png';

function ProductPage() {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true)// State to manage loading
  const [likedProducts, setLikedProducts] = useState([]);
  // const {addWishlist} = useContext(WishlistContext);

  // Making the AJAX request using Axios
  useEffect(()=>{
  axios
    .get('https://ec-course-api.hexschool.io/v2/api/hex-project/products/all')
    .then((res) =>{
      setProducts(res.data.products);
      setLoading(false);
    })
    .catch((error)=>{
      console.error('Error fetching Products:', error);
      setLoading(false);
    })
  }, [])


  //load liked products when the page load
  useEffect(()=>{
    const savedLikes = JSON.parse(localStorage.getItem('likedProducts') )|| [];
    setLikedProducts(savedLikes);
  },[]);
  
  const toggleLike = (product) =>{
    let updateLikedProducts;
    if(likedProducts.some(item => item.id === product.id)){
      //remove
      updateLikedProducts = likedProducts.filter(item =>{
        item.id !== product.id
      })
    }else{
      updateLikedProducts = [...likedProducts, product];
    }

    //update state and storage

    setLikedProducts(updateLikedProducts);
    localStorage.setItem('likedProducts', JSON.stringify(updateLikedProducts));
  }


  if(loading){
    return <p>Loading...</p>;
  }

    return (
      <div className='productBoard m-auto row d-flex  align-items-center flex-wrap g-4 g-lg-3 pb-5 pt-[30px] justify-content-md-center justify-content-lg-between'>
        {products.map((product)=>(
        <div className="col-12 col-md-4 col-lg-2 w-md-50 w-lg-225" key={product.id}>
        <div className="card border-0"  >
          <img src={product.image} className="card-img-top w-100 pb-2" alt="..."/>
          <div className="">
          <h5 className="fs-4 mb-2">{product.title}</h5>
          <p className="fw-light mb-0">{product.category}</p>
          <div className='d-flex justify-center algin-center gap-2'>
          <p className="card-text text-decoration-line-through fw-light ">NT$ {product.origin_price}</p>
          <p className="card-text text-secondary fw-light">NT$ {product.price}</p>
          </div>
          <div className='d-flex justify-center algin-center gap-2'>
            <img src={likeIcon} alt="likeicon" className='' style={{width: '20px'}} onClick={()=>toggleLike(product)}/>
            <img src={cartIcon} alt="likeicon" className='' style={{width: '20px'}}/>
          </div>
          </div>
        </div>
        </div>
        )
        )}
      </div>
    );
  }
  
export default ProductPage;