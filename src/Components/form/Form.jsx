import "./Form.css";
import Form from "react-bootstrap/Form";

const HForm = () => {
  return (
      <div className="main-form">
        <Form className="">
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label className="mylabel">Full Name</Form.Label>
            <Form.Control
              className="theinput"
              type="text"
              placeholder="Your Name.."
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="mylabel">Email address</Form.Label>
            <Form.Control
              className="theinput"
              type="email"
              placeholder="Your E-mail.."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label className="mylabel">Subject</Form.Label>
            <Form.Control
              className="theinput"
              type="text"
              placeholder="Subject.."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMessage">
            <Form.Label className="mylabel">Message</Form.Label>
            <textarea
              type="text"
              rows={5}
              cols={15}
              placeholder="your message.."
            />
          </Form.Group>
           <div className="left">
           <button type="submit" id="form-submit" className="orange-button">
            Send Message
          </button>
           </div>
        </Form>
      </div>
  );
};

export default HForm;
