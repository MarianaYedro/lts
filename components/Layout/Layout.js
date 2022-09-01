import Head from "next/head";
import styles from "./Layout.module.css";


export default function Layout({children, title, description, navbar, footer}) {
  return (
    <div className={styles.container}>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>

        <nav>{navbar}</nav>

        <main>{children}</main>

        <footer>{footer}</footer>
    </div>
  )
};

Layout.defaultProps = {
    title: "LTS",
    description: "Asesores",
};