import React from "react";
import { ReactComponent as DiscussionIcon } from "../public/icons/discussion.svg";
import { useWindowWidth } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";
import toto from "../_paramsExport.scss";
import styles from "./ContactButton.module.scss";

const ContactButton = () => {
  const isMobile = useWindowWidth() < 768;

  //console.log({ breakpoint_M_minWidth });
  console.log({ toto });

  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/contact");
  };

  // TODO
  // -> hide when scroll down + no more intersect?
  // -> show when scroll up
  return (
    <div className={styles.myFab}>
      {isMobile ? (
        <Fab
          style={{ top: 0, right: 0 }}
          event="click"
          mainButtonStyles={{
            height: "4rem",
            width: "4rem",
            borderRadius: "50%",
          }}
          icon={<DiscussionIcon />}
          onClick={handleclick}
        />
      ) : (
        <Fab
          style={{ top: 0, right: 0 }}
          event="click"
          mainButtonStyles={{
            borderRadius: "2rem",
            height: "4rem",
            width: "fit-content",
            padding: "1.2rem",
            fontSize: "1.5rem",
            whiteSpace: "nowrap",
          }}
          icon="Me contacter"
          onClick={handleclick}
        />
      )}
    </div>
  );
};

export default ContactButton;

// width: fit-content;
// height: 3rem;
// font-weight: bold;
// border-style: solid;
// border-radius: $borderRadius
// padding: 0 1rem;
//
