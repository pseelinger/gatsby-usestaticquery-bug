import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

const TestComponent = () => {
    const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
        query DataQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <p>The title of this site is {title}</p>
    )
}

export default TestComponent;