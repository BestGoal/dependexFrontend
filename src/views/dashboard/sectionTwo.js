import React from "react"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import WalletIcon from "../../asset/image/section/wallet-icon.png"
import WalletTag from "../../asset/image/section/wallet-tag.png"
import WalletBuy from "../../asset/image/section/wallet-buy.png"
import WalletControl from "../../asset/image/section/wallet-control.png"
import WalletInterest from "../../asset/image/section/wallet-interest.png"
import WalletBorrow from "../../asset/image/section/wallet-borrow.png"
import WalletSwap from "../../asset/image/section/wallet-swap.png"

const useStyles = makeStyles((theme) => ({
  topSection: {
    maxWidth: "85vw",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(10)
  },
  cwalletbtn: {
    background: "rgb(12, 108, 242)", 
    color: 'white'
  },
  cmorebtn: {
    background: 'transparent', 
    boxShadow: 'none', 
    color : 'rgb(12, 108, 242)'
  },
  mt3: {
    marginTop: '3rem'
  },
  selctItem: {
    borderLeft: '5px solid rgb(12, 108, 242)', 
    paddingLeft: '1rem'
  },
  unSelctItem: {
    borderLeft: '5px solid transparent', 
    paddingLeft: '1rem',
    color: 'gray',
    cursor: 'pointer',
    "&>p": {
      color: "transparent"
    }
  },
  mld4: {
    marginLeft: "0.4rem"
  },
  w40: {
    width: "40vw"
  }
}));

export default function SectionTwo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const letterList = [
    {
      letter: "Buy and Sell Crypto in Minutes",
      sentence: "Go from zero to crypto in minutes. Simply verify your ID, add a payment method, and buy crypto."
    },
    {
      letter: "Control Your Funds from Anywhere in the World",
      sentence: "No one but you can access your funds. Not even us."
    },
    {
      letter: "Earn Up to 13.5% Interest",
      sentence: "Deposit crypto in an Interest Account and watch it grow."
    },
    {
      letter: "Borrow Against Your Bitcoin",
      sentence: "Turn your crypto in cash."
    },
    {
      letter: "Swap Crypto-to-Crypto",
      sentence: "Instantly exchange your crypto for any other currency."
    }
  ]

  return (
    <Box>
      <Box className={classes.topSection}>
        <Box>
          <Box>
            <img className={classes.mld4} src={WalletIcon} alt="" />
            <img className={classes.mld4} src={WalletTag} alt="" />
          </Box>
          <Box>
            <h1>The Easiest and Most Powerful Crypto Wallet</h1>
          </Box>
          <Box>
            <Button variant="contained" className={classes.cwalletbtn}> Create Wallet </Button>
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
        <Box>
          { value === 0 && <img src={WalletBuy} className={classes.w40} alt="" /> }
          { value === 1 && <img src={WalletControl} className={classes.w40} alt="" /> }
          { value === 2 && <img src={WalletInterest} className={classes.w40} alt="" /> }
          { value === 3 && <img src={WalletBorrow} className={classes.w40} alt="" /> }
          { value === 4 && <img src={WalletSwap} className={classes.w40} alt="" /> }
        </Box>
      </Box>
    </Box>
  )
}