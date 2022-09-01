import React from 'react';
import Image from 'next/dist/client/image';
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
import styles from "./about.module.css";
import PartnerGerman from '../../components/Partner/PartnerGerman';
import PartnerLeandro from '../../components/Partner/PartnerLeandro';
import Footer from "../../components/Footer/Footer";
import All from "../../components/Footer/All";

export default function about() {
  return (
    <Layout title="LTS | Nosotros">
        <div>
            <div><Navbar/></div>
            <div><Image src="/img/about/about.jpg" width={1920} height={936} alt="lts" /></div>
            <div className={styles.about}><SectionAbout/></div>
            <PartnerGerman/>
            <PartnerLeandro/>
            <div><Footer/><All/></div> 

        </div>
    </Layout>
  )
}
