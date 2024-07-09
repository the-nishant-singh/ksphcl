import React from "react";
import Banner from "../../assets/Homebanner.jpg";
import classes from "./index.module.css";

const Home = () => {
  const cards = [
    {
      image: "https://www.ksphc.org/Images/green_building.gif",
      head: "Going Green",
      desc: "Green building is the practice of increasing the efficiency with which buildings and their sites use and harvest energy, water, and materials, and reducing building impacts on human health and the environment.",
    },
    {
      image: "https://www.ksphc.org/Images/e_gov.gif",
      head: "e-governance",
      desc: "KSPH&IDCL's model of e-governance combines information, communication, and technology at the field level with the decision-making body at the head office through the power of the internet",
    },
    {
      image: "https://www.ksphc.org/Images/evtcal.jpg",
      head: "Transparency",
      desc: "Find out more about the events scheduled in KSPH&IDCL's business calendar. Check for the important dates associated with tenders, contracts, project deadlines, and others.",
    },
    {
      image: "https://www.ksphc.org/Images/transparency.gif",
      head: "Events",
      desc: "Transparency in every aspect of the operations of the corporation has been its hallmark. The Police officer on patrol duty makes an entry about his beat service, allowing a supervisor.",
    },
    {
      image: "https://www.ksphc.org/Images/epoint_book.jpg",
      head: "e-point book",
      desc: "e-POINTBOOK is similar to a Point Book placed on a Police beat. The Police officer on patrol duty makes an entry about his beat service, allowing a supervisor to know whether the beat is being serviced properly or not.",
    },
    {
      image: "https://www.ksphc.org/Images/quility.gif",
      head: "Quality",
      desc: "KSPH&IDCL is committed to providing improved Quality Products and Services that are cost-effective and delivered in time.",
    },
  ];

  return (
    <div >
      <div className={classes.BannerWrapper}>
        <img src={Banner} className={classes.BannerImage} />
      </div>
      <div className={classes.Home2}>
        <div className={classes.CardWrapper}>
          {cards.map((c) => (
            <div className={classes.Card}>
              <div className={classes.CardImage}>
                <img src={c.image} />
              </div>
              <div className={classes.CardTitle}>{c.head}</div>
              <div className={classes.CardSubTitle}>{c.desc}</div>
              <button className={`btn-primary ${classes.CardButton}`}>Read More &#8594;</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
