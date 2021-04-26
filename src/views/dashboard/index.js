import React from "react"
import Section1 from "./sectionOne"
import Section2 from "./sectionTwo"
import Section3 from "./sectionThree"
import Section4 from "./sectionFour"
import Section5 from "./sectionFive"

export default function Dashboard() {

  return (
    <React.Fragment>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </React.Fragment>
  )
}