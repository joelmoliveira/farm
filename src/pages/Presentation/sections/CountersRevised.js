import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Counters({ copy }) {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          {copy.map((counter, index) => (
            <Grid item xs={12} md={4} key={index}>
              <DefaultInfoCard
                icon={counter.icon}
                title={counter.title}
                description={counter.description}
              />
              {index < copy.length - 1 && (
                <Divider
                  orientation="vertical"
                  sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

// Add PropTypes validation
Counters.propTypes = {
  copy: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Counters;
