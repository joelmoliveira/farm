// @mui material components
import Icon from "@mui/material/Icon";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ExampleRev({ icon, title, description }) {
  return (
    <MKBox position="relative">
      <MKBox mt={1} ml={1} lineHeight={1}>
        {icon && <Icon>{icon}</Icon>}
        <MKTypography variant="h5" fontWeight="bold">
          {title}
        </MKTypography>
        <MKTypography variant="h6" fontWeight="regular" color="secondary">
          {description}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ExampleRev.defaultProps = {
  icon: "",
  title: "",
  description: "",
};

// Typechecking props for the ExampleCard
ExampleRev.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ExampleRev;
