import React from "react";

{/*1*/}
function Plan(props) {
  return (
    <>
      <li className="ll shadow my-1 col-sm-9 p-2 ">{props.value}</li>
      <button className="btn btn-danger row my-2 col-sm-2 offset-1"onClick={()=>props.sendData(props.id)}>X</button>
    </>
  )
}

{/*2*/}
// function Plan(props) {
//   const arr = props.p
//   return (
//     <>
//       {
//         arr.map((value, id) => {
//           return (< >
//               <li className="ll shadow my-1 col-sm-9 p-2 ">{value}</li>
//               <button className="btn btn-danger row my-2 col-sm-2 offset-1" onClick={() => props.sendData(id)}>X</button>
//             </>
//           )
//         })
//       }
//     </>
//   )
// }

export default Plan;