import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";
import "../styles/global.scss";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
