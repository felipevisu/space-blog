import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_CONTENTFUL_API_URI,
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_API_ACCESS_TOKEN}`,
      },
    }),
  });
});

const client = getClient();
export default client;
