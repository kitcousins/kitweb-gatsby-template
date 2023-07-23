import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as React from 'react'

const Footer: React.FC<{}> = ({}) => {
    return (
        <footer className='flex lg:flex-row flex-col gap-1 p-2 text-xs justify-center lg:justify-between items-center'>
            <p>&copy; Copyright 2023; KitWeb Consulting. All Rights Reserved.</p>
            <p>Built by <OutboundLink target='_blank' href='https://kitweb.dev/' className='link'>KitWeb Consulting</OutboundLink></p>
        </footer>
    )
}

export default Footer