import * as React from 'react'
import { Link, type HeadFC, type PageProps } from 'gatsby'
import { HeadRoot, PageRoot } from '../components/shared'

const NotFound: React.FC<PageProps> = ({}) => {
  return (
    <PageRoot className='justify-center items-center gap-10'>
      <h1 className='text-3xl font-bold'>Page not found.</h1>
      <Link to='/' className='btn btn-primary w-full max-w-xs'>Home</Link>
    </PageRoot>
  )
}

export default NotFound

export const Head: HeadFC = () => (
  <HeadRoot
    title='Page not found'
  />
)