import React from "react";
import { useTranslation } from "react-i18next";
import Menu from "./Menu";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
function Contactus() {
  const { t } = useTranslation();
  return (
    <>
      <Menu />
      <div className="container">
        <h1 className="pt-5 statement">{t("Address")}</h1>
        <p className="about-wmsc">{t("Warsak road mathra peshawar")}</p>
        <h1 className="pt-5 statement">
          <FaPhoneAlt size={40} className=" m-2" />
          {t("PHONE")}
        </h1>
        <p className="about-wmsc">0342 9007900, +92 333 0964809</p>
        <h1 className="pt-5 statement">
          <FaEnvelope size={40} className=" m-2" />
          {t("EMAIL")}
        </h1>
        <p className="about-wmsc">faizanfasal20@gmail.com</p>
      </div>
    </>
  );
}

export default Contactus;
