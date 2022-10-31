// import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Product = () => {
  //   const [products, setProducts] = useState([]);
  //
  //   useEffect(() => {
  //     const getProducts = async () => {
  //       const response = await fetch("http://localhost:5000/products");
  //       const data = await response.json();
  //       setProducts(data);
  //     };
  //     getProducts();
  //   }, []);
  const { data, error } = useSWR("http://localhost:5000/products", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h3>
        {data.map((item) => (
          <ul key={item.id}>
            <li>
              {item.name} - {item.price}
            </li>
          </ul>
        ))}
      </h3>
    </div>
  );
};

export default Product;

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:5000/products");
//   const data = await response.json();
//
//   return {
//     props: {
//       products: data,
//     },
//   };
// };
