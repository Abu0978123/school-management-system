import React from "react";
import { useTranslation } from "react-i18next";
import Menu from "./Menu";
function RulesRegulations() {
  const { t } = useTranslation();
  return (
    <>
      <Menu />
      <div className="div-about-wmsc">
        <h1 className="pt-5 text-center statement">
          {t("SCHOOL IMPORTANT RULES")}
        </h1>
        <h2 className="py-3 statement">{t("Admission requirements")}:</h2>
        <ol type="1">
          <li className="about-wmsc">
            {t("Pre – school = Form B or Birth Certificate + 2 photos")}
          </li>
          <li className="about-wmsc">{t("Class 1 – 8th = SLC + 2 Photos")}</li>
          <li className="about-wmsc">
            {t("Class 9th = Migration certificate + SLC + DMC + 8 photos")}
          </li>
          <li className="about-wmsc">
            {t("Class 10th = Migration certificate + SLC + DMC + 8 photos")}
          </li>
          <li className="about-wmsc">
            {t(
              "Inter: I + II = Provisional and character certificate + DMC + 8 Photos + Migration"
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "certificate (If HSSC / SSC done from other than Peshawar. Board)"
            )}
          </li>
        </ol>
        <h2 className="py-3 statement">{t("Provisional Admission:")}</h2>
        <ol type="1">
          <li className="about-wmsc">
            {t("May be granted in class 9th to 12th.")}
          </li>
          <li className="about-wmsc">
            {t("With full admission dues + monthly tuition fee.")}
          </li>
          <li className="about-wmsc">
            {t(
              "All rules (of discipline, attendance, dues and home Exam) shall apply."
            )}
          </li>
          <li className="about-wmsc">
            {" "}
            {t(
              "IPS shall bear no responsibility for enrollment and Exam at BISE Peshawar."
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "Inter: I + II = Provisional and character certificate + DMC + 8 Photos + Migration"
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "No admission test is required, only to be interviewed by Head."
            )}
          </li>
        </ol>
        <h2 className="py-3 statement">
          {t("Concession to Real Brother / Sister of Lyceumns:")}
        </h2>
        <p className="about-wmsc">
          {t(
            "10% in admission fee and monthly tuition fee except transport charges and Annual fund are granted automatically at admission counters."
          )}
        </p>
        <h2 className="py-3 statement">{t("Late Comer Students:")}</h2>
        <ol type="1">
          <li className="about-wmsc">
            {t(
              "Till start of national anthem students can join assembly directly without going to class rooms."
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "Up to 15 mins after off of assembly, late comers are allowed to class after receiving of punishment (3/5 rounds running with bags up)."
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "More than 15 minutes late joiner to be punished 10 / 15 rounds and to be allowed to class at start of 2nd lesson."
            )}
            <br />
            <br />
            {t("Detained Students:")}
          </li>
        </ol>
        <ol type="i">
          <li className="about-wmsc">
            {t(
              "Detained students shall not be allowed until their parents /guardians signing the undertaking. Better it be done before result day or upto <br /> one week after result day."
            )}
          </li>
          <li className="about-wmsc">
            {t("Detained student forms shall not be sent to BISE Peshawar.")}
          </li>
          <li className="about-wmsc">
            {t(
              "The detained students forms shall be sent to BISE after passing the pre-board exam with the board fee of that time."
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "If parents / guardians shall not sign undertaking till one week after result day the detained students shall be SOR and parents shall be informed through registered post &phonic massage."
            )}
          </li>
        </ol>
        <h2 className="py-3 statement">{t("Absentee of Student in Exam:")}</h2>
        <ol type="1">
          <li className="about-wmsc">
            {t("Absent students will be declared as failed.")}
          </li>
          <li className="about-wmsc">
            {t(
              "Students on leave (on unavoidable reason) either to be re-examined or shall be considered at the level of previous exam he / she appeared in."
            )}
          </li>
        </ol>
        <h2 className="py-3 statement">{t("RULES FOR STUDENTS:")}</h2>
        <p className="about-wmsc">{t("IPSUniform Rules:")}</p>
        <h2 className="py-3 statement">{t("(a) COMPULSORY")}</h2>
        <ol type="i">
          <li className="about-wmsc">
            {t(
              "Complete IPS uniform of prescribed color and shades and approved design."
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "Crew cut hair, polished shoes cut nails and brushed teeth, students name card,stitched (IPS) on shirt and blazer (pockets)"
            )}
            .
          </li>
        </ol>
        <h2 className="py-3 statement">{t("(b) NOT ALLOWED")}</h2>
        <ul type="i">
          <li className="about-wmsc">
            {t(
              "High necks, caps, muffler, jeans, joggers, neck chains, hand bangles (male students)"
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "Loose lowered tie knots, open buttons and shirt out of trouser (male students)."
            )}
          </li>
          <li className="about-wmsc">
            {t(
              "Tight Shalwar Qamees, high chalks, makeup, lips tick, cuties, high heels shoes,jewelry, long nails, intense perfumes, open hair, boy-cut hairs (female)."
            )}
          </li>
        </ul>
        <h2 className="py-3 statement">{t("(c) FINE")}</h2>
        <ul type="i">
          <li className="about-wmsc">
            {" "}
            {t("Rs. 50 – 100 may be imposed on violation.")}
          </li>
        </ul>
        <h2 className="py-3 statement">{t("(d) SEQUENCE")}</h2>
        <ul type="i">
          <li className="about-wmsc">
            {" "}
            {t("Winter uniform begins with blazer instead of pullover.")}
          </li>
        </ul>
        <h2 className="py-3 statement">
          {t("(e) SPECIAL DAYS AND EVENTS ....Complete Unifrom must in")}
        </h2>
        <ul type="i">
          <li className="about-wmsc">
            {" "}
            {t(
              "BISE exams of SSC + HSSC (theory + practicals, morning + evenings)"
            )}
          </li>
          <li className="about-wmsc">
            {" "}
            {t("Study tours, picnics and IPS functions.")}
          </li>
          <li className="about-wmsc">
            {" "}
            {t(" All sort of competition out side IPS.")}
          </li>
        </ul>
        <h2 className="py-3 text-danger">
          {t(
            "NOTE: Shirt of boys shall remain half sleeves both in winter as well as in summer."
          )}
        </h2>
        <h2 className="py-3 statement">{t("SOR / Struck of the Roll:")}</h2>
        <p className="about-wmsc">
          <strong className="about-wmsc">1. {t("Grounds for SOR:")}</strong>
          <br />
          <br />
          i.{" "}
          {t(
            "Fighting with fellow students inside, out side IPS or within IPS transport or at bus stop. (single or gangestic)"
          )}
          <br />
          ii. {t("Serious disobedience of teacher.")}
          <br />
          iii. {t("Giving serious damage to IPS property.")}
          <br />
          iv. {t("Bringing arms, poisonous chemicals / medicines or drugs.")}
          <br />
          v. {t("Involves in henious crime.")}
          <br />
          vi. {t("Involves in political, sectarian or racial activities.")}
          <br />
          vii. {t("Leading students joint representation.")}
          <br />
          viii.{" "}
          {t("Creating / causing hurdles and disturbance in examination.")}
          <br />
          <br />
          <p className="about-wmsc">
            2. {t("RESTORATION ………….. Re – Admission")}
          </p>
          <br />
          i.{" "}
          {t(
            "Principal has the authority to allow or refuse the re-admission."
          )}
          <br />
          ii. {t("In case of permission.")}
          <br />
          (a){" "}
          {t(
            "Parents to submit affidavit on judicial stamp paper (of Rs. 30/-) duly counter-signed by oath-commissioner."
          )}
          <br />
          (b) {t("To deposit")}
          <h2 className="py-3 text-danger">
            {t(
              "NOTE: SOR students no more remain as IPS students. Their parents are called on phone and issue letter through registered post for collecting S.L.C after clearance of all dues."
            )}
          </h2>
        </p>
      </div>
    </>
  );
}

export default RulesRegulations;
