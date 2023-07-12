import React from "react";
import { useTranslation } from "react-i18next";
import Menu from "./Menu";

function Vision() {
  const { t } = useTranslation();
  return (
    <>
      <Menu />
      <div className="div-about-wmsc">
        <h1 className="pt-5 text-center">{t("VISION & MISSION OF IPS")}</h1>
        <h2 className="py-3 statement">{t("Vision Statement")}</h2>
        <p className="about-wmsc">
          {t(
            "IPS is dedicated to a continuing tradition of excellence in an ever-changing world. We provide a relevant, high-quality education and prepare our diverse students for future endeavors. We honor achievement and promote pride in ourselves, in our school, and in our community."
          )}
        </p>
        <h2 className="py-3 statement">{t("Mission Statement")}</h2>
        <p className="about-wmsc">
          {t(
            "IPS strive to prepare all students to become lifelong learners and responsible citizens ready to meet the challenges of the future. In partnership with families and community, our goal is to create relevant learning opportunities for students — both inside and outside the classroom — that help them develop the knowledge, critical thinking skills, and character necessary to succeed in a technologically advanced world. We honor quality and enable students to perform at their highest level of ability."
          )}
        </p>
      </div>
    </>
  );
}

export default Vision;
