import React from 'react';
import styles from './SectionAbout.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function SectionAbout() {
  return (
    <section className={styles.about}>
        <div className={styles.box}>

            <h2>Sobre nosotros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium velit porta
                lectus tristique congue. Sed sit amet venenatis lorem. Pellentesque lacus diam,
                tempor id est efficitur, placerat viverra nunc. Proin in tincidunt tortor. Donec 
                felis venenatis, malesuada augue et, tincidunt quam. Curabitur condimentum eu ante
                liquet posuere. Vivamus ac leo a magna cursus mollis. Proin mollis quis dui blandit
                lacinia. Nam iaculis lectus non laoreet imperdiet.</p>
            <h4>Socio Principal: Germán A. Lopez Toussaint Asociado: Leandro A. Sclavo</h4>
            
            <button><Link href="/"><a>Certificaciones</a></Link></button>
        
        </div>

        <div className={styles.img}>
            <Image src="/img/home/about/about-section.svg" width={1000} height={600} alt="about" />
        </div>


    </section>
  )
}
