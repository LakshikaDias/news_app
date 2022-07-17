import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import News from "../news";

const NewsList = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            McDonald’s Dodged Millions in Taxes with an IOU to Itself
            <Button>See more</Button>
          </Col>
          <Col>
            Donor-Advised Funds Take Advantage of Tax Loopholes
            <Button>See more</Button>
          </Col>
          <Col>
            Book Donation Bans in US Prisons Restrict Prisoners’ Rights,
            Generate Corporate Profits
            <Button>See more</Button>
          </Col>
          <Col>
            St. Jude Hoards Billions While Running Misleading Advertising about
            Financial Support for Its Patients
            <Button>See more</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsList;
