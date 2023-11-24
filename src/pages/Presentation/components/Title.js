import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Title() {
  return (
    <MKBox component="section" py={12}>
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
            efwef
          </MKTypography>
          <MKTypography variant="body1" fontweight="text">
            efwef
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Title;
