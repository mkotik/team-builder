import React from "react";
import "./MemberCard.css";

export default function MemberCard(props) {
  const { members } = props;
  const openCard = function (e) {
    e.target.closest(".memberCard").classList.toggle("open");
  };

  return (
    <div className="memberCards">
      {members.map((member) => (
        <div onClick={openCard} className="memberCard">
          <div className="top">
            <h2 className="memberName">{member.name}</h2>
            <h2>-</h2>
            <h2 className="memberRole">{member.role}</h2>
          </div>
          <div className="bottom">
            <h2 className="memberEmail">{member.email}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
