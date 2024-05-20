import Routine from "../../MultipleSharedComponents/Routine";
import SelectClass from "../../MultipleSharedComponents/SelectClass";

import "../../assets/css/class_routine.css";

const ClassRoutine = () => {
  const classes = ["Nursery A", "Nursery B", "One A", "One B"];
  return (
    <>
      <SelectClass title="Class" items={classes} />
      <Routine title="Class"/>
    </>
  );
};

export default ClassRoutine;
