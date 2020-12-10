import React, { useState } from "react";
import "./styles.css";
var productDictionary = {
  Kajal: [
    {
      Name: "PlumGoodness",
      Star: "INR 400"
    },
    {
      Name: "Lakme",
      Star: "INR 250"
    },
    {
      Name: "Maybelline",
      Star: "INR 190"
    }
  ],
  BodyLotion: [
    {
      Name: "Vaselline",
      Star: "INR 375"
    },
    {
      Name: "Ponds",
      Star: "INR 450"
    },
    {
      Name: "Nivea",
      Star: "220"
    }
  ],
  HairOil: [
    {
      Name: "InduLekha",
      Star: "INR 430"
    },
    {
      Name: "MamaEarth Onion Oil",
      Star: "INR 599"
    },
    {
      Name: "Wella Professional Luminous Oil",
      Star: "INR 1100"
    }
  ],
  Shampoo: [
    {
      Name: "Tresemme Pro Perfect",
      Star: "INR 320"
    },
    {
      Name: "BBlunt",
      Star: "INR 675"
    },
    {
      Name: "Matrix Opti Care",
      Star: "INR 345"
    }
  ],
  Conditioner: [
    {
      Name: "Matrix OptiCare",
      Star: "INR 275 "
    },
    {
      Name: "Schwarzkopf Professional",
      Star: "INR 575"
    },
    {
      Name: "Tresemme Keratin Mask ",
      Star: "INR 345"
    }
  ],
  LipBalm: [
    {
      Name: "Forest Essentials Lip Balm",
      Star: "INR 650"
    },
    {
      Name: "Dot & Key ",
      Star: "INR 645"
    },
    {
      Name: "NIVEA Lip Balm",
      Star: "INR 126"
    }
  ],
  Perfume: [
    {
      Name: "Skinn by Titan-Raw",
      Star: "INR 2500"
    },
    {
      Name: "Jaguar",
      Star: "INR 3300"
    },
    {
      Name: "Calvin Klien",
      Star: "INR 2600"
    }
  ]
};
var productList = Object.keys(productDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("Kajal");

  function productClickHandler(product) {
    var meaning = product;
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h2
        style={{
          alignContent: "center",
          textAlign: "center",
          color: "#DC2626",
          fontFamily: "monospace",
          margin: "1rem",
          padding: "0.5rem"
        }}
      >
        -:Discover
        <span
          style={{
            textAlign: "center",
            color: "#f87171"
          }}
        >
          {" "}
          For a Perfect Beauty Brand:-
        </span>
      </h2>

      <h5
        style={{
          textAlign: "center",
          color: "#DC2626"
        }}
      >
        {" "}
        Click Any of the Category to Search Best
      </h5>
      {productList.map(function (product, index) {
        return (
          <button
            onClick={() => productClickHandler(product)}
            style={{
              listStyle: "none",
              display: "inline",
              padding: "0.5rem 0.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              color: "#7F1D1D",
              borderRadius: "0.5rem",
              margin: "0.5rem"
            }}
            key={product}
          >
            {product}
          </button>
        );
      })}
      {productDictionary[meaning].map((data) => {
        return (
          <ul
            style={{
              listStyle: "none",
              padding: "1rem",
              margin: "auto",
              color: "white"
            }}
          >
            <li
              style={{
                backgroundColor: "#7F1D1D",
                border: "1px solid #7F1D1D",
                borderRadius: "1rem",
                padding: "3rem",
                textAlign: "center"
              }}
              key={data}
            >
              <div style={{ padding: "0.5rem" }}>Product Name :{data.Name}</div>
              <div style={{ padding: "0.5rem" }}>Price: {data.Star}</div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
