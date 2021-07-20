import React from "react";
import "./Form.css";

export default function Form(props) {
  const { onSubmit, onChange, formData } = props;
  return (
    <div className="formWrap">
      <form className="form">
        <h2>Add New Member</h2>
        <label htmlFor="name">
          Name:{" "}
          <input
            onChange={onChange}
            type="text"
            id="name"
            name="name"
            value={formData.name}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            onChange={onChange}
            type="text"
            id="email"
            name="email"
            value={formData.email}
          />
        </label>
        <label htmlFor="role">
          Role:
          <select
            onChange={onChange}
            id="roleSelect"
            name="role"
            value={formData.role}
          >
            <option value="0">--Select Role--</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Lab Technician">Lab Technician</option>
            <option value="Lunch Lady">Lunch Lady</option>
            <option value="Door Person">Door Person</option>
            <option value="CEO">CEO</option>
          </select>
        </label>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}
