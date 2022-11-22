import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer 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`
    }
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});
