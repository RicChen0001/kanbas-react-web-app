import Modules from "../Modules";
import CourseStatus from "./Status";
// export default function Home() {
//   return (
//     <div className="d-flex" id="wd-home">
//       <div className="flex-fill">
//         <Modules />
//       </div>
//       <div className="d-none d-md-block">
//         <CourseStatus />
//       </div>
//     </div>

//   );
// }

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row" id="wd-home">
        <div className="col-md-9">
          <Modules />
        </div>

        <div className="col-md-3 d-none d-md-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
