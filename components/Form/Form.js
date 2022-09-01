import React from 'react';
import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.container}>
        <form action="/my-handling-form-page" method="post" className={styles.form}>
        <h2>Formulario de consulta</h2>

          <label>Nombre y Apellido</label>
          <input type="text" name="name" />

          <label>Nombre de la firma</label>
          <input type="text" name="firma" />
          
          <label>Teléfono de contacto</label>
          <input type="text" name="telefono" />
            
          <label> E-mail</label>
          <input type="text" name="telefono" />
           
          <label>Escribinos tus inquietudes</label>
          <textarea></textarea>

          <button>Enviar consulta</button>
 
        </form>
    </div>
  )
};
