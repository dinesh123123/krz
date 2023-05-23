import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Order(props) {
  const [lists, setLists]=useState([]);
  const [data, setData] = useState();
  const [totalPrice, setTotalPrice] = useState();
  
  const [price, setPrice] = useState(props.price);
  const prces=props.price
  console.log("props pricesss",prces)
  // console.log(" pricesss",totalPrice)
  // useEffect(() => {
  //   getHomeData1();
  // }, []);
  // const getHomeData1 = async () => {
  //   const userid = localStorage.getItem("useriid");

  //   const options = {
  //     headers: {
  //       "content-type": "application/json; charset=utf-8",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   };
  //   const data = JSON.stringify({
  //     "userId": userid,
      
  //   });
  //   await axios
  //     .post(
  //       "http://103.104.74.215:3018/krazeal/api/order_summery_list",
  //       data,
  //       options
  //     )
  //     .then((res) => {
  //       setLists(res.data.data);
  //       setTotalPrice(res.data.dinesh[0].total_price);

  //     })
  //     .catch((err) => {});
  // };

  // useEffect(() => {
  //   getHomeData2();
  //   setPrice(props.price);
  // }, [props.price]);

  const getHomeData2 = async () => {
    const userid = localStorage.getItem("useriid");
    const shipingidd = localStorage.getItem("shipingid");
   const prcese=localStorage.getItem("total_price")
console.log("prisdasdkasdkakdasdadasd",prcese)



    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      "userId": userid,
      "shippingAddressId" : shipingidd ,

      "total_price": prcese,
    };

    try {
      const response = await axios.post(
        "https://admin.krazeal.com/krazeal/api/order",
        data,
        options
      );
           setLists(response.data.data);
           console.log("response of order",response.data.data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <><button onClick={getHomeData2} className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">Place Order</button></>
  );
}

export default Order;
