// react-router-dom components

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ContentBlockItemsRev from "./data/ContentBlock/ContentBlockItemsRev";

// Copy
// import data from "pages/Presentation/sections/data/designBlocksData";
import de from "assets/copy/de.json";

function ContentBlocks() {
  const data = de.homepage.contentBlocks;

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
            {data.title}
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {data.description}
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        {data.items.map((blockData) => (
          <ContentBlockItemsRev key={blockData.title} data={blockData} />
        ))}
      </Container>
    </MKBox>
  );
}

export default ContentBlocks;
