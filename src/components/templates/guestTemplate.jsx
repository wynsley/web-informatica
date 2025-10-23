import { Navbar } from "../organisms/navbar";

function GuestTemplates({ children }) {
  return (
    <>
      <Navbar/>
      <section>
        {children}
      </section>
    </>
  );
}

export { GuestTemplates };
