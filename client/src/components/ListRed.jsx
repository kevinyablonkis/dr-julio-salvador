import { IoIosCloseCircle } from "react-icons/io";

function ListRed({content}) {
  return (
    <>
      <IoIosCloseCircle color="rgb(187, 18, 18)" size={"17px"} />
      <li>{content}</li>
    </>
  );
}

export default ListRed;
