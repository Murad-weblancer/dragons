import React from "react";
import "./Docs.scss";
export const Description = () => {
  return (
    <div className="desc">
      <h1>Description</h1>
      <p>
        SpaceX (Space Exploration Technologies Corporation){" "}
        <span>is a space transportation and aerospace manufacturer</span>{" "}
        founded in 2002 by Elon Musk. Musk is also the CEO of electric car maker
        Tesla. And most recently, he entered a deal to purchase social
        networking site Twitter for $44 billion in April 2022. After 18 months
        of development, SpaceX unveiled a delivery vehicle in 2006 under the
        name Dragon. It was soon followed with Falcon, which was designed to
        lift humans and cargo into orbit.
      </p>
      <h2>Tools</h2>
      <p className="proj">
        In this project, we used the side api to show you the rockets that were
        sent into space. For api we used{" "}
        <a href="https://redux-toolkit.js.org/rtk-query/overview">RTK query</a>{" "}
        to cache data data, also we used{" "}
        <a href="https://reactrouter.com/en/main">react-router-dom</a> for
        routing our site. For icons I used{" "}
        <a href="https://react-icons.github.io/react-icons/">react-icons</a>
        it is a library for icons in react app. For styling I used{" "}
        <a href="https://sass-lang.com/">SAAS</a> , saas is preprocessor fro
        simple css, saas helps us speed up the styling of the site. For backend
        and data base I used <a href="https://firebase.google.com/">Firebase</a>
        .Firebase is a set of hosting services for any type of application
        (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). It
        offers NoSQL and real-time hosting of databases, content, social
        authentication (Google, Facebook, Twitter and Github), and
        notifications, or services, such as a real-time communication server. In
        this project I used Firebase for authentication. Also for styling I used{" "}
        <a href="https://fkhadra.github.io/react-toastify/introduction">
          react-toastify
        </a>{" "}
        , React-Toastify allows you to add notifications to your app with ease.
        No more nonsense!, and{" "}
        <a href="https://react-slick.neostack.com/">slick-carousel</a> for
        slides in our project
      </p>
      <h2>History of SpaceX</h2>
      <p>
        In 2006, before it had even flown a test flight, SpaceX received $278
        million from NASA under the agency's Commercial Orbital Transportation
        Services (COTS) program. The program was created to encourage the
        development of private industry firms to build systems that could
        transport cargo to the ISS. It eventually received a contract for 12
        flights worth $1.6 billion. SpaceX went through years of trial and error
        before Falcon 1 made its first successful flight on Sept. 28, 2008.
        Falcon 1 was limited in load capacity at only 570 kg. Eventually, SpaceX
        produced the Falcon 9, which could lift Dragon and up to 13,150 kg of
        cargo. Falcon 9 took its maiden flight on June 2010. After a few
        failures, it made its first cargo delivery to the space station in May
        2012 under a test flight for the COTS program. Its first regular
        commercial flight to the space station took place in October 2012.
        SpaceX produces another Falcon craft, Falcon Heavy. Essentially, the
        craft is three Falcon 9s tied side by side to lift an even heavier
        payload, up to 63,800 kg. It was first tested in 2018.
      </p>
    </div>
  );
};
