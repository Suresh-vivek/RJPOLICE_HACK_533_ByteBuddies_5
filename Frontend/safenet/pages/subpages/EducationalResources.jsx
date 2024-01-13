import "./EducationalResources.css";

import React from "react";
import Navbar from "../../components/Navbar";
import CardData from "../../Data/CardsData.json";
import ResourcesCard from "../../components/ResourcesCard";
import Phish1 from "../../src/assets/Card_Images/Educational_Resources/phish1.png";
import Phish2 from "../../src/assets/Card_Images/Educational_Resources/phish2.png";
import Phish3 from "../../src/assets/Card_Images/Educational_Resources/phish3.jpg";
import Phish4 from "../../src/assets/Card_Images/Educational_Resources/phish4.jpeg";
import Mal1 from "../../src/assets/Card_Images/Educational_Resources/mal1.png";
import Mal2 from "../../src/assets/Card_Images/Educational_Resources/mal2.jpg";
import Mal3 from "../../src/assets/Card_Images/Educational_Resources/mal3.jpeg";
import Saf1 from "../../src/assets/Card_Images/Educational_Resources/safe1.webp";
import Saf2 from "../../src/assets/Card_Images/Educational_Resources//saf2.jpg";
import Saf3 from "../../src/assets/Card_Images//Educational_Resources/saf3.avif";
import Book1 from "../../src/assets/Card_Images/Educational_Resources/book1.webp";
import Book2 from "../../src/assets/Card_Images/Educational_Resources/book2.jpg";
import Book3 from "../../src/assets/Card_Images/Educational_Resources/Book3.jpg";
import Book4 from "../../src/assets/Card_Images/Educational_Resources/book4.jpeg";
import Shop1 from "../../src/assets/Card_Images/Educational_Resources/shop1.jpeg";
import Shop2 from "../../src/assets/Card_Images/Educational_Resources/shop2.png";
import Shop4 from "../../src/assets/Card_Images/Educational_Resources/shop4.png";

import Shop3 from "../../src/assets/Card_Images/Educational_Resources/shop3.jpeg";
function EducationalResources() {
  return (
    <div className="outer-er">
      <Navbar />

      <div className="er-heading"> Educational Resources</div>

      {/* Phishing Awareness */}
      <div className="sections">
        <div className="sec-head"> Phishing Awareness </div>
        <div className="sec-cards">
          <ResourcesCard
            image={Phish1}
            heading={CardData.phishing.head1}
            para={CardData.phishing.text1}
            link={CardData.phishing.url1}
          />
          <ResourcesCard
            image={Phish2}
            heading={CardData.phishing.head2}
            para={CardData.phishing.text2}
            link={CardData.phishing.url2}
          />

          <ResourcesCard
            image={Phish3}
            heading={CardData.phishing.head3}
            para={CardData.phishing.text3}
            link={CardData.phishing.url3}
          />

          <ResourcesCard
            image={Phish4}
            heading={CardData.phishing.head4}
            para={CardData.phishing.text4}
            link={CardData.phishing.url4}
          />
        </div>
      </div>

      {/* Malicious URLs */}
      <div className="sections">
        <div className="sec-head">Malicious URLs </div>
        <div className="sec-cards">
          <ResourcesCard
            image={Mal1}
            heading={CardData.malicious.head1}
            para={CardData.malicious.text1}
            link={CardData.malicious.url1}
          />

          <ResourcesCard
            image={Mal2}
            heading={CardData.malicious.head2}
            para={CardData.malicious.text2}
            link={CardData.malicious.url2}
          />

          <ResourcesCard
            image={Mal3}
            heading={CardData.malicious.head3}
            para={CardData.malicious.text3}
            link={CardData.malicious.url3}
          />
        </div>
      </div>

      {/* Safe Browsing Practices*/}

      <div className="sections">
        <div className="sec-head">Safe Browsing Practices</div>
        <div className="sec-cards">
          <ResourcesCard
            image={Saf1}
            heading={CardData.safe.head1}
            para={CardData.safe.text1}
            link={CardData.safe.url1}
          />

          <ResourcesCard
            image={Saf2}
            heading={CardData.safe.head2}
            para={CardData.safe.text2}
            link={CardData.safe.url2}
          />

          <ResourcesCard
            image={Saf3}
            heading={CardData.safe.head3}
            para={CardData.safe.text3}
            link={CardData.safe.url3}
          />
        </div>
      </div>

      {/* Books on Cybersecurity */}

      <div className="sections">
        <div className="sec-head">Books on Cybersecurity</div>

        <div className="sec-cards">
          <ResourcesCard
            image={Book1}
            heading={CardData.book.head1}
            para={CardData.book.text1}
            link={CardData.book.url1}
          />

          <ResourcesCard
            image={Book2}
            heading={CardData.book.head2}
            para={CardData.book.text2}
            link={CardData.book.url2}
          />

          <ResourcesCard
            image={Book3}
            heading={CardData.book.head3}
            para={CardData.book.text3}
            link={CardData.book.url3}
          />
          <ResourcesCard
            image={Book4}
            heading={CardData.book.head4}
            para={CardData.book.text4}
            link={CardData.book.url4}
          />
        </div>
      </div>

      {/* Preventing Online Frauds */}

      <div className="sections">
        <div className="sec-head">Preventing Online Frauds</div>

        <div className="sec-cards">
          <ResourcesCard
            image={Shop1}
            heading={CardData.shopping.head1}
            para={CardData.shopping.text1}
            link={CardData.shopping.url1}
          />

          <ResourcesCard
            image={Shop2}
            heading={CardData.shopping.head2}
            para={CardData.shopping.text2}
            link={CardData.shopping.url2}
          />

          <ResourcesCard
            image={Shop3}
            heading={CardData.shopping.head3}
            para={CardData.shopping.text3}
            link={CardData.shopping.url3}
          />

          <ResourcesCard
            image={Shop4}
            heading={CardData.shopping.head4}
            para={CardData.shopping.text4}
            link={CardData.shopping.url4}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationalResources;
