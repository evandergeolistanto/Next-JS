import { useRouter } from "next/router";
import useSWR from "swr";

// import { useEffect, useState } from "react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductDetail = ({ product }) => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  const router = useRouter();
  const { productId } = router.query;
  // useEffect(() => {
  //   const getProductById = async () => {
  //     const response = await fetch(`http://localhost:5000/products/${productId}`);
  //     const data = await response.json();
  //     setName(data.name);
  //     setPrice(data.price);
  //   };
  //   getProductById();
  // }, [productId]);
  const { data, error } = useSWR(`http://localhost:5000/products/${productId}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {data.name} - {data.price}
    </div>
  );
};

export default ProductDetail;
