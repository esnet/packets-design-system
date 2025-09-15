// import React from "react";
// import { render } from "@testing-library/react";
// import ESListTreeView from "../ESListTreeView";

// test("It renders without crashing", () => {
//   const component = render(
//     <ESListTreeView content={<span>Title</span>} isSelected={true}>
//       <ESListTreeView.ESListTreeLeafView isSelected={false}>
//         <span>Hello World</span>
//       </ESListTreeView.ESListTreeLeafView>
//       <ESListTreeView.ESListTreeLeafView isSelected={true}>
//         <span>Hello World</span>
//       </ESListTreeView.ESListTreeLeafView>
//       <ESListTreeView.ESListTreeLeafView isSelected={false}>
//         <span>Hello World</span>
//       </ESListTreeView.ESListTreeLeafView>
//     </ESListTreeView>,
//   );
//   expect(component).toBeTruthy();
// });

// it("ESListTreeView matches DOM Snapshot", () => {
//   const domTree = render(
//     <ESListTreeView content={<span>Title</span>} isSelected={true}>
//       <ESListTreeView.ESListTreeLeafView isSelected={false}>
//         <span>Hello World</span>
//       </ESListTreeView.ESListTreeLeafView>
//     </ESListTreeView>,
//   );
//   expect(domTree).toMatchSnapshot();
// });

// it("ESListTreeView that is not selected matches DOM Snapshot", () => {
//   const domTree = render(
//     <ESListTreeView content={<span>Title</span>} isSelected={false}>
//       <ESListTreeView.ESListTreeLeafView isSelected={false}>
//         <span>Hello World</span>
//       </ESListTreeView.ESListTreeLeafView>
//     </ESListTreeView>,
//   );

//   expect(domTree).toMatchSnapshot();
// });

// it("ESListTreeView that is not initially open matches DOM Snapshot", () => {
//   const domTree = render(
//     <ESListTreeView content={<span>Title</span>} initiallyOpen={false}>
//       <ESListTreeView.ESListTreeLeafView isSelected={false}>
//         <span>Hello World</span>
//       </ESListTreeView.ESListTreeLeafView>
//     </ESListTreeView>,
//   );

//   expect(domTree).toMatchSnapshot();
// });
