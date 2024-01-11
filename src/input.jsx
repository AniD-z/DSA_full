import React from "react";
import { useState, useEffect } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { autocompletion } from "@codemirror/autocomplete"
import { monokai } from '@uiw/codemirror-theme-monokai';
import Axios from "axios";
import Button from '@mui/material/Button';

// import { useLocation } from 'react-router-dom';
// import { useGameContext } from "./components/Events_landing/GameContext";
// function Input(){
//     return(
//         <div>
//             <h1>
//                 heloooo world
//             </h1>
//         </div>
//     )
// }

function Input() {
    // let  state = useLocation();
    // const location = useLocation();
    // const { gameSolution } = useGameContext();

    // const [docs , setDocs] = React.useState([])

    useEffect(() => {
        document.body.style.backgroundColor = "#DCF2F1"
        document.body.style.paddingLeft = "18rem";
    //     console.log(gameSolution)
    }, [])
    // useEffect(() => {
    //     document.body.style.backgroundColor = "#DCF2F1"
    //     document.body.style.paddingLeft = "18rem";
    //     // console.log("bitchhhh")
    //     // console.log(state)
    //     const queryParams = new URLSearchParams(location.search);
    //     const parameterString = queryParams.get('param');
    //     if (parameterString) {
    //         const parameterObject = JSON.parse(decodeURIComponent(parameterString));
    //         console.log(parameterObject);
    //     }
    // }, [location.search])


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
        <div>
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
            <Button onClick={handleSubmit} variant="contained">SUBMIT</Button>

            {docs.map((elem , index)=>{
                return(
                    <Doc key={index} info={elem}/>
                )
            })}
        

        </div>
    );
}



export default Input;
