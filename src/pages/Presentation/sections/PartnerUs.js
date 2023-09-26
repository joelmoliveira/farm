import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

// Copy
import de from "assets/copy/de.json";

function Partner() {
  const copyDe = de.homepage.partner;
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="light"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.5}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 8 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="inherit" mb={2}>
              {copyDe.head1}
            </MKTypography>
            <MKTypography variant="body1" color="inherit" mb={4}>
              {copyDe.subhead}
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="medium"
              component="a"
              href=""
              sx={{ mb: 2, marginRight: 1 }}
            >
              {copyDe.button1}
            </MKButton>
            <MKButton
              variant="gradient"
              color="info"
              size="medium"
              component="a"
              href=""
              sx={{ mb: 2, marginLeft: 1 }}
            >
              {copyDe.button2}
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Partner;
