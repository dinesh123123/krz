// import { useState , useEffect } from 'react';
// import React from 'react'
// import axios from 'axios';
// import Order from './Order';

// function Address() {
//     const [lists, setLists]=useState([]);

//           useEffect(()=>{
//       getHomeData();
//     },[]);
   
  
//     const getHomeData = async () => {
//     const userid = localStorage.getItem('useriid');
    
    
//       const options = {
//         headers: {
//           'content-type': 'application/json; charset=utf-8',
//           'Access-Control-Allow-Origin': '*',
//         },
//       };
//           const data = JSON.stringify({
//             "userId":userid,
            
//               });
    
//       try {
//         const res = await axios.post('http://103.104.74.215:3018/krazeal/api/address_list', data, options);
//                 setLists(res.data.data);  
                     
//       } catch (err) {
//         console.error(err);
//       }
//     };



//   return (
//     <div className="checkout-box">
//                         <div className="checkout-title">
//                           <h4>Delivery Address</h4>
                          
//                         </div>
//                         <div className="checkout-detail">
                        
//                           <div className="row g-4">
//                           {
//               lists.map((list) => {
//                 return(
//             <div className="col-xxl-6 col-lg-12 col-md-6">
//                               <div className="delivery-address-box">
//                                 <div>
//                                   {/* <Order  onClick={(getHomeData) =>
//                             localStorage.setItem(
//                               "shipingiid",
//                               list._id,
                              
//                             )
//                           }
//                           style={{ width: "208px" }}
//                           aria-hidden="true"
//                           key={list.id}/> */}
//                                 <li>
//                                   <input
//                                   onClick={() =>
//                                     localStorage.setItem("shipingid", list._id)
//                                   }
//         className="form-check-input"
//         type="radio"
//         name="jack"
//         id="flexRadioDefault1"
//       ></input></li>
//                                   <div className="label">
//                                     <label>Home</label>
//                                   </div>
//                                   <ul className="delivery-address-detail">
//                                     <li>
//                                       {list._id}
//                                     </li>
//                                     <li>
//                                       <p className="text-content"><span className="text-title">Address
//                                           : </span>{list.address} </p>
//                                     </li>
//                                     <li>
//                                       <h6 className="text-content"><span className="text-title">Pin Code
//                                           :</span> {list.pincode}</h6>
//                                     </li>
//                                     <li>
//                                       <h6 className="text-content mb-0"><span className="text-title">City
//                                           :</span> {list.city}</h6>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                                 )
//                             })
//                           }
//                                 </div>
//                         </div>
//                       </div>
//   )
// }

// export default Address
