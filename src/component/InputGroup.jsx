import React from "react";
export const Label = ({ label }) => {
  return (
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
  );
};

export const Input = ({ label, demo }) => {
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

export const Select = ({ label, data, demo }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <Label label={label} />
      <select className={`${demo} select select-bordered w-full max-w-xs`}>
        {data.map((opt) => (
          <option key={opt.id}>{opt.option}</option>
        ))}
        {/* <option disabled selected>
          Who shot first?
        </option> */}
        {/* <option>Han Solo</option>
        <option>Greedo</option> */}
      </select>
    </div>
  );
};

export const InputGroup = ({ label1, label2 }) => {
  return (
    <>
      <div className="lg:flex">
        <Input label={label1} demo={"demo"} />
        <Input label={label2} />
      </div>
      <div className="lg:hidden">
        <Input label={label1} demo={"demo"} />
        <Input label={label2} />
      </div>
    </>
  );
};

export const SelectGroup = ({ label1, label2, data1, data2 }) => {
  return (
    <div className="flex">
      <Select label={label1} data={data1} demo={"demo"} />
      <Select label={label2} data={data2} />
    </div>
  );
};
