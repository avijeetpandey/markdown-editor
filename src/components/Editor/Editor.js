import React , {useState,useEffect} from 'react'
import marked from 'marked'

const Editor = ()=>{


    const default_markdown = `# This is the basic Page that is going to be rendered
    `

    const [markdown,setMarkdown] = useState(default_markdown)

    const handleChange=(event)=>{
        setMarkdown(event.target.value)
        document.querySelector('p').innerHTML=marked(markdown);
    }

    useEffect(()=>{
        document.querySelector('p').innerHTML=marked(markdown)
    },[markdown])

    return(
        <div>
            <textarea placeholder="Enter Here" onChange={handleChange} />
            <p></p>
        </div>
    )
}

export default Editor