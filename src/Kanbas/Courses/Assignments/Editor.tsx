export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      {/* Assignment Description */}
      <textarea id="wd-description">
      The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
        The landingg page should include the following: Your full name and section Links to
        each of the lab assignments Link to the Kanbas application
        Links to all relevant source code repositories. The Kanbas application should include a
        link to navigate back to the landing page.
      </textarea><br /><br />

      {/* Points */}
      <label htmlFor="wd-points">Points</label><br />
      <input id="wd-points" value={100} /><br /><br />

      {/* Assignment Group */}
      <label htmlFor="wd-group">Assignment Group</label><br />
      <select id="wd-group">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECTS">PROJECTS</option>
      </select><br /><br />

      {/* Display Grade As */}
      <label htmlFor="wd-display-grade-as">Display Grade as</label><br />
      <select id="wd-display-grade-as">
        <option value="Percentage">Percentage</option>
        <option value="Points">Points</option>
        <option value="Complete/Incomplete">Complete/Incomplete</option>
      </select><br /><br />

      {/* Submission Type */}
      <label htmlFor="wd-submission-type">Submission Type</label><br />
      <select id="wd-submission-type">
        <option value="Online">Online</option>
        <option value="In Person">In Person</option>
      </select><br /><br />

      {/* Online Entry Options */}
      <label>Online Entry Options</label><br />
      <input type="checkbox" id="wd-text-entry" />
      <label htmlFor="wd-text-entry">Text Entry</label><br />
      <input type="checkbox" id="wd-website-url" />
      <label htmlFor="wd-website-url">Website URL</label><br />
      <input type="checkbox" id="wd-media-recordings" />
      <label htmlFor="wd-media-recordings">Media Recordings</label><br />
      <input type="checkbox" id="wd-student-annotation" />
      <label htmlFor="wd-student-annotation">Student Annotation</label><br />
      <input type="checkbox" id="wd-file-upload" />
      <label htmlFor="wd-file-upload">File Upload</label><br /><br />

      {/* Assign To */}
      <label htmlFor="wd-assign-to">Assign to</label><br />
      <input type="text" id="wd-assign-to" value="Everyone" /><br /><br />

      {/* Due Date */}
      <label htmlFor="wd-due-date">Due</label><br />
      <input type="date" id="wd-due-date" defaultValue="2024-05-31" /><br /><br />

      {/* Availability */}
      <label htmlFor="wd-available-from">Available from</label>
      <input type="date" id="wd-available-from" defaultValue="2024-05-06" /><br /><br />
      <label htmlFor="wd-available-until">Until</label>
      <input type="date" id="wd-available-until" defaultValue="2024-05-20" /><br /><br />

      {/* Save and Cancel */}
      <button id="wd-cancel" type="button">Cancel</button>
      <button id="wd-save" type="button">Save</button>
    </div>
  );
}
