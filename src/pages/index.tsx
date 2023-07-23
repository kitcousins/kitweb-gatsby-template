import * as React from 'react'
import { graphql, type HeadFC, type PageProps } from 'gatsby'
import { HeadRoot, PageRoot } from '../components/shared'

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"

const Index: React.FC<PageProps> = ({ data }) => {
    return (
        <PageRoot>
            <div className='flex-1 p-3 flex flex-col justify-center items-center gap-3 animate-fade-up text-center'>
                <h1 className='text-4xl lg:text-5xl font-semibold font-serif italic'>KitWeb Consulting</h1>
                <p>GatsbyJS + TailwindCSS starter template.</p>

                <ChevronDoubleDownIcon width={30} className='mt-10 animate-bounce' />
            </div>
        </PageRoot>
    )
}

export default Index

export const Head: HeadFC = () => (
    <HeadRoot />
)

// Use query below to register GQL fragments, in addition to Index page queries.
// export const Query = graphql`
// `