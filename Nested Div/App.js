const root = ReactDOM.createRoot(document.getElementById("root"));

{/* <div id="parent">
    <div id="child1">
        <h1>Hello I'm h1 tag</h1>
        <h2>Hello I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>Hello I'm h1 tag</h1>
        <h2>Hello I'm h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div", {id : "parent"}, 
    [React.createElement("div", {id : "child1"}, 
    [
        React.createElement("h1", {}, "Hello I'm h1 tag"),
        React.createElement("h2", {}, "Hello I'm h2 tag")
    ]),
    React.createElement("div", {id : "child2"},
    [
        React.createElement("h1", {}, "Hello I'm h1 tag"),
        React.createElement("h2", {}, "Hello I'm h2 tag")
    ])
]);

root.render(parent);