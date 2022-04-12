import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
	uri: "http://localhost:4000/grqphql",
	cache: new InMemoryCache(), // query result를 가져온 후 Apollo Client가 query result를 캐시하는 데 사용하는 InMemoryCache의 인스턴스.
});
