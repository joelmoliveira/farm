// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Copy
import de from "./../../../assets/copy/de.json";

function ContactUs() {
  const copy = de.contactUs;

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
                ergregre
              </MKTypography>
            </Grid>
            <Grid Grid item xs={12} md={8}>
              <MKTypography variant="body1" textAlign="left" mt={1} mb={3}>
                regegr
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Grid
        item
        xs={12}
        sm={10}
        md={7}
        lg={6}
        xl={4}
        ml={{ xs: "auto", lg: 5 }}
        mr={{ xs: "auto", lg: 5 }}
      >
        <MKBox
          bgColor="white"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt={{ xs: 20, sm: 18, md: 20 }}
          mb={{ xs: 20, sm: 18, md: 20 }}
          mx={3}
        >
          <MKBox
            variant="gradient"
            bgColor="info"
            coloredShadow="info"
            borderRadius="lg"
            p={2}
            mx={2}
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              {copy.title}
            </MKTypography>
          </MKBox>
          <MKBox p={3}>
            <MKTypography variant="body2" color="text" mb={3}>
              {copy.description}
            </MKTypography>
            <MKBox width="100%" component="form" method="post" autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label={copy.fullName}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label={copy.email}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label={copy.label}
                    placeholder={copy.messagePlaceholder}
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={6}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                <MKButton type="submit" variant="gradient" color="info">
                  {copy.button}
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </MKBox>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
