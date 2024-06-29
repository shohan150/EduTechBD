import Routine from "../../MultipleSharedComponents/Routine";
import SelectClass from "../../MultipleSharedComponents/SelectClass";

import "../../assets/css/class_routine.css";

const TeachersRoutine = () => {
  const teachers = ["Teachers A", "Teachers B", "Teachers A", "Teachers B"];
  return (
    <>
      <SelectClass title="Teachers" items={teachers} />
      <Routine title="Teachers"/>
    </>
  );
};

export default TeachersRoutine;
