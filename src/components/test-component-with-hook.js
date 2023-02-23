import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const TestComponentWithHook = () => {
    const { site: { siteMetadata: { title } } } = useSiteMetadata()

    return (
        <p>The title of this site is {title}</p>
    )
}

export default TestComponentWithHook;