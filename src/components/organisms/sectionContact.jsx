import styles from "./sectionContact.module.css";
import { BsTelephoneForward } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { Form } from "./form";

function Contact() {
  const title = "Contacto";
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
      <h2 className={styles.titleC}>{title}</h2>
      <div className={styles.contContact}>
        <article className={styles.articleContact}>
          <h3 className={styles.cardTitle}>Contáctanos</h3>
          <p className={styles.paragraph}>
            “¿Buscas colaborar o necesitas más información? Contáctame y
            encontremos juntos la mejor forma de hacer realidad tus ideas.”
          </p>
          <div className={styles.containerDer}>
            {listContact.map((item, index) => (
              <div key={index} className={styles.contactItem}>
                <span className={styles.icon}>{item.icon}</span>
                <div className={styles.containerTel}>
                  <h4 className={styles.titleCont}>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
        <Form />
      </div>
    </section>
  );
}

export { Contact };
