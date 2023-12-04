import React from "react";
import PropTypes from "prop-types"; // Import Protypes

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Title({ headline, subheadline, py }) {
  return (
    <MKBox component="section" py={py}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontweight="bold">
            {headline}
          </MKTypography>
          <MKTypography variant="body1" fontweight="text">
            {subheadline}
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Define prop types for Title component
Title.propTypes = {
  headline: PropTypes.string.isRequired, // title should be a string and is required
  subheadline: PropTypes.string.isRequired, // description should be a string and is required
  py: PropTypes.number.isRequired, // description should be a number and is required
};

export default Title;
