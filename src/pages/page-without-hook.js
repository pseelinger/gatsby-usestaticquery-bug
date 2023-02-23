import React from "react";
import ComponentList from "../components/ComponentList";

const components = [
    'test-component'
];

const PageWithoutHook = () => <ComponentList {...{ components }} />

export default PageWithoutHook;