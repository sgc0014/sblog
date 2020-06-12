import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import Featured from "../components/featured";
import Logo from "../components/logo";
import TopCategory from "../components/topCategory";
import SinglePost from "../components/singlePost";
import MainContentContainer from "../components/mainContentContainer";

export default function Home() {
  return (
    <div className="bodyContainer">
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <div className={styles.hero}>
            <Logo />
          </div>
          <Featured />
          <TopCategory/>
          <MainContentContainer/>
        </Layout>
      </main>
    </div>
  );
}
