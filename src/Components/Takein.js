import React, { useState } from 'react'

function Takein(props) {
    const [Product_id , setProduct_id] = useState('');
    const [product_amount , setProduct_amount] = useState('');
    const [Product_name , setProduct_name] = useState('');
    const takeforminput = (e)=>{
       e.preventDefault();
       const obj1 = {
          productid  : Product_id,
          amount: product_amount,
          name: Product_name
       }
       props.onSavedata(obj1);
       localStorage.setItem(obj1.productid ,JSON.stringify(obj1));
       setProduct_id('');
       setProduct_amount('');
       setProduct_name('');
    }
   const addproductid = (e)=>{
       let val = e.target.value;
      setProduct_id(val);
   }
   const addproductamount = (e)=>{
       let val = e.target.value;
       setProduct_amount(val);
   }
   const addproductname = (e)=>{
     let val = e.target.value;
       setProduct_name(val);
   }
  return (
    <div>
        <form onSubmit={takeforminput}>
            <label htmlFor="">Product id</label>
            <input type="text" onChange={addproductid}/>
            <label htmlFor="">Selling Price</label>
            <input type="text" onChange={addproductamount}/>
            <label htmlFor="">Product Name</label>
            <input type="text" onChange={addproductname}/>

            <button type='submit'>Add product</button>
        </form>
        
        

    </div>
  )
}

export default Takein