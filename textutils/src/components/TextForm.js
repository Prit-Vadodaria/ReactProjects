import React,{useState} from 'react'

export default function TextForm(props) {
    //TextArea
    const[text,setText] = useState('');
    const wordCount = text.trim()? text.trim().split(/\s+/).length : 0;
    const disable = wordCount===0 ? true : false ;
    const setUpper = () =>
    {
         
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success");
    }
    const setLower = () =>
    {
         
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase","success");
    }
    const setCap = () =>
    {
         
        const words=text.split(" ");
        const capitalizedwords = words.map( word =>
            {
                if(word.length > 0)
                {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }
                return word;
            }
        );

        setText(capitalizedwords.join(' '));
        props.showAlert("Converted To CapitaliseCase","success");
    }
    const Copytxt = () =>
    {
         
        var cptext = document.getElementById("FormControlTextarea");
        cptext.select();
        navigator.clipboard.writeText(cptext.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");

    }
    const rmSpaces = () =>
    {
         
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Spaces Removed","success");
    }
    const setCommaSep = () =>
    {
         
        let newText = text.split(/[ ]+/);
        setText(newText.join(","));
        props.showAlert("Space has been Replaced with a Comma","success");
    }
    const setClear = () => 
    {
         
        setText("");
        props.showAlert("Text Cleared","danger");
    }
    const setTxtValue = (event) =>
    {
        setText(event.target.value);
    }

    //Replace text
    const [replacetext,setReplaceText] = useState('');
    const [replacedtext,setReplacedText] = useState('');
    const replaceTxt = () =>
    {
        //let newtext=text.replace({replacedtext},{replacetext});
        if (!replacedtext) {
            props.showAlert("Please enter text to replace", "warning");
            return;
        }

        setText(text.replace(replacedtext, replacetext));
        props.showAlert(
            `Replaced first occurrence of "${replacedtext}" with "${replacetext}"`,
            "success"
        );
    }
    const replaceAllTxt = () =>
    {
        //let newtext=text.replaceAll({replacedtext},{replacetext});
        if (!replacedtext) {
            props.showAlert("Please enter text to replace", "warning");
            return;
        }

        setText(text.replaceAll(replacedtext, replacetext));
        props.showAlert(
            `Replaced all occurrences of "${replacedtext}" with "${replacetext}"`,
            "success"
        );
    }
    const setreplacetextValue = (event) =>
    {
        setReplaceText(event.target.value);
    }
    const setreplacedtextValue = (event) =>
    {
        setReplacedText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="FormControlTextarea" rows="8" value={text} onChange={setTxtValue} style={{background:props.mode === 'light'?'white':'#212529' ,color:props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button disabled={disable} className='btn btn-primary my-2 mx-1' onClick={setUpper}>UpperCase</button>
                <button disabled={disable} className='btn btn-primary my-2 mx-1' onClick={setLower}>LowerCase</button>
                <button disabled={disable} className='btn btn-primary my-2 mx-1' onClick={setCap}>Capitalise</button>
                <button disabled={disable} className='btn btn-primary my-2 mx-1' onClick={setCommaSep}>Convert to Comma Sep</button>
                <button disabled={disable} className='btn btn-primary my-2 mx-1' onClick={Copytxt}>Copy Text</button>
                <button disabled={disable} className='btn btn-primary my-2 mx-1' onClick={rmSpaces}>Remove Extra Spaces</button>
                <button disabled={disable} className='btn btn-danger my-2 mx-1' onClick={setClear}>Clear Text</button>
            </div>
            <hr></hr>
            <div className="container">
                <h3>Replace:</h3>
                <form className="row g-3">
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputText2" style={{background:props.mode==='light'?'white':'#212529' ,color:props.mode==='light'?'black':'white'}} value={replacedtext} onChange={setreplacedtextValue}/>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputText2" style={{background:props.mode==='light'?'white':'#212529' ,color:props.mode==='light'?'black':'white'}} value={replacetext} onChange={setreplacetextValue}/>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary mb-3 mx-1" onClick={replaceTxt}>Replace</button>
                        <button type="button" className="btn btn-primary mb-3 mx-1" onClick={replaceAllTxt}>Replace All</button>                        
                    </div>
                </form>
            </div>
            <hr></hr>
            <div className="container">
                <h3>Text Summary : </h3>
                <p>{wordCount} Words & {text.length} Characters
                </p>
                <p>Time to Read the Provided text : {0.008 * wordCount}</p>
            </div>
            <hr></hr>
            <div className="container">
                <h3>Preview</h3>
                <p className={`border border-${props.mode==='light'?'#e0e4e8':'white'} p-3 rounded-3`}>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
            <hr></hr>
        </>
    )
}
