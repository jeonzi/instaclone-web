import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

const ME_QUERY = gql`
	query me {
		me {
			username
			avatarURL
		}
	}
`;

function useUser() {
	const hasToken = useReactiveVar(isLoggedInVar);
	const { data } = useQuery(ME_QUERY, {
		skip: !hasToken,
		fetchPolicy: "no-cache",
	});
	console.log(data);
	useEffect(() => {
		if (data?.me === null) {
			logUserOut();
		}
	}, [data]);
	return { data };
}

export default useUser;
