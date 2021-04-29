import React from 'react';
import Box from '@material-ui/core/Box';
import Media from "react-media";
import Desktop from "./navComponent/desktop"
import Mobile from "./navComponent/mobile"

export default function Header() {

    return (
        <Box className="position-fixed w-100 z-index-999" style={{background: '#061121'}}>
			<Media
				queries={{Mobile : "(max-width: 768px)", Tablet : "(min-width: 769px)"}}>
				{matches => (
					<>
						{matches.Tablet && 
                            <Desktop />
						}
						{matches.Mobile && 
                            <Mobile />
						}
					</>
				)}
			</Media>
        </Box>
    );
}
