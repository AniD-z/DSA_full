import React from "react";
import { useState, useEffect } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { autocompletion } from "@codemirror/autocomplete"
import { monokai } from '@uiw/codemirror-theme-monokai';
import Axios from "axios";
import Button from '@mui/material/Button';
import "./input.css";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Doc from "./Doc";
import { useNavigate } from 'react-router-dom';


function Input() {
    const location = useLocation();
    const navigate = useNavigate();
    let parameterObject
    const [docs, setDocs] = React.useState([])
    const [question, setQuestion] = React.useState("")

    useEffect(() => {
        document.body.style.backgroundColor = "#000000"
        document.body.style.paddingLeft = "14rem";
        document.body.style.paddingRight = "14rem";

        const queryParams = new URLSearchParams(location.search);
        const parameterString = queryParams.get('param');
        if (parameterString) {
            parameterObject = JSON.parse(decodeURIComponent(atob(parameterString)));
            setQuestion(parameterObject.qn)
            console.log(parameterObject.qn);
        }
    }, [location.search])


    const [value, setValue] = React.useState("db.collection.operation(query) \n \n \n \n \n");
    const [ans , setAns]=React.useState("")
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    async function handleSubmit() {
        const response = await Axios.get("https://backend-g50b.onrender.com", {
            params: {
                input: value
            }
        })
        console.log(response.data)
        setDocs(response.data)
    }

    function handleAnsChange(e){
        setAns(e.target.value)
    }

    function handleAnsSubmit(){
        if(ans==parameterObject.ans){
            navigate(`/`);
        }
    }

    const editorStyle = {
        fontSize: "1.5rem",
        marginTop: "2rem"
    }
    const completions = [
        // { label: "panic", type: "keyword" },
        // { label: "park", type: "constant", info: "Test completion" },
        // { label: "password", type: "variable" },
        { label: "get_fit_now_members", type: "keyword" },
        { label: "get_fit_now_check_ins", type: "keyword" },
        { label: "crime_scene_reports", type: "keyword" },
        { label: "facebook_event_checkins", type: "keyword" },
        { label: "incomes", type: "keyword" },
        { label: "people", type: "keyword" },
        { label: "interviews", type: "keyword" },
        { label: "licenses", type: "keyword" },
        { label: "find", type: "keyword" },
        { label: "findOne", type: "keyword" },
        { label: "aggregate", type: "keyword" },
        { label: "$match", type: "keyword" },
        { label: "$project", type: "keyword" },
        { label: "$group", type: "keyword" },
        { label: "$and", type: "keyword" },
        { label: "$count", type: "keyword" },
        { label: "$lookup", type: "keyword" }
    ]
    function myCompletions(context) {
        let before = context.matchBefore(/\w+/)
        // If completion wasn't explicitly started and there
        // is no word before the cursor, don't open completions.
        if (!context.explicit && !before) return null
        return {
            from: before ? before.from : context.pos,
            options: completions,
            validFor: /^\w*$/
        }
    }

    return (
        <div class="sm:mx-auto md:mx-auto lg:mx-0 xl:mx-0">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <p className="mobile-paragraph">{question}</p>
            <CodeMirror
                value={value}
                style={editorStyle}
                theme={monokai}
                extensions={[javascript({ jsx: true }), autocompletion({ override: [myCompletions] })

                ]}
                onChange={onChange}
            />
            <button onClick={handleSubmit} variant="contained" type="submit" className="valorant-btn">
                <span class="underlay">
                    <span class="label">Execute</span>
                </span>
            </button>

            {/* <img src={require()} alt="" /> */}
            <p className="mobile-paragraph">Submit Your Answer Here</p>
            <input value={ans} onChange={handleAnsChange}></input>
            <div>
            <button onClick={handleAnsSubmit} variant="contained" type="submit" className="valorant-btn">
                <span class="underlay">
                    <span class="label">Submit</span>
                </span>
            </button>
                </div>


            {docs.map((elem, index) => {
                return (
                    <Doc key={index} info={elem} />
                )
            })}


        </div>
    );
}



export default Input;
