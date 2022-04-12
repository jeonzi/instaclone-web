import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
