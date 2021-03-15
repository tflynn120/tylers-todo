import React, {useState} from 'react'

export default function Feedback() {

    const [feedback, setFeedback] = useState([
        {
            person: "Ralph",
            project: "DfE - Roadmap Process",
            description: "lorem lipsum lorem lipsum random random etxt yaydgyagdy a gdyagdya ayyag"
        },
        {
            person: "DAVID",
            project: "Accessible Calderdale",
            description: "HDIHFWIHHFHWIFHWFIHFWHIWFIHIHWFHIWF"
        },
        {
            person: "SUSAN",
            project: "Yorkshire Water",
            description: "Sky is blue" 
        }
    ]);


    return (
        
        <div>
            <h2>Feedback</h2>

            <p>
                {feedback.map(function(item) {
      return <li key={item}>{item}</li>;
    })}</p>
        </div>
    )
}
