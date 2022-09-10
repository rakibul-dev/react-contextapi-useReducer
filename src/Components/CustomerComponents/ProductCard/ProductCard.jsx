import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

const ProductCard = (props) => {
  var string = props.product.title;
  var length = 20;
  var trimmedString =
    string.length > length ? string.substring(0, length - 3) + "..." : string;
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={`${props.product.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {trimmedString}
          </Typography>
          <Rating name="read-only" value={props.product.rating.rate} readOnly />
        </CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            justifyItems: "center",
            width: "80%",
            padding: "0px 0px 0px 15px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" align="center">
            ${props.product.price}
          </Typography>
          <Button size="small">Add to cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
