import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";

const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
	localStorage.setItem(TOKEN, token);
	isLoggedInVar(true);
};

export const logUserOut = (navigate) => {
	localStorage.removeItem(TOKEN);
	navigate.replace();
	window.localStorage.reload();
};

export const darkModeVar = makeVar(false);

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
