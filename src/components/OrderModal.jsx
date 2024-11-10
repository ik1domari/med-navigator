import React from "react";
import { AppContext } from "../App";

export default function OrderModal() {
  const { setOpenOrder } = React.useContext(AppContext);
  const [closing, setClosing] = React.useState(false);
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setOpenOrder(false);
    }, 200);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div
        className={closing ? "modal__content closing" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
}
