import * as React from "react"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import PropTypes from "prop-types"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { Grid, Typography } from "@mui/material"





const CustomBreadcrumbs = ({ pages }) => {
  return (
    <Grid container spacing={2} py={2} px={4}>
      <Grid item md={12} xs={12}>

        <Breadcrumbs

          aria-label="breadcrumb"
          color
          style={{
            color: "#AA00FF"
          }}
        >
          <Link key={"home"} to={"/"}
            component={RouterLink}
            underline="hover"
            style={{
              color: "#ab003c",
            }}
          >
            Home
          </Link>

          {pages?.map((page, index) =>
            page.path ? (
              <Link
                key={index}
                to={page.path}
                component={RouterLink}
                style={{
                  color: "#ab003c",
                }}
              >
                {page.title}
              </Link>
            ) : (
              <Typography key={index} style={{ color: "#ab003c" }}>
                {page.title}
              </Typography>
            )
          )}

        </Breadcrumbs>

      </Grid>
    </Grid>
  )
}
CustomBreadcrumbs.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
}
CustomBreadcrumbs.defaultProps = {
  pages: [],
}
export default CustomBreadcrumbs
