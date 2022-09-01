import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Section.module.css"

export default function Section() {
  return (
    <section className={styles.services}>
            <div className={styles.box}>
              <Image src="/img/home/services/consultoria.svg" width={100} height={80} alt="lts" /> 
              <Link href="../Consultoria/SliderServices"><a>Consultoría Tributaria</a></Link>
            </div>
            
            <div className={styles.box}>
              <Image src="/img/home/services/pericias.svg" width={100} height={80} alt="lts" />
              <Link href="/"><a>Pericias Tributarias</a></Link>
            </div>

            <div className={styles.dot}>
            <Image src="/img/home/services/dot.svg" width={146} height={73} alt="lts" />
            </div>
            
            <div className={styles.box}>
              <Image src="/img/home/services/estudios.svg" width={100} height={80} alt="lts" />
              <Link href="/"><a>Estudios y Consultores Relacionados</a></Link>
            </div>
            
            <div className={styles.box}>
              <Image src="/img/home/services/capacitacion.svg" width={100} height={80} alt="lts" />
              <Link href="/"><a>Capacitación</a></Link>
            </div>
          </section>
  )
}
