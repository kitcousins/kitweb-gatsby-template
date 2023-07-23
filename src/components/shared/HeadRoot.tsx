import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react'

const HeadRoot: React.FC<{
    title?: string;
    description?: string;
    thumbnail?: string;
    type?: "WebSite" | "Article";
    children?: any;
}> = ({ title, description, thumbnail, type, children }) => {

    const { site: { siteMetadata: { _title, _description, siteUrl } } } = useStaticQuery<{
        site: {
            siteMetadata: {
                _title: string;
                _description: string;
                siteUrl: string;
            }
        }
    }>(graphql`
        query GetSiteMetadata {
            site {
                siteMetadata {
                    _title: title
                    _description: description
                    siteUrl
                }
            }
        }
    `)

    const finalTitle = title ? `${title} | ${_title}` : _title
    const finalDescription = description ?? _description

    return (
        <>
            <html lang='en' data-theme='light' />

            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />

            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            {thumbnail && <meta property="og:image" content={thumbnail} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={siteUrl} />
            <meta property="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            {thumbnail && <meta name="twitter:image" content={thumbnail} />}

            {children}
        </>
    )
}

export default HeadRoot