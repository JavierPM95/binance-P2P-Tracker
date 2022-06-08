import React from 'react'

// Styles
import './Footer.css'

// Material UI
import { Typography } from '@material-ui/core'

const Footer = () => {



    return (
        <>
            <div className='containerFooter'>
                <Typography variant="h5" color="textPrimary" className='footerMainText'>
                    Hola soy el Footer
                </Typography>
            </div>
        </>
    )
}

export default Footer
