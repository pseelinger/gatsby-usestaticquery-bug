import React from "react";
import ComponentList from "../components/ComponentList";

const components = [
    'test-component-with-hook'
];

const PageWithHook = () => <ComponentList {...{ components }} />

export default PageWithHook;