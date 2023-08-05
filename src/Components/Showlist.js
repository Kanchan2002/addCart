import React from 'react'

function Showlist(props) {
    const deleteitem = (e)=>{
        let getitem = e.target.parentElement;
        getitem.remove();
    }
  return (
    <div>
      <li>{props.productId} {props.productAmount} {props.productName}</li>
      <button onClick={deleteitem}>Delete</button>
    </div>
  )
}

export default Showlist