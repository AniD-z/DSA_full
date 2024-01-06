import "./input.css";

// export default Input;
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { autocompletion } from "@codemirror/autocomplete"
import { monokai } from '@uiw/codemirror-theme-monokai';
import { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import { blue } from "@mui/material/colors";


function Input() {
    let  state = useLocation();

    useEffect(() => {
        document.body.style.backgroundColor = "#000000"
        document.body.style.paddingLeft = "10rem";
        document.body.style.paddingLeft="10rem"
        console.log("bitchhhh")
        console.log(state)
        // console.log(passedData)

    }, [])


    const [value, setValue] = React.useState("db.collection.operation(query) \n \n \n \n \n");
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    async function handleSubmit() {
        const response = await Axios.get("https://schemaverse.onrender.com/", {
            params: {
                input: value
            }
        })
        console.log(response)
    }
    const editorStyle = {
        fontSize: "1.5rem"
    }
    const completions = [
        { label: "panic", type: "keyword" },
        { label: "park", type: "constant", info: "Test completion" },
        { label: "password", type: "variable" },
        { label: "get_fit_now_member", type: "keyword" }
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
        <div className="center">
            {/* <h1>Level {passedData.level}</h1>
            <p>{passedData.prob}</p> */}
            <CodeMirror
                value={value}
                backgroundColor ="blue"

    
                
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


        </div>
    );
}

export default Input;
