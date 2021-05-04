import React from "react"
import SectionOne from "./section1"
import SectionTwo from "./section2"
import SectionThree from "./section3"
import SectionFour from "./section4"

export default function Dashboard() {
  return (
    <React.Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </React.Fragment>
  )
}