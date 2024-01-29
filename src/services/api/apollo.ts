// src/services/apollo.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://edge.sitecorecloud.io/api/graphql/v1',
});

const authLink = setContext((_, { headers }) => {
  // Get the API key from your storage or environment variable
  const apiKey = 'YOUR_API_KEY';

  return {
    headers: {
      ...headers,
      sc_apikey: "bTFQZVpCdlc0RG54V1BHMWJSejN4bk1uUDd4V0pQcjhsWkRpTmowajRhcz18YXJjZWxvcm1pdHQyNGRjLWFtbC1hbWwtMDc4Zg=="
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
