import { StartFunc as StartFuncTableTag } from "./TableTag.js";

const StartFunc = () => {
    StartFuncTableTag();
    console.log("")
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: []
        // columns:jVarLocalData
    });
};

export { StartFunc };
