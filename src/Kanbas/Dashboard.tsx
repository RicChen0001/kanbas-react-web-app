import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="/reactjs.jpg" width={200} alt="React JS logo" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer.</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5001/Home">
            <img src="/book.jpg" width={200} alt="book logo" />
            <div>
              <h5>CS5001 Calculus</h5>
              <p className="wd-dashboard-course-title">Basic math for CS.</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
          <img src="/book.jpg" width={200} alt="book logo" />            <div>
              <h5>CS5678 Data Structures</h5>
              <p className="wd-dashboard-course-title">Essential data structures for programming.</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
          <img src="/book.jpg" width={200} alt="book logo" />            <div>
              <h5>CS6789 Algorithms</h5>
              <p className="wd-dashboard-course-title">Mastering algorithms for efficient problem solving.</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
