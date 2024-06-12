import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-white-900" />
        </label>
      </div>
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-white-900" />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox


//Starter code for gender component
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="label-text">Male</span>
//           <input type="checkbox" className="checkbox border-white-900" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="label-text">Female</span>
//           <input type="checkbox" className="checkbox border-white-900" />
//         </label>
//       </div>
//     </div>
//   );
// }

// export default GenderCheckbox