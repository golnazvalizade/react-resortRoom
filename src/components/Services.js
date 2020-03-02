import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure sed odit maxime dolorum! Tempora commodi explicabo accusantium, dignissimos molestias velit quis. Temporibus ab, aperiam doloribus a consequatur atque repudiandae."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure sed odit maxime dolorum! Tempora commodi explicabo accusantium, dignissimos molestias velit quis. Temporibus ab, aperiam doloribus a consequatur atque repudiandae."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shiuttle",
        info:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure sed odit maxime dolorum! Tempora commodi explicabo accusantium, dignissimos molestias velit quis. Temporibus ab, aperiam doloribus a consequatur atque repudiandae."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure sed odit maxime dolorum! Tempora commodi explicabo accusantium, dignissimos molestias velit quis. Temporibus ab, aperiam doloribus a consequatur atque repudiandae."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
