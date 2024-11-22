import React from 'react';

function Subscribe(){
    return (    
    <div
      className="subscribe"
    >
      <div className="maxWidth px-2">
        <h2>
          記得<br />
          訂閱以獲取更多資訊！
        </h2>
        <div className="subscribe_input">
          <input type="text" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
      
    )
};


export default Subscribe;