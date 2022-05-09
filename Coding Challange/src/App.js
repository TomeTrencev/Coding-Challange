import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { Nav } from "./components/Nav";
import { InTheNews } from "./components/InTheNews";
import { Press } from "./components/Press";
import { Popup } from "./components/PopUp";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


var cards = [
  {
    logo: "https://enterpriseleague.com/public/img/press/startupinfo.png",
    title: "Enterprise League, Building the Fastest Growing Business Platform for Companies",
    paragraph: "That’s why it is important to optimize the way we gather and analyze user feedback. When creating our feedback forms, we focus on addressing common concerns and"
  },
  {
    logo: "https://enterpriseleague.com/public/img/featured/business-insider-logo.png",
    title: "Best online business communities",
    paragraph: "Enterprise League is a platform that connects SMEs, enabling them to find business partnerships and collaborations. The Al-powered online platform allows users to"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/classicinformatics.png",
    title: "Best Business Apps",
    paragraph: "Irina Georgieva, Co-Founder & CEO of Enterprise League tells that ‘Enterprise League’ is the fastest growing business platform for startups and SMEs, having"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/startup.png",
    title: "Top 101 small and medium businesses and startups",
    paragraph: "At Enterprise League, we are passionate about helping people improve the way they do business. We are on a mission to help millions of entrepreneurs expand their"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/uknews.png",
    title: "Business platform Enterprise League sees unprecedented user growth",
    paragraph: "Enterprise League is extremely proud to share such results particularly since it is facilitating the way companies collaborate during these difficult times we are facing. We"
  },
  {
    logo: "https://enterpriseleague.com/public/img/featured/umi.png",
    title: "Startup Stories: Enterprise League",
    paragraph: "Enterprise League (EL) is a B2B platform for SMEs. Through EL’s platform, small businesses can advertise what their value offerings are for free and search for other"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/upgrade.png",
    title: "5 Cost effective ways to scale up your business",
    paragraph: "Many entrepreneurs around the world are under constant pressure to scale up their businesses. They repeatedly receive different bits of advice from both investors and"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/upjourney.png",
    title: "How to Stop Feeling Overwhelmed at Work (121 Powerful Tips)",
    paragraph: "At some point, you must realize that you need to change something if you want to keep your health and sanity, and still succeed with your business. I understood that,"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/prmoment.png",
    title: "Reasons to be Cheerful about Brexit",
    paragraph: "We are expecting to fare even better as there will be an increasing need to connect EU and UK SMEs to work together. As we are breaking walls between countries, we are"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/globalapptesting.png",
    title: "Time Management Techniques from CTOs",
    paragraph: "As a CTO the most important things for me are the productivity & efficiency of my team. Considering the fast-paced & information-saturated world we live in, it is crucial for us"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/cydomedia.png",
    title: "3 Entrepreneurs provide advice on leading teams with remote employees",
    paragraph: "At Enterprise League, people are our most valuable resources. Their contribution helps us keep the business platform running and growing despite the pandemic crisis we are"
  },
  {
    logo: "https://enterpriseleague.com/public/img/featured/tech-round-logo.png",
    title: "Interview with Irina Georgieva, Co-founder and CEO of Enterprise League",
    paragraph: "We can expect to see Enterprise League to play a significant part in helping businesses out of the crisis caused by the pandemic. Many companies will turn to the platform in"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/harmonizelyblog.png",
    title: "10+ insightful tips for new managers",
    paragraph: "In order to unleash your employees’ full potential, you must give them responsibilities. Allocate each employee processes which they own and manage"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/usco.png",
    title: "Ways to cut overhead costs",
    paragraph: "Review your marketing mix [and] compare how much you are spending and gaining from each channel. If, for example, you are investing a lot in PR … but you don’t see a"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/mycorporation.png",
    title: "Work from home outfit",
    paragraph: "A simple day dress is my to-go WFH outfit. It is easy to wear, and often very comfortable for long hours spent sitting on a desk. The main reasoning behind this type of outfit is to"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/welivetobuild.png",
    title: "CEO Interview - Irina Georgieva",
    paragraph: "The original idea was to bring more business opportunities to small companies around the world by giving them direct access to potential business collaborations and"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/carolroth.png",
    title: "Positive Mindset Tips for Small Business",
    paragraph: "Focus on the things/aspects of your work that you can control. Be rational, put your energy towards identifying ways you can adapt your business e.g., increase your onlin"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/workclub.png",
    title: "Future of Works Interview - Irina Georgieva",
    paragraph: "Our goal has been to be very agile in terms of our employee performance and their processes. Thus we introduced monthly employee performance reviews to help us"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/beyourown.png",
    title: "Business Education for female entrepreneurs",
    paragraph: "The number of female entrepreneurs has been on the rise in recent years and now more than ever women are aspiring to achieve financial freedom. However, it is a"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/femfounder.png",
    title: "From a communist country to a London entrepreneur, a female founder's journey with Irina Georgieva",
    paragraph: "Her company's mission is to empower small businesses to grow by enabling them to find new business opportunities quickly and easily."
  },

]

var press = [
  {
    logo: "https://enterpriseleague.com/public/img/press/press-img-three.png",
    title: "2020 in review: A letter from our CEO and Co-Founder",
    date: "London, UK, December 30th, 2020",
    paragraph: "Another year is drawing to a close; and we once again find ourselves planning for the future, but also reflecting on the events of 2020  we hope that despite the difficulties and uncertainty this year has brought, you have managed to stay strong and focused on the things you can control.",
    button: "Read More"

  },
  {
    logo: "https://enterpriseleague.com/public/img/press/press-img-two.png",
    title: "Over 100,000 companies join business platform since the virus crisis started",
    date: "London, UK, October 14th, 2020",
    paragraph: "London, UK, Oct 14th, Enterprise League today announced that it registered a huge increase of over 100,000 SMEs joining its business platform. Companies seek to minimise their business loss after their forced closure in more than 40 countries worldwide and ahead of a second lockdown.The only way for companies to survive is to reinvent themselves” said Enterprise Leagues CTO, Atanas Georgiev.",
    button: "Read More"
  },
  {
    logo: "https://enterpriseleague.com/public/img/press/press-img-one.png",
    title: "The Solution to the Global Business #Lockdown",
    date: "London, UK - March 26, 2020",
    paragraph: "Enterprise League today has announced that the B2B platform through which companies collaborate remotely is open to SMEs for free. This action comes as an attempt to help SMEs minimise the losses they are incurring due to the forced lockdown imposed in more than 40 countries worldwide. Enterprise League facilitates the way SMEs find new business partnerships and deals through a sophisticated software powered by AI and machine learning.",
    button: "Read More"
  },

]

export function App() {

  const [timedPopup, setTimedPopup] = useState(
    JSON.parse(localStorage.getItem('is-open') === false)
  );

  useEffect(()=>{
    setTimeout(()=>{
     localStorage.setItem('is-open', JSON.stringify(timedPopup));
    },30)
  },[timedPopup])





  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/" element={<InTheNews cards={cards} />} />
        <Route path="/press" element={<Press press={press} />} />
      </Routes>
      {timedPopup && <Popup
        trigger={timedPopup}
        setTrigger={setTimedPopup}
      />}
      <Contact />
      <Footer />
    </div>
  )
}