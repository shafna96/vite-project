import React from "react";
import brandOptions from "../constants/dummyData";
import { InputGroup, Input, Select, SelectGroup } from "./InputGroup";

export default function ItemForm() {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Add Item</h2>
        <InputGroup label1={"Id"} label2={"Name"} />
        {/* <Input label={"Category"} /> */}
        <Select label={"Brand"} data={brandOptions} />
        <SelectGroup
          label1={"Category"}
          data1={brandOptions}
          label2={"Size"}
          data2={brandOptions}
        />
      </div>
    </div>
  );
}
