import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Copy
import de from "assets/copy/de.json";

function FeaturesList() {
  const copy = de.aboutUs.featuresList;

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid item xs={12} lg={10}>
          <Grid container justifyContent="flex-start">
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon={copy.card1.icon}
                  title={copy.card1.title}
                  description={copy.card1.description}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon={copy.card2.icon}
                  title={copy.card2.title}
                  description={copy.card1.description}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  icon={copy.card3.icon}
                  title={copy.card1.title}
                  description={copy.card1.description}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  icon={copy.card4.icon}
                  title={copy.card1.title}
                  description={copy.card1.description}
                />
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesList;
