import React from 'react';
import { FaCheckCircle, FaEllipsisV, FaRegFileAlt, FaTrash } from 'react-icons/fa';
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from './AssignmentsControls';
import AssignmentSearchControls from './SearchControls';
import TitleControlButtons from './TitleControlButtons';
import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignment } from './reducer'; 
import { useNavigate } from 'react-router-dom';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { MdOutlineAssignment } from 'react-icons/md';
import { GoTriangleDown } from "react-icons/go";
import { RootState } from '../../../Kanbas/store';


export default function Assignments() {

    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);
    

    const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

    const handleDelete = (assignmentId: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmed) {
            dispatch(deleteAssignment(assignmentId));
        }
    };

    const handleAddAssignment = () => {
        // navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
        console.log('Attempting to navigate to:', `/Kanbas/Courses/${cid}/Assignments/Editor`);
        navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`);
    };

    const handleEditAssignment = (assignmentId: string) => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/Editor/${assignmentId}`);
    };

    return (
        <div id="wd-search-assignment">
            <AssignmentsControls />
            <br /><br /><br /><br />
            <ul id="wd-assignment" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <GoTriangleDown className="me-2 fs-3" />
                        ASSIGNMENTS 40% of total
                        <AssignmentSearchControls/>
                        {/* <button 
                            className="btn btn-danger float-end" 
                            onClick={handleAddAssignment}
                        >
                            + Assignment
                        </button> */}
                    </div>
                    <div>
                        {courseAssignments.map((assignment: any) => (
                            <ul key={assignment._id} className={`wd-assignment list-group rounded-0`}>
                                <li className={`wd-assignment list-group-item p-3 ps-1 d-flex align-items-start`}>
                                    <div className="me-2 d-flex flex-column align-items-center">
                                        <BsGripVertical className="fs-3" />
                                    </div>
                                    <div className="me-2 d-flex flex-column align-items-center">
                                        <MdOutlineAssignment className="fs-3" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex align-items-center">
                                            <Link
                                                className="wd-assignment-link"
                                                onClick={() => handleEditAssignment(assignment._id)}
                                                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                <span className="fw-bold">{assignment.title}</span>
                                            </Link>
                                        </div>
                                        <div className="wd-content-item mt-2">
                                            <span style={{ color: '#8B0000' }}>Multiple Modules</span> | <b>Not available until</b> {assignment.availableFrom} |
                                            <b> Due</b> {assignment.dueDate} | {assignment.points}pts
                                        </div>
                                    </div>
                                    <div className="float-end">
                                        <FaTrash className="text-danger me-2 mb-1" onClick={() => handleDelete(assignment._id)} />
                                        <LessonControlButtons />
                                    </div>
                                </li>
                            </ul>
                        ))}
                    </div>
                </li>
            </ul>
        </div>
    );
}