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

function Input() {
    const location = useLocation();

    const [docs, setDocs] = React.useState([])

    useEffect(() => {
        document.body.style.backgroundColor = "#fff"
        document.body.style.paddingLeft = "10rem";
        document.body.style.paddingLeft = "10rem";
        const queryParams = new URLSearchParams(location.search);
        const parameterString = queryParams.get('param');
        if (parameterString) {
            const parameterObject = JSON.parse(decodeURIComponent(atob(parameterString)));
            console.log(parameterObject);
        }
    }, [location.search])


    const [value, setValue] = React.useState("db.collection.operation(query) \n \n \n \n \n");
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
    const editorStyle = {
        fontSize: "1.5rem"
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
            {/* <h1>Level {passedData.level}</h1>
            <p>{passedData.prob}</p> */}
            <CodeMirror
                value={value}
                width='60rem'
                style={editorStyle}
                theme={monokai}
                extensions={[javascript({ jsx: true }), autocompletion({ override: [myCompletions] })

                ]}
                onChange={onChange}
            />
            <button onClick={handleSubmit} variant="contained" type="submit" className="valorant-btn">
                <span class="underlay">
                    <span class="label">Submit</span>
                </span>
            </button>
            {docs.map((elem, index) => {
                return (
                    <Doc key={index} info={elem} />
                )
            })}


        </div>
    );
}



export default Input;
