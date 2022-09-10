import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import ProductCard from "../Components/CustomerComponents/ProductCard/ProductCard";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ padding: "50px" }}
      >
        {products.map((product) => (
          <Grid item xs={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
