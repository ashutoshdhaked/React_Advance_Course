import { useState, useTransition } from "react";
import Cover from "./component/cover";
import Reviews from "./component/reviews";
import Writer from "./component/writer";
import { StyledButton } from "./component/styled-elements";

function App() {
  const [section, setSection] = useState("Cover");

  const sectionHandler = (sec) => {
    setSection(sec);
  };
  return (
    <>
      <Button onClick={() => sectionHandler("Cover")}>Cover</Button>
      <Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
      <Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>

      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
}

const Button = ({ onClick, ...props }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <StyledButton
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
      {...props}
    />
  );
};

export default App;
