import React, {lazy, Suspense} from "react";

const Component = ({ name }) => {
    const TheComponent = lazy(() => import(`./${name}`));

    return TheComponent ? (
        <Suspense fallback={<div>Error loading component</div>}>
            <TheComponent />
        </Suspense>
    ) : <div>{name}</div>
}

const ComponentList = ({ components }) => (
    components.map(name => <Component {...{ name }} />)
)

export default ComponentList;