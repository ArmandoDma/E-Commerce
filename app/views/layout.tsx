
import { Outlet } from "react-router";
import { CartProvider } from "~/hooks/CartContext";

const Layout = () => {
  

  return (
    <>
    <CartProvider>
        <Outlet />        
    </CartProvider>      
    </>
  );
};

export default Layout;
