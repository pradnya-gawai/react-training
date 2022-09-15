import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Product(props) {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h2>Product Id</h2>
      <div>
        Parameters : {params.id}
        <br />
        Query Parameters : {searchParams.get("name")},{searchParams.get("city")}
      </div>
    </div>
  );
}

export default Product;
