import { authMiddleware } from "../middleware/authMiddleware";
import Form from "../components/Form";

function Contact() {
  // const user = authMiddleware();

  return (
    <div className="max-w-screen-xl mx-auto ">
      <h1 className="hover:text-blue">The Contact Page</h1>
      <Form />
    </div>
  );
}

export default Contact;
