import React from "react"
import SectionOne from "./sectionOne"
// import SectionTwo from "./sectionTwo"
import SectionThree from "./sectionThree"
import SectionFour from "./sectionFour"
// import SectionFive from "./sectionFive"
import SectionSix from "./sectionSix"

export default function Dashboard() {

  return (
    <React.Fragment>
      <SectionOne></SectionOne>
      {/* <SectionTwo></SectionTwo> */}
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      {/* <SectionFive></SectionFive> */}
      <SectionSix></SectionSix>
    </React.Fragment>
  )
}