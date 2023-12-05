// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
// import ContentBlockItems from "./data/ContentBlock/ContentBlockItems";
import ContentBlockItemsRev from "./data/ContentBlock/ContentBlockItemsRev";

// Copy
import data from "pages/Presentation/sections/data/designBlocksData";
// import de from "assets/copy/de.json";

function ContentBlocks() {
  return (
    <MKBox component="section" my={6} py={6}>
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
          <MKTypography variant="h2" fontWeight="bold">
            Solution for your business
          </MKTypography>
          <MKTypography variant="body1" color="text">
            3d Printing offers a solution to many industries and use cases. We do it for you.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        {data.map((blockData) => (
          <ContentBlockItemsRev key={blockData.title} data={blockData} />
        ))}
      </Container>
    </MKBox>
  );
}

export default ContentBlocks;
