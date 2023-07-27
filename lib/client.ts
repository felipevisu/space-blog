import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_CONTENTFUL_API_URI,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_API_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
