import { useState } from 'react';
import './App.css';
import Takein from './Components/Takein';
import Showlist from './Components/Showlist';

function App() {
  const Data = [
    {
      id : 1,
      productid: 'e1',
      name: 'Toilet Paper',
      amount: 94.12,
    },
  ];
  const [initialdata, setData] = useState(Data);
  const [initialamount,setamount] = useState(0);
  const getData = (getdata)=>{
        setamount(initialamount+parseInt(getdata.amount) );
        const newData = {
          ...getdata,
          id: Math.random().toString()
        }
        setData((prevdata) => [...prevdata, newData]);
  } 
  return (
    <div className="App">
      <Takein onSavedata={getData}/>
      {
       
        initialdata.map((data) => (
          <Showlist
            key={data.id}
            productId={data.productid}
            productAmount={data.amount}
            productName={data.name}
          />
          
        ))
      
      }
      <p>Worth of product {initialamount}</p>
    </div>
  );
}

export default App;
