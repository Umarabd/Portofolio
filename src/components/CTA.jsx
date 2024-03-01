import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link to="/contact" className="btn">
        Email Me
      </Link>
      <Link to="https://www.linkedin.com/in/umar-abdurrohman/" className="btn">
        LinkedIn
      </Link>
      <Link to="https://github.com/Umarabd" className="btn">
        GitHub
      </Link>
    </section>
  );
};

export default CTA;
