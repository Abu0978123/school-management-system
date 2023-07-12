import React from "react";
import { useTranslation } from "react-i18next";
import img from "../images/director.jpg";
import Menu from "./Menu";
function DirectorMessage() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <Menu />
        <div className="row d-flex">
          <div className="col-12 col-lg-4 col-sm-12">
            <img
              src={img}
              alt="results"
              style={{ width: "100%", height: "500px" }}
            />
          </div>
          <div className="col-12 col-lg-7 col-sm-12">
            <h1>{t("MESSAGE OF DIRECTOR")} </h1>
            <p className="about-wmsc">
              IQRA public school warsak road mathra, is a private Higher
              Secondary School. Her inception is the beginning of
              internationalized & modern education system in Pakistan at public
              school level for middle & lower middle class children’s. Although
              its not a formal A/O a level institution, but focusing more on
              concept clearance & Implimentative skills ( through multimedia,
              class discussions, pair work, projects etc), it has taken her
              schooling close to O/A type schooling. IPS believes that along
              with academics, overall personality trimming & development should
              be an indispensible constituent of her schooling, For this purpose
              co-curricular ( debate, drama etc) and sports activities are
              accommodated on daily basis. IPS wish her students not only to
              score prominent in public exams and Entry tests but they may also
              prove themselves productive persons & good, energetic & peace
              loving citizens, able to play visible role in national & Ummah
              development. IPS’s rich with all required physical facilities in
              her both boys & Girls campuses, along with results of public exams
              and Entry test are proof of her truthfulness and vision. Being,
              Director, I wish my students should gain all, which can make them
              good human, well civilized, productive and peace loving. May Allah
              the almighty constantly guide us. Ameen.
            </p>
            <p className="director">
              {t("Sir Amin jan ")} <br />
              {t("Director")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorMessage;
