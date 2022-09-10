import { useContext } from "react";
import { ShopContext } from "../../../Contexts/ShopContext";
const Footer = () => {
  const { name } = useContext(ShopContext);
  return <div>{name}</div>;
};

export default Footer;
