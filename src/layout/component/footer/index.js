import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Language from '@material-ui/icons/Language';
import FaceBook from "../../../asset/image/section/facebook.jpg"
import Instagram from "../../../asset/image/section/instagram.png"
import LinkdIn from "../../../asset/image/section/linkedin.jpg"
import Medium from "../../../asset/image/section/medium-plain.png"
import Twitter from "../../../asset/image/section/twitter.jpg"
import Company from "../../../asset/image/section/company.svg"
import FooterGoogle from "../../../asset/image/section/footer-android.png"
import FooterApple from "../../../asset/image/section/footer-ios.png"

const useStyles = makeStyles((theme) => ({
    firstTop: {
        maxWidth: "85vw",
        margin: "auto"
    },
    topSection: {
        position: "relative",
        paddingTop: "4rem",
        paddingBottom: "4rem"
    },
    container: {
        flexDirection: "column",
        maxQidth: "75rem",
        padding: "1.25rem 2rem",
        display: "flex",
        margin: "0px auto",
        width: "100%",
        minHeight: "2rem"
    },
    section1: {
        display: "flex",
        flexFlow: "row nowrap",
        "-webkit-box-pack": "start",
        justifyContent: "space-between"
    },
    item: {
        marginBottom: "4rem",
        lineHeight: "2.5rem",
        marginRight: "2rem",
        "& > span" : {
            color: "rgb(18, 29, 51)",
            fontSize: "1rem",
            fontWeight: "600",
            lineHeight: "1.5"
        },
        "& > ul" : {
            padding: "0", 
            margin: "0",
            "& > li" : {
                display: "block",
                fontWeight: "500",
                fontSize: "1.2em",
                color: "rgb(18, 29, 51)",
                opacity: "0.75",
                cursor: "pointer",
                "&:hover": {
                    opacity: "1",
                }
            }
        }
    },
    socialIcon: {
        alignItems: "center",
        opacity: "0.75",
        color: "rgb(18, 29, 51)",
        fontWeight: "500",
        display: "flex",
        transition: "all 0.5s ease 0s",
        cursor: "pointer",
        "&:hover": {
            opacity: "1",            
        },
        "& > span": {
            marginLeft: "1rem",
            color: "rgb(18, 29, 51)",
            fontWeight: "500"
        }
    },
    socialImage: {
        width: "24px"
    },
    footerLogo: {
        fontWeight: "bold", 
        fontSize: "1.5rem", 
        margin: "0"
    },
    pt1: {
        paddingTop: "1rem"
    },
    dflexac: {
        display: "flex", 
        alignItems: "center",
        "& > span" : {
            paddingLeft:"1rem"
        },
        "& > img" : {
            width: "10rem"
        }
    },
    dflexMedium: {
        display: "flex", 
        alignItems: "center", 
        fontSize: "1.1rem", 
        marginTop: "0.2rem",
        "& > span": {
            paddingLeft:"1rem"
        }
    },
    section2: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.firstTop}>
            <Box className={classes.topSection}>
                <Box className={classes.container}>
                    <Box className={classes.section1}>
                        <Box className={classes.item}>
                            <p className={classes.footerLogo}>Dependex.com</p>
                            <Box className={classes.pt1}>
                                <Box className={classes.socialIcon}>
                                    <img src={FaceBook} alt="" className={classes.socialImage}></img>
                                    <span>FaceBook</span>
                                </Box>
                                <Box className={classes.socialIcon}>
                                    <img src={Instagram} alt="" className={classes.socialImage}></img>
                                    <span>Instagram</span>
                                </Box>
                                <Box className={classes.socialIcon}>
                                    <img src={LinkdIn} alt="" className={classes.socialImage}></img>
                                    <span>LinkdIn</span>
                                </Box>
                                <Box className={classes.socialIcon}>
                                    <img src={Medium} alt="" className={classes.socialImage}></img>
                                    <span>Medium</span>
                                </Box>
                                <Box className={classes.socialIcon}>
                                    <img src={Twitter} alt="" className={classes.socialImage}></img>
                                    <span>Twitter</span>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.item}>
                            <span>Product</span>
                            <ul>
                                <li>Wallet</li>
                                <li>Exchange</li>
                                <li>Learn</li>
                                <li>Explorer</li>
                                <li>Markets</li>
                                <li>Prices</li>
                                <li>Charts</li>
                            </ul>
                        </Box>
                        <Box className={classes.item}>
                            <span>Resources</span>
                            <ul>
                                <li>Apis</li>
                                <li>Status</li>
                                <li>Open Source</li>
                                <li>Research</li>
                                <li>Privacy</li>
                                <li>Support</li>
                                <li>Blog</li>
                            </ul>
                        </Box>
                        <Box className={classes.item}>
                            <span>About</span>
                            <ul>
                                <li>Team</li>
                                <li>Careers</li>
                                <li>Press Center</li>
                                <li>Prime</li>
                                <li>Ventures</li>
                                <li>Institutional</li>
                            </ul>                            
                        </Box>
                    </Box>
                    <Box className={classes.section2}>
                        <Box>
                            <Box className={classes.dflexac}>
                                <Language />
                                <span>English</span>
                            </Box>
                            <Box className={classes.dflexMedium}>
                                <img src={Company} alt=""></img>
                                <span>Dependex.com  NMLS ID: 2024031</span>
                            </Box>
                        </Box>
                        <Box>
                            <Box className={classes.dflexac}>
                                <img src={FooterGoogle} alt=""></img>
                                <img src={FooterApple} alt=""></img>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
