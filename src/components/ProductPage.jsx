import React, { useEffect, useState, useContext }  from 'react';
import axios from 'axios';
import '../assets/all.scss';
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
     <>
      <div className='brand-collection d-none collectionBar d-md-block'>
          <ul className='d-flex justify-content-start  align-items-center gap-4 maxWidth px-3'>
            <li ><a href="#">CHANEL</a></li>
            <li><a href="#">Jo Malone</a></li>
            <li><a href="#">Curology</a></li>
            <li><a href="#">Dior</a></li>
            <li><a href="#">Chloe</a></li>
            <li><a href="#">Zara</a></li>
          </ul>
      </div>
      <div className='productBoard m-auto row d-flex  align-items-center flex-wrap g-4 g-lg-3 pb-5 pt-[30px] justify-content-md-center justify-content-lg-between'>
        {products.map((product)=>(
        <div className="col-12 col-md-6 col-lg-3 w-md-50 w-lg-225" key={product.id}>
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
          <i
                  className={`bi ${likedProducts.some((item) => item.id === product.id) ? 'bi-suit-heart-fill' : 'bi-suit-heart'} liked_icon `}
                  style={{ width: '20px', cursor: 'pointer' }}
                  onClick={() => toggleLike(product)}
                ></i>
            {/* <img src={likeIcon} alt="likeicon" className={likedProducts.some((item)=> item.id === product.id) ? 'liked' : ''} style={{width: '20px'}} onClick={()=>toggleLike(product)}/> */}
            <img src={cartIcon} alt="likeicon" className='' style={{width: '20px'}}/>
          </div>
          </div>
        </div>
        </div>
        )
        )}
      </div>
      </>
      
    );
  }
  
export default ProductPage;