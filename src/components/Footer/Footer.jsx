import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import Container from "../container/Container";
import Button from "../Button/Button";
function Footer() {
  const footerItems = [
    {
      footerSupportItems: [
        { name: "Contact Us" },
        { name: "FAQ" },
        { name: "Downloads" },
        { name: "Stories" },
        { name: "Events" },
        { name: "Privacy Policy" },
        { name: "Guildelines" }
      ],
      footerAboutItems: [
        { name: "About Us" },
        { name: "Thrive Design" },
        { name: "Careers" },
        { name: "News Room" },
        { name: "Thrive Access" }
      ],
      footerSocialConnects: [
        {
          name: "X",
          logo: "https://seeklogo.com/images/T/twitter-new-logo-8A0C4E0C58-seeklogo.com.png?v=638258088440000000"
        },
        {
          name: "GitHub",
          logo: "https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"
        }
      ]
    }
  ];

  return (
    <div className="footer">
      <Container className="footerContainer">
        <div className="thriveSocialConnects">
          <span className="footerLogo">THRIVE</span>
          <ul className="thriveSocialConnectsItems">
            {footerItems[0].footerSocialConnects.map((item) => (
              <li className="thriveSocialConnectsItem">
                <img
                  className="thriveSocialConnectsItemILogo"
                  src={item.logo}
                  alt={item.name}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="footerSupportSection">
          <ul className="footerSupportItems">
            <h4 className="footerSectionHeading">Supports</h4>
            {footerItems[0].footerSupportItems.map((item) => (
              <li className="footerSupportItem">{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="footerAboutSection">
          <ul className="footerAboutItems">
            <h2 className="footerSectionHeading">Thrive</h2>
            {footerItems[0].footerAboutItems.map((item) => (
              <li className="footerAboutItem">{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="footerContactSection">
          <div className="footerCheckBox">
            <input type="checkbox" className="footerCheckboxInput" />
            <p className="footerCheckBoxText">
              Stay up to date on the latest from Thrive
            </p>
          </div>
          <div className="footerFormInputContainer">
            <Input
              type="text"
              placeholder="Enter your e-mail address"
              className="footerInput"
            />
            <Button name="Sign Up" className="footerButton" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
