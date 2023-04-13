import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: "https://alive-puma-77.hasura.app/v1/graphql",
        headers: {
            "x-hasura-admin-secret":
                "imKwZsjnvkoLh27X62r7rW0df06pfz4EkVnRyDYzsvNED3LzkuNS3vBHAy4yBGhq",
        },
    }),
    cache: new InMemoryCache(),
});

export default apolloClient;