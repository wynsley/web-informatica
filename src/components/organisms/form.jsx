import { useState } from "react";
import { FormInput } from "../molecules/formImput";
import { Button } from "../atoms/button";
import styles from "./form.module.css";
import { useFormValidation } from "../../hooks/formValidation";

function Form() {
  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  } = useFormValidation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(""); // <-- nuevo estado para mensaje de error

  const listInputs = [
    {
      id: "nombre",
      name: "nombre",
      type: "text",
      placeholder: "Nombre",
      value: formData.nombre,
      required: true,
      disabled: isSubmitting,
      error: touched.nombre && errors.nombre ? errors.nombre : "",
      hasError: touched.nombre && !!errors.nombre,
      isValid: touched.nombre && !errors.nombre && formData.nombre,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "tucorreo@gmail.com",
      value: formData.email,
      required: true,
      disabled: isSubmitting,
      error: touched.email && errors.email ? errors.email : "",
      hasError: touched.email && !!errors.email,
      isValid: touched.email && !errors.email && formData.email,
      helperText: "Solo Gmail, Hotmail u Outlook",
    },
    {
      id: "telefono",
      name: "telefono",
      type: "tel",
      placeholder: " 999 999 999",
      value: formData.telefono,
      required: true,
      disabled: isSubmitting,
      error: touched.telefono && errors.telefono ? errors.telefono : "",
      hasError: touched.telefono && !!errors.telefono,
      isValid: touched.telefono && !errors.telefono && formData.telefono,
    },
  ];

  const textarea = {
    id: "mensaje",
    name: "mensaje",
    placeholder: "Escribe tu mensaje aquí...",
    value: formData.mensaje,
    required: true,
    disabled: isSubmitting,
    rows: 5,
    error: touched.mensaje && errors.mensaje ? errors.mensaje : "",
    hasError: touched.mensaje && !!errors.mensaje,
    isValid: touched.mensaje && !errors.mensaje && formData.mensaje,
    maxLength: 500,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(""); // resetear mensaje antes de enviar

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api-informatic.vercel.app/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      const data = await response.json();
      console.log("Datos enviados correctamente:", data);

      resetForm();
    } catch (error) {
      console.error("Error al enviar:", error);
      setSubmitError("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.containerTitles}>
        <h3 className={styles.formTitle}>¿Tienes Alguna Pregunta?</h3>
        <p className={styles.formParagr}>
          ¡Escríbenos y te responderemos pronto!
        </p>
      </div>

      <FormInput
        listInputs={listInputs}
        textarea={textarea}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button
        type="submit"
        label={isSubmitting ? "Enviando..." : "Enviar"}
        className={styles.btnForm}
        disabled={isSubmitting}
      />

      {/* Mostrar mensaje de error */}
      {submitError && <p className={styles.submitError}>{submitError}</p>}
    </form>
  );
}

export { Form };
