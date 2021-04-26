import React from "react"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExchangIcon from "../../asset/image/section/exchange-icon.png"
import ExchangTag from "../../asset/image/section/exchange-tag.png"
import ExchangeCurrency from "../../asset/image/section/exchange-currencies1.png"
import ExchangeCurrency2 from "../../asset/image/section/exchange-matching2.png"
import ExchangeChat from "../../asset/image/section/exchange-chat.png"
import ExchangeApi from "../../asset/image/section/exchange-api.png"

const useStyles = makeStyles((theme) => ({
  topSection: {
    maxWidth: "85vw",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(10)
  },
  cwalletbtn: {
    background: "rgb(14, 130, 140)", 
    color: 'white'
  },
  cmorebtn: {
    background: 'transparent', 
    boxShadow: 'none', 
    color : 'rgb(14, 130, 140)'
  },
  mt3: {
    marginTop: '3rem'
  },
  selctItem: {
    borderLeft: '5px solid rgb(14, 130, 140)', 
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
      letter: "Deposit in 4 Fiat Currencies",
      sentence: "The Exchange supports USD, EUR, GBP, and TRY."
    },
    {
      letter: "A Matching Engine That Can Keep Up with You",
      sentence: "The world's fastest crypto matching engine, built by and for traders."
    },
    {
      letter: "24/7 Live Chat Support",
      sentence: "Chat with customer support directly in the Exchange, anytime."
    },
    {
      letter: "API for Institutions/Traders",
      sentence: "Web Socket, REST, and Binary APIs for every type of pro trader."
    }
  ]

  return (
    <Box>
      <Box className={classes.topSection}>
        <Box>
          { value === 0 && <img src={ExchangeCurrency} alt="" className={classes.w30}/> }
          { value === 1 && <img src={ExchangeCurrency2} alt="" className={classes.w30}/> }
          { value === 2 && <img src={ExchangeChat} alt="" className={classes.w30}/> }
          { value === 3 && <img src={ExchangeApi} alt="" className={classes.w30}/> }
        </Box>
        <Box>
          <Box>
            <img className={classes.mld4} src={ExchangIcon} alt="" />
            <img className={classes.mld4} src={ExchangTag} alt="" />
          </Box>
          <Box>
            <h1>Lightning-Fast Crypto Trading</h1>
          </Box>
          <Box>
            <Button variant="contained" className={classes.cwalletbtn}> Trade now </Button>
            <Button variant="contained" className={classes.cmorebtn}> Learn more <ArrowRightAltIcon /></Button>
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
      </Box>
    </Box>
  )
}