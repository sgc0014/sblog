import Head from "next/head";
import Layout from "../components/layout/layout";
import styles from "../styles/index.module.css";
import Featured from "../components/home/featured";
import IndexContent from "../components/home/indexContent";

export default function Home() {
  return (
    <div className="bodyContainer">
      <Head>
        <title>S-blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <div className={styles.hero}></div>
          
         
        
          <IndexContent />
        
        </Layout>
      </main>
    </div>
  );
}
