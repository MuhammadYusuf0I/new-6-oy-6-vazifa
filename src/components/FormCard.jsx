import React from "react";
import { brands } from "../constanta";
import { collors } from "../constanta";

function FormCard() {
  function handleSubmit(e) {
    e.preventDefault();
    const result = new FormData(e.target);
    console.log(result.get("brand"), result.get("name"), result.get("collor"));
  }

  return (
    <div className="base-container bg-slate-300 h-full flex justify-center ">
      <form onSubmit={handleSubmit} className="w-full max-w-96 mt-5 h-96 ">
        <h2 className="font-semibold text-2xl mb-5">Mashina qo'shish</h2>

        <div className="flex gap-5 flex-col">
          <input
            name="name"
            type="text"
            placeholder="Mashina nomi"
            className="input input-bordered w-full "
          />
          <select
            defaultValue="Mashina brandi*"
            name="brand"
            className="select select-bordered w-full "
          >
            <option disabled>Mashina brandi*</option>
            {brands.map((brand) => {
              return (
                <option value={brand} key={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
          <select
            defaultValue="Mashina rangi*"
            name="collor"
            className="select select-bordered w-full "
          >
            <option disabled>Mashina rangi*</option>
            {collors.map((collor) => {
              return (
                <option value={collor} key={collor}>
                  {collor}
                </option>
              );
            })}
          </select>
          <button className="btn btn-primary" type="submit">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCard;
