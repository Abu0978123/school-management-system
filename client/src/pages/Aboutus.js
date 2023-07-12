import React from "react";
import { useTranslation } from "react-i18next";
import Menu from "./Menu";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Aboutus() {
  const { t } = useTranslation();
  return (
    <>
      <Menu />
      <div className="div-about-wmsc">
        <h1 className="pt-5 statement">{t("IQRA public school")}</h1>
        <p className="about-wmsc">
          IQRA public school warsak road mathra, is a private Higher Secondary
          School. Her inception is the beginning of internationalized & modern
          education system in Pakistan at public school level for middle & lower
          middle class children’s. Although its not a formal A/O a level
          institution, but focusing more on concept clearance & Implimentative
          skills ( through multimedia, class discussions, pair work, projects
          etc), it has taken her schooling close to O/A type schooling. IPS
          believes that along with academics, overall personality trimming &
          development should be an indispensible constituent of her schooling,
          For this purpose co-curricular ( debate, drama etc) and sports
          activities are accommodated on daily basis. IPS wish her students not
          only to score prominent in public exams and Entry tests but they may
          also prove themselves productive persons & good, energetic & peace
          loving citizens, able to play visible role in national & Ummah
          development. IPS’s rich with all required physical facilities in her
          both boys & Girls campuses, along with results of public exams and
          Entry test are proof of her truthfulness and vision. Being, Director,
          I wish my students should gain all, which can make them good human,
          well civilized, productive and peace loving. May Allah the almighty
          constantly guide us. Ameen.
        </p>
        <p className="about-imp">{t("AboutMessage2")}</p>
      </div>
    </>
  );
}

export default Aboutus;
