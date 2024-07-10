import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "./url.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.PostUrl;
    let LocaltableName = jVarGlobalTableName;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    
    return await response;
};

export { StartFunc };

