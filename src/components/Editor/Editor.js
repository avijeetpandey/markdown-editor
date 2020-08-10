import React , {useState,useEffect} from 'react'
import './../../styles/editor.css'
import marked from 'marked'

const Editor = ()=>{


    const default_markdown = `## This is the basic Page that is going to be rendered
    `

    const [markdown,setMarkdown] = useState(default_markdown)

    const handleChange=(event)=>{
        setMarkdown(event.target.value)
        document.getElementsByClassName('previewer')[0].innerHTML=marked(markdown);
    }

    useEffect(()=>{
        document.getElementsByClassName('previewer')[0].innerHTML=marked(markdown)
    },[markdown])

    return(
        <div className="main">
        <h2 style={{textAlign:'center'}}>Edit and preview you markdowns in a snap</h2>
            <div className="editor-container">
            <div className="editor">
            <textarea placeholder="Enter Here" onChange={handleChange} />
            </div>
            <div className="previewer">
            </div>
            </div>
        </div>
    )
}

export default Editor

