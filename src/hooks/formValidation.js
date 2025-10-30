// hooks/useFormValidation.js
import { useState } from 'react';

export const useFormValidation = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    numero: '',
    mensaje: ''
  });
  

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Expresiones regulares
  const validations = {
    nombre: {
      regex: /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/,
      minLength: 2,
      maxLength: 50
    },
    email: {
      regex: /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
      allowedDomains: ['gmail.com', 'hotmail.com', 'outlook.com']
    },
    telefono: {
      regex: new RegExp("^[\\+]?[(]?[0-9]{1,4}[)]?[-\\s\\.]?[(]?[0-9]{1,4}[)]?[-\\s\\.]?[0-9]{4,9}$"),
      maxDigits: 15
    },
    mensaje: {
      regex: /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s.,;:¿?¡!()\-"']+$/,
      minLength: 10,
      maxLength: 500
    }
  };

  // Validar nombre
  const validateNombre = (value) => {
    if (!value.trim()) {
      return 'El nombre es obligatorio';
    }
    if (value.length < validations.nombre.minLength) {
      return 'El nombre debe tener al menos 2 caracteres';
    }
    if (value.length > validations.nombre.maxLength) {
      return 'El nombre no puede exceder 50 caracteres';
    }
    if (!validations.nombre.regex.test(value)) {
      return 'El nombre solo puede contener letras y espacios';
    }
    return '';
  };

  // Validar email
  const validateEmail = (value) => {
    const email = value.trim().toLowerCase();
    
    if (!email) {
      return 'El email es obligatorio';
    }
    if (!validations.email.regex.test(email)) {
      return 'Ingresa un email válido';
    }
    
    const domain = email.split('@')[1];
    if (!validations.email.allowedDomains.includes(domain)) {
      return `Solo se permiten emails de: ${validations.email.allowedDomains.join(', ')}`;
    }
    return '';
  };

  // Validar teléfono
  const validateTelefono = (value) => {
    if (!value.trim()) {
      return 'El teléfono es obligatorio';
    }
    if (!validations.telefono.regex.test(value)) {
      return 'Ingresa un número de teléfono válido';
    }
    
    const numericOnly = value.replace(/\D/g, '');
    if (numericOnly.length < validations.telefono.minDigits) {
      return `El teléfono debe tener al menos ${validations.telefono.minDigits} dígitos`;
    }
    if (numericOnly.length > validations.telefono.maxDigits) {
      return `El teléfono no puede exceder ${validations.telefono.maxDigits} dígitos`;
    }
    return '';
  };

  // Validar mensaje
  const validateMensaje = (value) => {
    if (!value.trim()) {
      return 'El mensaje es obligatorio';
    }
    if (value.length < validations.mensaje.minLength) {
      return `El mensaje debe tener al menos ${validations.mensaje.minLength} caracteres`;
    }
    if (value.length > validations.mensaje.maxLength) {
      return `El mensaje no puede exceder ${validations.mensaje.maxLength} caracteres`;
    }
    if (!validations.mensaje.regex.test(value)) {
      return 'El mensaje contiene caracteres no permitidos';
    }
    
    // Detectar spam (palabras repetidas excesivamente)
    const words = value.toLowerCase().split(/\s+/);
    const wordCount = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    const maxRepetition = Math.max(...Object.values(wordCount));
    if (maxRepetition > 10) {
      return 'El mensaje parece contener spam';
    }
    
    return '';
  };

  // Validar campo específico
  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'nombre':
        error = validateNombre(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'telefono':
        error = validateTelefono(value);
        break;
      case 'mensaje':
        error = validateMensaje(value);
        break;
      default:
        break;
    }
    
    return error;
  };

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Si el campo ya fue tocado, validar en tiempo real
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Manejar blur (cuando el input pierde el foco)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Validar todo el formulario
  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      nombre: true,
      email: true,
      telefono: true,
      mensaje: true
    });

    return Object.keys(newErrors).length === 0;
  };

  // Resetear formulario
  const resetForm = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
    setErrors({});
    setTouched({});
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm
  };
};