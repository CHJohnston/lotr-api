import { Header } from "./Header";
//import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className = "d-flex flex-column h-100">
      <Header />
      <div className="container">{children}</div>      
    </div>
  );
};
