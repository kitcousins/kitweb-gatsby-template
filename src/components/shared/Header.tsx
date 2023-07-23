import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Header: React.FC<{}> = ({}) => {
    return (
        <header className='flex justify-center w-screen fixed top-0 left-0 bg-base-100 animate-fade-down z-40'>
            <nav className='flex justify-between items-center h-16 lg:h-20 w-full max-w-[1600px] px-3'>
                <Link to='/'>
                    <StaticImage
                        src='../../images/icon.png'
                        alt='Logo'
                        className='w-10 lg:w-12'
                    />
                </Link>
                <Link to='/' className='btn btn-primary btn-sm'>Call to Action</Link>
            </nav>
        </header>
    )
}

export default Header