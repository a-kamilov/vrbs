import React from "react";
import manVirtual from "./img/manVirtual.png";
import manVirtual2 from "./img/manVirtual2.png";

const Content = () => {
  return (
    <div className="content">
      <div className="top">
        <img src={manVirtual} />
        <div className="t_content">
          <p>We complete every projects extra care as customer need</p  >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.{" "}
          </p>
          <button>Read more</button>
        </div>
      </div>
      <div className="top">
        <div className="t_content">
          <p>We complete every projects extra care as customer need</p  >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.{" "}
          </p>
          <button>Read more</button>
        </div>
        <img src={manVirtual2} />
      </div>
    </div>
  );
};

export default Content;
