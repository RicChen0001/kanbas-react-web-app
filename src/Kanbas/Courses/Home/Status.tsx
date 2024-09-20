export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 style={{ textAlign: "center" }}>Course Status</h2>
      
      {/* Unpublish and Publish buttons */}
      <div style={{ textAlign: "center" }}>
        <button>Unpublish</button>
        <button>Publish</button>
      </div>

      {/* Action buttons below */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>
          <button>Import Existing Content</button>
          <br />
          <button>Import from Commons</button>
          <br />
          <button>Choose Home Page</button>
          <br />
          <button>View Course Stream</button>
          <br />
          <button>New Announcement</button>
          <br />
          <button>New Analytics</button>
          <br />
          <button>View Course Notifications</button>
        </p>
      </div>
    </div>
  );
}
