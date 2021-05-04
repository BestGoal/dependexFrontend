import React from "react"
import Box from "@material-ui/core/Box"
import SectionOne from "./section1"
import SectionTwo from "./section2"

export default function Dashboard() {
  return (
    <Box className="main-dashboard">
      <SectionOne />
      <SectionTwo />
    </Box>
  )
}