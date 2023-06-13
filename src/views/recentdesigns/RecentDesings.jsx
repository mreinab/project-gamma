import React, { useRef } from "react";
import BoxWork from "../../components/BoxWork/BoxWork";
import "./recentdesigns.scss";

export default function RecentDesigns() {
  return (
    <body>
      <div className="padding__container">
        <BoxWork
          data={[
            {
              description: "Case Study",
              title: "visual designer & frontend developer",
              date: "2023",
              url: " slikgazette.com",
            },
            {
              description: "Case Study",
              title: "visual designer & frontend developer",
              date: "2023",
              url: "thebwroom.com",
            },
            {
              description: "Live Site",
              title: "visual designer & frontend developer",
              date: "2023",
              url: "jygclubjuvenildemontana.com",
            },
            {
              description: "Live Site",
              title: "visual designer",
              date: "2023",
              url: "morangestudio.tumblr.com",
            },
          ]}
        />
      </div>
    </body>
  );
}
