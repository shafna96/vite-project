import React from "react";
export const Label = ({ label }) => {
  return (
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
  );
};

const Input = ({ label, demo }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <Label label={label} />
      <input
        type="text"
        placeholder="Type here"
        className={`${demo} input input-bordered w-full max-w-xs`}
      />
    </div>
  );
};

export const Select = ({ label }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <Label label={label} />
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Who shot first?
        </option>
        {/* <option>Han Solo</option>
        <option>Greedo</option> */}
      </select>
    </div>
  );
};

export default function InputGroup({ double, label1, label2 }) {
  return (
    <div>
      {double ? (
        <div className="flex">
          <Input label={label1} />
          <Input label={label2} />
        </div>
      ) : (
        <Input label={label1} demo={"demo"} />
      )}
    </div>
  );
}
