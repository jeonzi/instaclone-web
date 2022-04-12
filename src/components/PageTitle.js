import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
	let newTitle = title + " | InstaClone";
	return <Helmet title={newTitle} />;
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageTitle;
