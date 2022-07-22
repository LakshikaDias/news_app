import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import newsList from "./newslist";

const Home = () => {
  return (
    <div>
      <div>News List.................</div>
      <div>
        {newsList.map(function display(news) {
          return (
            <Card style={{ width: "60rem" }} className="mb-2" bg="light">
              <Card.Header>{news.headline}</Card.Header>
              <Card.Body>
                <Card.Text>{news.summary}</Card.Text>
                <Link to={`news/${news.headline}`}>
                  <Button>See more...</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
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
