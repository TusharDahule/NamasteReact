// import React from "react";
import ReactDOM from "react-dom/client";

// const h1 = React.createElement('h1', {}, 'Hello Tushar');
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello Tushar (From Heading React Element)
  </h1>
);

// React Component & Component Composition
const HeadingComponent = () => {
    return (
        <div>
            <h2>From Heading Component</h2>
            {jsxHeading}
            <HeadingComponent2 />
        </div>
    )
}

const HeadingComponent2 = () => (
    <h3>From Heading Component 2</h3>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);// This will take only React Element
