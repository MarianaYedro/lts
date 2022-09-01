import React from 'react';
import Image from 'next/image';
import styles from "./Customers.module.css"

export default function Customers() {
  return (
    <section className={styles.container}>
        <h2>Nuestros Clientes</h2>
        <div className={styles.customers}>
            <Image src="/img/home/customers/orbis.svg" width={200} height={150} alt="orbis" />
            <Image src="/img/home/customers/escala.svg" width={350} height={150} alt="escala" />
            <Image src="/img/home/customers/criteria.svg" width={250} height={150} alt="criteria" />
            <Image src="/img/home/customers/maserati.svg" width={250} height={150} alt="maserati" />
        </div>
    </section>
  )
}
