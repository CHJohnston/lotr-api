import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};
