import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import Featured from "../components/index/featured";
import SinglePost from "../components/singlePostCard";
import IndexContent from "../components/index/indexContent";

export default function Home() {
  return (
    <div className="bodyContainer">
      <Head>
        <title>S-blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <div className={styles.hero}>
           
          </div>
          <Featured />
        
          <IndexContent/>
        </Layout>
      </main>
    </div>
  );
}
