import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

// Copy
import de from "assets/copy/de.json";

function InformationRevised() {
  const copyHomepage = de;

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">{copyHomepage.homepage.testimonial1.head1}</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            {copyHomepage.homepage.testimonial1.head2}
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            {copyHomepage.homepage.testimonial1.brief}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name={copyHomepage.homepage.testimonial2.name1}
              date={copyHomepage.homepage.testimonial2.time1}
              review={copyHomepage.homepage.testimonial2.review1}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name={copyHomepage.homepage.testimonial2.name2}
              date={copyHomepage.homepage.testimonial2.time2}
              review={copyHomepage.homepage.testimonial2.review2}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name={copyHomepage.homepage.testimonial2.name3}
              date={copyHomepage.homepage.testimonial2.time3}
              review={copyHomepage.homepage.testimonial2.review3}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default InformationRevised;
