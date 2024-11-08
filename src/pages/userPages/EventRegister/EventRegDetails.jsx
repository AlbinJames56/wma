import React, { useState } from "react"; 
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import EventRegForm from "../../../components/userComponents/EventRegistration/EventRegForm";
import Cart from "../../../components/userComponents/EventRegistration/Cart";
import EventRegThank from "../../../components/userComponents/EventRegistration/EventRegThank";
import RazorPay from "../../../components/userComponents/EventRegistration/RazorPay";

function EventRegDetails({ event, registrationData, setBackPage }) {
    const [checkOut, setCheckOut] = useState(false);
  const [thank, setThank] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  return (
    <>
      {thank && (
        <Container className="tq1">
          <EventRegThank error={error} />
        </Container>
      )}
      {!thank && (
        <Container className="registerPage" style={checkOut ? { display: 'flex', flexDirection: 'column' } : {}}>
          <Row>
            <Col md={8} className="cart">
              <Card className="mb-3">
                <Card.Body>
                  <Cart event={event} registrationData={registrationData} />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="register_page">
              <Card className="mb-3">
                <Card.Body>
                  {!checkOut && (
                    <>
                      <h3 className="reg_title">Registration Details</h3>
                      <div className="register_form_container">
                        <div className="register_form">
                          <EventRegForm
                            event={event}
                            setCheckOut={setCheckOut}
                            setBackPage={setBackPage}
                            registrationData={registrationData}
                            setData={setData}
                            setThank={setThank}
                            setError={setError}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {checkOut && !thank && (
                    <div className="register_title">
                      <h1>Checkout</h1>
                      <span>How would you like to pay?</span>
                      <div className="pay_methods mt-3">
                        <RazorPay setThank={setThank} regData={data} setError={setError} />
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default EventRegDetails