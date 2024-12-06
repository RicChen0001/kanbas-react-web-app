// import { FaPlus, FaMagnifyingGlass } from "react-icons/fa6";
// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function AssignmentControls() {
//   const navigate = useNavigate();
//   const { cid } = useParams();

//   const handleAddAssignment = () => {
//     navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`);
//   };

//   const containerStyle: React.CSSProperties = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%', // Make the container take full width
//   };

//   const leftContainerStyle: React.CSSProperties = {
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const rightContainerStyle: React.CSSProperties = {
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const inputContainerStyle: React.CSSProperties = {
//     position: 'relative',
//     display: 'inline-block',
//     verticalAlign: 'middle',
//   };

//   const iconStyle: React.CSSProperties = {
//     position: 'absolute',
//     left: '10px',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     pointerEvents: 'none',
//     color: '#aaa',
//   };

//   const inputStyle: React.CSSProperties = {
//     paddingLeft: '30px', // Adjust padding to make space for the icon
//     height: 'calc(1.5em + 1.25rem + 2px)', // Matches the height of .btn-lg
//     fontSize: '1.25rem', // Matches the font-size of .btn-lg
//     borderRadius: '.3rem', // Matches the border-radius of .btn-lg
//     width: '400px', // Adjust the width as needed
//   };

//   return (
//     <div id="wd-modules-controls" className="text-nowrap" style={containerStyle}>
//       <div style={leftContainerStyle}>
//         <div style={inputContainerStyle}>
//           <FaMagnifyingGlass style={iconStyle} />
//           <input
//             type="text"
//             style={inputStyle}
//             className="form-control"
//             placeholder="Search..."
//           />
//         </div>
//       </div>
//       <div style={rightContainerStyle}>
//         <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1">
//           <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//           Group
//         </button>
//         <button
//           id="wd-add-assignment-btn"
//           className="btn btn-lg btn-danger me-1"
//           onClick={handleAddAssignment}
//         >
//           <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//           Assignment
//         </button>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function AssignmentsControls() {
  const [isGroupOpen, setIsGroupOpen] = React.useState(false);
  const [isAssignmentOpen, setIsAssignmentOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleAdd = (type: 'group' | 'assignment') => {
    console.log(`Adding new ${type}:`, name);
    setName("");
    if (type === 'group') {
      setIsGroupOpen(false);
    } else {
      setIsAssignmentOpen(false);
    }
  };

  const AddDialog = ({ 
    isOpen, 
    title, 
    type 
  }: { 
    isOpen: boolean; 
    title: string; 
    type: 'group' | 'assignment' 
  }) => (
    <div 
      className={`modal fade ${isOpen ? 'show' : ''}`} 
      style={{ display: isOpen ? 'block' : 'none' }}
      data-bs-backdrop="static" 
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => type === 'group' ? setIsGroupOpen(false) : setIsAssignmentOpen(false)}
            />
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={`${type.charAt(0).toUpperCase() + type.slice(1)} Name`}
            />
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => type === 'group' ? setIsGroupOpen(false) : setIsAssignmentOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleAdd(type)}
            >
              Add {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="float-end">
      <button 
        className="btn btn-light me-2"
        onClick={() => setIsGroupOpen(true)}
      >
        <FaPlus /> Group
      </button>
      
      <button 
        className="btn btn-danger"
        onClick={() => setIsAssignmentOpen(true)}
      >
        <FaPlus /> Assignment
      </button>

      <AddDialog
        isOpen={isGroupOpen}
        title="Add New Group"
        type="group"
      />
      
      <AddDialog
        isOpen={isAssignmentOpen}
        title="Add New Assignment"
        type="assignment"
      />
    </div>
  );
}