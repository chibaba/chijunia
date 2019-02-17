import React from 'react'

export default function CartColumns() {
  
   return <div className="container-fluid text-center ">
       <div className="row">
       <div className="col-md mx-auto col-lg-2">
       <p className="text-upperCase">products</p>
       </div>
       <div className="col-md mx-auto col-lg-2">
       <p className="text-upperCase">name of products</p>
       </div>
       <div className="col-md mx-auto col-lg-2">
       <p className="text-upperCase">price</p>
       </div>
       <div className="col-md mx-auto col-lg-2">
       <p className="text-upperCase">quantity</p>
       </div>
       <div className="col-md mx-auto col-lg-2">
       <p className="text-upperCase">remove</p>
       </div>
       <div className="col-md mx-auto col-lg-2">
       <p className="text-upperCase">total</p>
       </div>
       </div>
    </div>;
      
    
  
}
