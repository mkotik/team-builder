import React, { useState } from "react";
import "./MemberCard.css";

export default function MemberCard(props) {
  const { members, edit } = props;
  // const [isOpen, setIsOpen] = useState(false);
  const [topLoaded, setTopLoaded] = useState(false);
  const openCard = function (e) {
    e.target.closest(".memberCard").classList.toggle("open");
  };

  return (
    <div className="memberCards">
      {members.map((member, i) => (
        <div key={i} class="wrap">
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
          <div data-key={i} onClick={edit} className="edit">
            Edit
          </div>
        </div>
      ))}
    </div>
  );
}
