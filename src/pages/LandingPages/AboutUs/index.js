// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import FeaturesList from "pages/LandingPages/AboutUs/sections/FeaturesList";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Copy
import de from "assets/copy/de.json";

function AboutUs() {
  const copy = de.aboutUs;

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "",
          label: "free download",
          color: "default",
        }}
        sticky
      />
      <MKBox
        minHeight="90vh"
        width="100%"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={10}
            justifyContent="center"
            alignItems="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <Grid item xs={12} md={4}>
              <MKTypography
                variant="h1"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                {copy.hero.title}
              </MKTypography>
            </Grid>
            <Grid Grid item xs={12} md={8}>
              <MKTypography variant="body1" textAlign="left" mt={1} mb={3}>
                {copy.hero.description}
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <FeaturesList />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
