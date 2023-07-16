import React, { useState } from 'react';
import { arrowdown, arrowup } from '../helper/icons'

 // const Question = (props) => {
  // console.log('item',props)

  //?havada desc.
  //ilk yöntem 
const Question = ({id,question,answer}) => {
  const [show, setShow] = useState(false) //bir state belirleyip başlangıç değeri verdik. import etttik.
  //ikinci yontem
  const handleTogle = () => {
    //if else ile de yapılır ama codu uzazatmış oluruz.🤦‍♀️
    setShow(!show) // toglle. o an ki değerinin değili.📌
    //tek fonksiyonda iki ayrı değeri değiştirmiş olduk.
  }

  return (
    <div className="card-group">
      {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            {/* <button onClick={() => setShow(false)}>{arrowup}</button>  */}
            <button onClick={handleTogle}>{arrowup}</button>
          </div>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            {/* <button onClick={() => setShow(true)}>{arrowdown}</button> */}
            <button onClick={handleTogle}>{arrowdown}</button>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default Question

//Not arrowup arrowdown import etmeyi unutma!!!
//ilk yöntem setShow() ile yapıldı
//ikinci olarak handleToglle ile yapıldı.



