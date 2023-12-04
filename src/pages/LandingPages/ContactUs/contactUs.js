// importing useeffect library;
import React from "react";
// import { useEffect } from "react";
import HubspotForm from "react-hubspot-form";

// @mui material components
import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
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
      <MKBox minHeight="20vh" width="100%"></MKBox>
      <Grid
        item
        xs={12}
        sm={10}
        md={7}
        lg={6}
        xl={4}
        ml={{ xs: "auto", lg: 5 }}
        mr={{ xs: "auto", lg: 5 }}
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox
          bgColor="white"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
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
            <HubspotForm
              portalId="143694599"
              formId="e363868a-f208-4265-983b-75d1c7d96316"
              onSubmit={() => console.log("Submit!")}
              onReady={() => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
            {/* <MKBox width="100%" component="form" method="post" autoComplete="off">
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
            </MKBox> */}
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
