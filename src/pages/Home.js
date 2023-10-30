import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AdvantageContent from "../components/AdvantageContent";
import iconChat from "../designs/img/icon-chat.png";
import moneyIcon from "../designs/img/icon-money.png";
import securityIcon from "../designs/img/icon-security.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="all-three-featur-item">
        <AdvantageContent
          img={iconChat}
          h3="You are our #1 priority"
          text="
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        "
        />
        <AdvantageContent
          img={moneyIcon}
          h3="More savings means higher rates"
          text="
          The more you save with us, the higher your interest rate will be!
        "
        />
        <AdvantageContent
          img={securityIcon}
          h3="Security you can trust"
          text="
          We use top of the line encryption to make sure your data and money
          is always safe.
        "
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
