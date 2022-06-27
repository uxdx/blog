import ReactMarkdown from 'react-markdown'

function MarkdwonViewer (props: {md:string}){
    return (
        <ReactMarkdown>
            {props.md}
        </ReactMarkdown>
    );
}

export default MarkdwonViewer;