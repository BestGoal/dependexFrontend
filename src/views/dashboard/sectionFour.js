import React from "react"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExplorerIcon from "../../asset/image/section/explorer-icon.png"
import ExplorerTag from "../../asset/image/section/explorer-tag.png"
import Explorerexplorer from "../../asset/image/section/explorer-explore.png"
import Explorerapi from "../../asset/image/section/explorer-api.png"
import Explorerchart from "../../asset/image/section/explorer-chart1.png"
import Explorerchart1 from "../../asset/image/section/explorer-prices2.png"

const useStyles = makeStyles((theme) => ({
  topSection: {
    maxWidth: "85vw",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(10),
    marginBottom: "5rem"
  },
  cwalletbtn: {
    background: "rgb(83, 34, 229)", 
    color: 'white'
  },
  cmorebtn: {
    background: 'transparent', 
    boxShadow: 'none', 
    color : 'rgb(83, 34, 229)'
  },
  mt3: {
    marginTop: '3rem'
  },
  selctItem: {
    borderLeft: '5px solid rgb(83, 34, 229)', 
    paddingLeft: '1rem'
  },
  unSelctItem: {
    borderLeft: '5px solid transparent', 
    paddingLeft: '1rem',
    color: 'gray',
    cursor: 'pointer',
    "&>p":{
      color: "transparent"
    }
  },
  mld4: {
    marginLeft: '0.4rem'
  },
  w30: {
    width: "30vw",
    transitionDuration: ".2s",
    transitionDelay: ".2s"
  }
}));

export default function SectionTwo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const letterList = [
    {
      letter: "Explore the Top Blockchains",
      sentence: "Confirm transactions, analyze the market, or simply learn more about crypto."
    },
    {
      letter: "Powerful Blockchain Data API",
      sentence: "We've powered exchanges, data analysts, enthusiasts, and more."
    },
    {
      letter: "Industry-Leading Charts",
      sentence: "From Hashrate, to block details, to mining information, and more."
    },
    {
      letter: "Real-Time Crypto Prices",
      sentence: "Get the latest prices and charts along with key market signals."
    }
  ]

  return (
    <Box>
      <Box className={classes.topSection}>
        <Box>
          <Box>
            <img className={classes.mld4} src={ExplorerIcon} alt="" />
            <img className={classes.mld4} src={ExplorerTag} alt="" />
          </Box>
          <Box>
            <h1>Blockchain Data is in Our DNA</h1>
          </Box>
          <Box>
            <Button variant="contained" className={classes.cwalletbtn}> View Our Data </Button>
          </Box>
          <Box className={classes.mt3}>
            {
              letterList.map((item, key) => (
                <Box key={key} className={ value===key ? classes.selctItem : classes.unSelctItem} onClick={() => setValue(key)}>
                  <h2>{item.letter}</h2>
                  <p>{item.sentence}</p>
                </Box>
              ))
            }
          </Box>
        </Box>
        <Box>
          { value === 0 && <img src={Explorerexplorer} alt="" className={classes.w30}/> }
          { value === 1 && <img src={Explorerapi} alt="" className={classes.w30}/> }
          { value === 2 && <img src={Explorerchart} alt="" className={classes.w30}/> }
          { value === 3 && <img src={Explorerchart1} alt="" className={classes.w30}/> }
        </Box>
      </Box>
    </Box>
  )
}