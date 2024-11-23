import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithModule() {
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "NodeJS"
      });
    const Module_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-module">
      <h3>Working With Module</h3>
      <a id="wd-update-module-description"
         className="btn btn-primary float-end"
         href={`${Module_API_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <input className="form-control w-75" id="wd-module-description"
        value={module.description} onChange={(e) =>
          setModule({ ...module, description: e.target.value })}/>
      <hr />
      <h4>Retrieving Module</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
      <a id="wd-retrieve-module-course" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/course`}>
        Get Course
      </a><hr/>
    </div>
);}