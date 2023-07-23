import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {

    const { createPage } = actions

    const { data }: {
        data?: {
            site: {
                siteMetadata: {
                    title: string;
                }
            }
        };
        errors?: any;
    } = await graphql(`
        query GetDataForBuild {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    console.log(data?.site.siteMetadata.title);
}