import "./main.css";

function main(props, children) {
    return (
        <>
            <div className="main">{props.content}</div>
        </>
    );
}

export default main;