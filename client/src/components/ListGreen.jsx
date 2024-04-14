import { FaCheckCircle } from "react-icons/fa";

function ListGreen({content}) {
  return (
    <>
      <FaCheckCircle color="green" size={"17px"} />
      <li>{content}</li>
    </>
  );
}

export default ListGreen;
