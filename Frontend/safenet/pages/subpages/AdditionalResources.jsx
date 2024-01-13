import React from "react";
import Navbar from "../../components/Navbar";
import ResourcesCard from "../../components/ResourcesCard";
import Info1 from "../../src/assets/Card_Images/Educational_Resources/info1.webp";
import CardData from "../../Data/CardsData.json";
import Info2 from "../../src/assets/Card_Images/Educational_Resources/info2.png";
import Info3 from "../../src/assets/Card_Images/Educational_Resources/info3.jpg";
import Info4 from "../../src/assets/Card_Images/Educational_Resources/info.jpeg";
import Video1 from "../../src/assets/Card_Images/Educational_Resources/video1.avif";
import Video2 from "../../src/assets/Card_Images/Educational_Resources/video2.jpg";
import Video3 from "../../src/assets/Card_Images/Educational_Resources/video3.png";
import Video4 from "../../src/assets/Card_Images/Educational_Resources/video4.jpg";
import Vodeo5 from "../../src/assets/Card_Images/Educational_Resources/video5.png";

import Quiz1 from "../../src/assets/Card_Images/Educational_Resources/quiz1.webp";
import Quiz2 from "../../src/assets/Card_Images/Educational_Resources/quiz2.jpg";
import Quiz3 from "../../src/assets/Card_Images/Educational_Resources/quiz3.svg";
import Quiz4 from "../../src/assets/Card_Images/Educational_Resources/quiz4.jpg"
function AdditionalResources() {
  return (
    <div className="outer-er">
      <Navbar />

      <div className="er-heading"> Additional Resources</div>

      {/* Infographics */}

      <div className="sections">
        <div className="sec-head"> Infographics </div>
        <div className="sec-cards">
          <ResourcesCard
            image={Info1}
            heading={CardData.infographic.head1}
            para={CardData.infographic.text1}
            link={CardData.infographic.url1}
          />

          <ResourcesCard
            image={Info2}
            heading={CardData.infographic.head2}
            para={CardData.infographic.text2}
            link={CardData.infographic.url2}
          />

          <ResourcesCard
            image={Info3}
            heading={CardData.infographic.head3}
            para={CardData.infographic.text3}
            link={CardData.infographic.url3}
          />

          <ResourcesCard
            image={Info4}
            heading={CardData.infographic.head4}
            para={CardData.infographic.text4}
            link={CardData.infographic.url4}
          />
        </div>
      </div>

      {/* Videos */}

      <div className="sections">
        <div className="sec-head">Videos</div>

        <div className="sec-cards">
          <ResourcesCard
            image={Video1}
            heading={CardData.videos.head1}
            para={CardData.videos.text1}
            link={CardData.videos.url1}
          />

          <ResourcesCard
            image={Video2}
            heading={CardData.videos.head2}
            para={CardData.videos.text2}
            link={CardData.videos.url2}
          />

          <ResourcesCard
            image={Video3}
            heading={CardData.videos.head3}
            para={CardData.videos.text3}
            link={CardData.videos.url3}
          />

          <ResourcesCard
            image={Video4}
            heading={CardData.videos.head4}
            para={CardData.videos.text4}
            link={CardData.videos.url4}
          />

          <ResourcesCard
            image={Vodeo5}
            heading={CardData.videos.head5}
            para={CardData.videos.text5}
            link={CardData.videos.url5}
          />
        </div>
      </div>

      {/* Quizzes */}

      <div className="sections">
        <div className="sec-head">Quizzes</div>

        <div className="sec-cards">
          <ResourcesCard
            image={Quiz1}
            heading={CardData.quiz.head1}
            para={CardData.quiz.text1}
            link={CardData.quiz.url1}
          />

          <ResourcesCard
            image={Quiz2}
            heading={CardData.quiz.head2}
            para={CardData.quiz.text2}
            link={CardData.quiz.url2}
          />

          <ResourcesCard
            image={Quiz3}
            heading={CardData.quiz.head3}
            para={CardData.quiz.text3}
            link={CardData.quiz.url3}
          />

          <ResourcesCard
            image={Quiz4}
            heading={CardData.quiz.head4}
            para={CardData.quiz.text4}
            link={CardData.quiz.url4}
          />

        </div>
      </div>
    </div>
  );
}

export default AdditionalResources;
