import {graphql, useStaticQuery} from "gatsby";

const useSiteMetadata = () => {
    const data =  useStaticQuery(graphql`
        query MetaQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return data;
}

export default useSiteMetadata;