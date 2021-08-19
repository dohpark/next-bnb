import { AppContext, AppProps } from "next/app";
import axios from "../lib/api";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import { wrapper } from "../store";
import { cookieStringToObject } from "../lib/utils";
import { userActions } from "../store/user";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

app.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx }: AppContext) => {
      const cookieObject = cookieStringToObject(ctx.req?.headers.cookie);

      try {
        if (cookieObject.access_token) {
          axios.defaults.headers.cookie = cookieObject.access_token;
          const { data } = await axios.get("/api/auth/me");
          store.dispatch(userActions.setLoggedUser(data));
        }
      } catch (e) {
        console.log(e);
      }
      return { pageProps: {} };
    }
);

export default wrapper.withRedux(app);
