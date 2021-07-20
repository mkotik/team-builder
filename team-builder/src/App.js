import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import MemberCard from "./MemberCard.js";
import Form from "./Form.js";

const initialMembers = [
  {
    name: "Marat Kotik",
    email: "mkotik97@gmail.com",
    role: "Frontend Engineer",
  },
  {
    name: "Brian Cranston",
    email: "bcranston@gmail.com",
    role: "Lab Technician",
  },
];

const initialFormData = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState(initialMembers);
  const [formData, setFormData] = useState(initialFormData);

  const onChange = function (e) {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) return;
    setTeamMembers([...teamMembers, formData]);
    setFormData(initialFormData);
  };

  return (
    <div className="App">
      <Form onSubmit={onSubmit} onChange={onChange} formData={formData} />
      <MemberCard members={teamMembers} />
    </div>
  );
}

export default App;