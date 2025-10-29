import styles from "./sectionContact.module.css";
import { BsTelephoneForward } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";

function Contact() {
  const title = "Contact";
  const listContact = [
    {
      icon: <BsTelephoneForward />,
      title: "Teléfono",
      text: "123-456-789",
    },
    {
      icon: <HiOutlineMailOpen />,
      title: "Email",
      text: "webinformatica@gmail.com",
    },
    {
      icon: <TfiWorld />,
      title: "Sitio Web",
      text: "www.webinformatica.com",
    },
    {
      icon: <SlLocationPin />,
      title: "Ubicación",
      text: "Jr. Dos de Mayo 1390 - Celendín",
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <h2>{title}</h2>
      <div>
        <article>
          <h3>Contáctanos</h3>
          <p>
            “¿Buscas colaborar o necesitas más información? Contáctame y
            encontremos juntos la mejor forma de hacer realidad tus ideas.”
          </p>
          {listContact.map((item, index) => (
            <div key={index} className={styles.contactItem}>
              <span>{item.icon}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
      <form action="">
        <h3>¿Tienes alguna pregunta?</h3>
        <p>¡Escríbenos y te responderemos pronto!</p>
        <div >
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Teléfono" />
        <input type="email" placeholder="Email" />
        <textarea name="message" id="" placeholder="Mensaje"></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </section>
  );
}

export { Contact };
