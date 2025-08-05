
// <div id="parent">
//     <div id="child">
//         <h1>I'm mahi</h1>
//     </div>
// </div>


const parent = React.createElement("div",{ id: "parent" },[
    React.createElement(
        "div",
        { id: "child1" },
        [ React.createElement("h1",{},"I'm mahi1"),React.createElement("h2",{},"I'm mahi2") ]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [ React.createElement("h1",{},"I'm mahi3"),React.createElement("h2",{},"I'm mahi4") ]
    )]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);