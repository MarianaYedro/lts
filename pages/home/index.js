import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
//import Slider from "../../components/Slider/Slider";
import SliderCustomers from "../../components/Slider/SliderCustomers";
import Section from "../../components/Section/Section";
import Consultoria from "../../components/Consultoria/Consultoria";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
//import Customers from "../../components/Customers/Customers";
import Form from "../../components/Form/Form";
import Maps from "../../components/Maps/Maps";
import Footer from "../../components/Footer/Footer";
import All from "../../components/Footer/All";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";
import Image from "next/image";
import SliderServices from "../../components/Consultoria/SliderServices";


export default function Home() {
    return (
        <Layout title="LTS | Home">
            <div className={styles.container}>
                <Navbar/>
                <Image src="/img/home/somos.svg" width={1920} height={809} alt="lts" /> 
                <Section/>   
                <SliderServices/>  
                <div className={styles.about}><SectionAbout/></div>    
                <SliderCustomers/>   
                <div className={styles.form}><Form/> <Maps/></div>
                <div><Footer/><All/></div> 
            </div>
            
            
        </Layout>
    )
}