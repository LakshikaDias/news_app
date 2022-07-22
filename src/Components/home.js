import React from "react";
import { Link } from "react-router-dom";
import newsList from "./newslist";

const Home = () => {
  return (
    <div>
      <div>News List.................</div>
      {newsList.map(function display(news) {
        return (
          <div>
            <ul>
              <li>
                <Link to={`news/${news.headline}`}>{news.headline}</Link>
                <p>{news.summary}</p>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <div>News List.................</div>
//       <div>
//         <ul>
//           <li>
//             <Link to="/news1">
//               McDonald’s Dodged Millions in Taxes with an IOU to Itself
//             </Link>
//           </li>
//           <li>
//             <Link to="/news2">
//               Donor-Advised Funds Take Advantage of Tax Loopholes
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;
