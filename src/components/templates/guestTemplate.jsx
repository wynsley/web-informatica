import { Navbar } from "../organisms/navbar";
import { Footer } from "../organisms/footer";

function GuestTemplates({ children }) {
  return (
    <>
      <Navbar/>
      <section>
        {children}
      </section>
      <Footer/>
    </>
  );
}

export { GuestTemplates };
