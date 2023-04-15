import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
    uri: "https://alive-puma-77.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret":
            "imKwZsjnvkoLh27X62r7rW0df06pfz4EkVnRyDYzsvNED3LzkuNS3vBHAy4yBGhq",
    },
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://alive-puma-77.hasura.app/v1/graphql',
    connectionParams: {
        headers: {
            "x-hasura-admin-secret":
                "imKwZsjnvkoLh27X62r7rW0df06pfz4EkVnRyDYzsvNED3LzkuNS3vBHAy4yBGhq",
        },
    },
}));

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default apolloClient;