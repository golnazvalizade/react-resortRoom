import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

//get all uniqe values
const getUniqe = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
    handleChange
  } = context;

  //get uniqe type
  let types = getUniqe(rooms, "type");
  //add all
  types = ["all", ...types];
  //mapping to jsx
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  //get uniqe people
  let people = getUniqe(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guest  */}
        <div className="form-group">
          <label htmlFor="capacity">room type</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of guest  */}
        {/* room price  */}
        <div className="form-group">
          <label htmlFor="capacity">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            value={price}
            className="form-control"
          />
        </div>
        {/* end of room price  */}
        {/* room size  */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              id="size"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              id="size"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of room size  */}
        {/* room size  */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of room size  */}
      </form>
    </section>
  );
};

export default RoomFilter;
