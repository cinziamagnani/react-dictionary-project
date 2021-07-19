import React from 'react';

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                <p>
                <strong>
                    Synonyms: 
                 </strong>
                 <ul>
                 {props.synonyms.map(function(synonym, index){
                     return (
                         <li key={index}>
                             {synonym}
                         </li>
                     )
                 })

                 }
                </ul>
                </p>
            </div>
        )
    } else {
        return null;
    }
    
}