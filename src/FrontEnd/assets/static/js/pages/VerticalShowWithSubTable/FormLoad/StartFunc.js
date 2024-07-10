import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as BuildBsTableForSubTable } from "./BuildBsTableForSubTable/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = async () => {
    ShowOnDom().then();
    BuildBsTableForSubTable();
    StartFuncAddListeners();
    jFLocalFillDataLists();
};

const jFLocalFillDataLists = () => {
    let jVarLocalHeaderToDataListId = document.getElementById('HeaderToDataListId');
    jVarLocalHeaderToDataListId.click();
};

export { StartFunc };
