// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ExampleRev({ name, count }) {
  return (
    <MKBox position="relative">
      <MKBox mt={1} ml={1} lineHeight={1}>
        <MKTypography variant="h6" fontWeight="bold">
          {name}
        </MKTypography>
        <MKTypography variant="button" fontWeight="regular" color="secondary">
          {count}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ExampleRev.defaultProps = {
  name: "",
  count: 0,
};

// Typechecking props for the ExampleCard
ExampleRev.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
};

export default ExampleRev;
