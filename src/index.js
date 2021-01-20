import React from "react";
import ReactDom from "react-dom";
import { data } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

import "./index.css";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
