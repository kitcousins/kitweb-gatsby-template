import * as React from 'react'
import Header from './Header';
import Footer from './Footer';

const PageRoot: React.FC<{ className?: string; children: any; }> = ({ className, children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className={`
                flex-1
                flex flex-col
                ${className}
            `}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageRoot