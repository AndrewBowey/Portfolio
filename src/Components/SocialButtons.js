import { Button } from "react-bootstrap";
function SocialButtons() {
  return (
    <>
      <Button
        size="lg"
        target="_blank"
        href="mailto:chimiquecoder@gmail.com"
        variant="outline-secondary"
      >
        Email
      </Button>{" "}
      <Button
        size="lg"
        target="_blank"
        href="https://www.linkedin.com/in/andrew-bowey-a42934230/"
        variant="outline-info"
      >
        LinkedIn
      </Button>{" "}
    </>
  );
}

export default SocialButtons;
