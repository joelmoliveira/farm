// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
import CountersRevised from "pages/Presentation/sections/CountersRevised";
import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import ContentBlocks from "pages/Presentation/sections/ContentBlocks";
import Pages from "pages/Presentation/sections/Pages";
import TestimonialsRevised from "pages/Presentation/sections/TestimonialsRevised";
import Partner from "pages/Presentation/sections/PartnerUs";
import Title from "pages/Presentation/components/Title";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";

// Copy
import de from "assets/copy/de.json";

function Homepage() {
  const copyHomepage = de;

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "",
          label: copyHomepage.routes.quote,
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="90vh"
        width="100%"
        sx={{
          // backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={9} justifyContent="center" mx="auto">
            <Grid item xs={12} md={6}>
              <MKTypography
                variant="h1"
                mt={-6}
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                {copyHomepage.homepage.cta.title}
              </MKTypography>
              <MKButton
                variant="gradient"
                color="info"
                size="large"
                component="a"
                href=""
                sx={{ mb: 2 }}
              >
                {copyHomepage.homepage.cta.button}
              </MKButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKTypography variant="body1" textAlign="left" px={{ xs: 6, lg: 12 }} mt={1}>
                {copyHomepage.homepage.cta.description}
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
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <CountersRevised copy={copyHomepage.homepage.counters} />
        <ContentBlocks />
        <Title
          headline={copyHomepage.homepage.headlines.headline1}
          py={0}
          // subheadline={copyHomepage.homepage.headlines.subheadline1}
        />
        {/* <DesignBlocks /> */}
        {/* How it works block */}
        <Information />
        {/* Pages */}
        <Pages />
        {/* Built by developers */}
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        {/* Testimonials */}
        <TestimonialsRevised />
        <Partner />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Homepage;
