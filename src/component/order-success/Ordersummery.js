import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Orderlist from "./Orderlist";
import Order from "../product-left-thumbnail/Order";

function Ordersummery(props) {
  const [lists, setLists] = useState([]);
  const [data, setData] = useState([]);
  const [summaryId, setSummaryId] = useState("");

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const userid = localStorage.getItem("useriid");
    const amount = props.price;

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const orderSummaryData = JSON.stringify({
      userId: userid,
      total_price: amount,
    });

    try {
      const orderSummaryResponse = await axios.post(
        "https://admin.krazeal.com/krazeal/api/order_summery",
        orderSummaryData,
        
        options
      );

      const summaryData = orderSummaryResponse.data;

      const summaryId = summaryData.data._id;
      const summaryamount = summaryData.data.total_price;
       

      setLists(summaryData.data);
      setSummaryId(summaryId);

      localStorage.setItem("summaryId", summaryId); // Store summaryId in localStorage
      localStorage.setItem("total_price", summaryamount); // Store total_price in localStorage
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        className="btn btn-animation proceed-btn fw-bold"
        type="submit"
        onClick={getHomeData}
      >

        <Link to="/check-out">Check Out</Link>
       
      </button>

      
    </div>
  );
}

export default Ordersummery;
