import { createContext } from "react";

const ShopContext = createContext();

const ShopContextState = (props) => {
  return (
    <div>
      <ShopContext.Provider value={{ name: "rakib" }}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};

export { ShopContextState, ShopContext };
