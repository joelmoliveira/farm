import React from "react";
import { PropTypes } from "prop-types";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
import ExampleCard from "pages/Presentation/components/ExampleCard";

function ContentBlockItems({ data }) {
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
          {data.items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard image={image} name={name} count={count} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContentBlockItems;

ContentBlockItems.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        route: PropTypes.string.isRequired,
        pro: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};