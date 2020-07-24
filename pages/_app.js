import "../styles/global.css";


export default function App({ Component, pageProps }) {
  return (
    <div>
     
       <Component {...pageProps} />
      
      <style jsx global>{`
        @font-face {
          font-family: "Lato";
          src: url("/fonts/Lato-Regular.ttf");
        }
      `}</style>
    </div>
  );
}
