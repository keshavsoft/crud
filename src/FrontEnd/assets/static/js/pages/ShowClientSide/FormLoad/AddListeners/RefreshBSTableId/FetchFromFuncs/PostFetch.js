// import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTableName = jVarGlobalTableName;

    let jVarLocalFetchUrl = `/bin/${jVarLocalTableName}/RawSql/1`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

