import React from "react";
import InputGroup, { Label, Select } from "./InputGroup";

export default function ItemForm() {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Add Item</h2>
        <InputGroup double label1={"Id"} label2={"Name"} />
        <InputGroup label1={"Category"} />
        <Select label={"Brand"} />
      </div>
    </div>
  );
}
