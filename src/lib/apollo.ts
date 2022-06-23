import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pp6yc723v601xt3moz9f7i/master',
    cache: new InMemoryCache()
})