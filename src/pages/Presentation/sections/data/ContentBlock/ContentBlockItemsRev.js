import React from "react";
import { PropTypes } from "prop-types";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ExampleRev from "pages/Presentation/components/ExampleCard/exampleRev";

function ContentBlockItemsRev({ data }) {
  return (
    <Grid container spacing={3} sx={{ mb: 10 }}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {data.title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {data.description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {data.items.map(({ icon, title, description }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <ExampleRev icon={icon} title={title} description={description} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContentBlockItemsRev;

ContentBlockItemsRev.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
