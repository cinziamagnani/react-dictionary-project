import React from 'react';
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  console.log(props.results)
        if (props.results) {
            return (
                <div className="Results">
                  <hr />
                  <section>
                  {props.results.phonetics.map(function(phonetic, index) {
                    return (
                      <div key={index}>
                        <Phonetics phonetics={phonetic} />
                      </div>
                    )
                  })}
                  <h2>{props.results.word}</h2>
                  </section>
                  {props.results.meanings.map(function (meaning, index) {
                    return (
                      <section key={index}>
                        <Meaning meaning={meaning} />
                      </section>
                    );
                  })}
                  <hr />
                </div>
              );
        } else {
            return null;
        }
}


