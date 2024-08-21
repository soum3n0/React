import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Using JSX 

// React Element
const heading = (<div id="parent" className="parent">
    <div id="child1" className="child">
        <h3>this is h1 from React Element</h3>
        <h3>this is h2 from React Element</h3>
    </div>
    <div id="child2" className="child">
        <h3>this is h1 from React Element</h3>
        <h3>this is h2 from React Element</h3>
    </div>
</div>);


// React component
// 1. Class Based component
// 2. React Functional component


// React Functional Component

// const Heading = () => {
//     return <h1 className="heading">Hey this is Functional Component h1 tag</h1>
// };

// const Heading = () => <h1 className="heading">Hey this is Functional Component h1 tag</h1>;

const Heading = () => (    
    <div>
        {/* {test}      Infinite loop */}
        <h1 className="heading">Hey this is Functional Component h1 tag</h1>       
    </div>    
);


// const test = (
//     <div>Hey
//         <Heading/>
//     </div>
// );

const SubHeading = () =>(
    <div id="container">
        {heading}
        <Heading/>
        {heading}
        <Heading></Heading>
        {Heading()}
        <h2>This is SubHeading</h2>
    </div>
);

root.render(<SubHeading/>);

// root.render(heading);
// root.render(<h1>Hey</h1>);