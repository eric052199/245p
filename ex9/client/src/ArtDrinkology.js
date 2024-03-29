// Components

import Main from "./main.js";

// Data

import { MAIN_DATA } from "./data.js";

function ExampleDataView() {
    return (
        <>
            <Main content={MAIN_DATA[1].content} />
            <Main content={MAIN_DATA[2].content} />
        </>
    );
}

export default ExampleDataView;