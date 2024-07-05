import ConfigJson from '../../../../bin/Config.json' with {type: 'json'};
import sideBarItems from '../../../../KCode/ForAllTables/sideBarItems.json' with {type: 'json'};

import { StartFunc as mainTableSchema } from "../mainTableSchema.js";
import { StartFunc as mainTableColumnsConfig } from "../mainTableColumnsConfig.js";
import { StartFunc as getTableNames } from "../getTableNames.js";
import { StartFunc as foreignTableColumnsConfig } from "../foreignTableColumnsConfig.js";


import path from "path";
import _ from "lodash";

const StartFunc = ({ mode, inFilesArray }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let LocalSideBarItems = LocalFuncGenerateSideBarJson();
    let LocalTableNames = getTableNames();

    Object.keys(LocalFiles).forEach((filename) => {
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        let LoopInsideVariableObject = {
            web_title: "KeshavSoft",
            filename: ".html",
            sidebarItems: LocalSideBarItems,
            isDev: mode === 'development',
            DataPk: 316,
            tableName: "",
            columnData: {},
            tableConfig: {}
        };

        let LoopInsideTableName = LocalTableNames.find(element => {
            let LoopInsideTableName = path.parse(element).name;
            return filename.startsWith(LoopInsideTableName);
        });

        if (LoopInsideTableName === undefined === false) {
            let LoopInsidecolumnData = mainTableColumnsConfig({ inTableName: LoopInsideTableName });
            let LoopInsideTableConfig = mainTableSchema({ inTableName: LoopInsideTableName });
            let LocalInsideForeignTable = foreignTableColumnsConfig({ inTableName: path.parse(LoopInsideTableName).name });
            // console.log("LocalInsideForeignTable:", LocalInsideForeignTable);


            LoopInsideVariableObject.filename = filename + '.html';
            LoopInsideVariableObject.DataPk = ConfigJson.jsonConfig.DataPk;
            LoopInsideVariableObject.tableName = path.parse(LoopInsideTableName).name;
            // console.log("LoopInsideVariableObject.tableName:", LoopInsideVariableObject.tableName);
            LoopInsideVariableObject.columnData = LoopInsidecolumnData;
            LoopInsideVariableObject.tableConfig = LoopInsideTableConfig;


            if (LocalInsideForeignTable === undefined === false) {
                LoopInsideVariableObject.subTableName = path.parse(LocalInsideForeignTable?.name)?.name;
            };

            variables[filename + '.html'] = LoopInsideVariableObject;
            return;
        };

        variables[filename + '.html'] = LoopInsideVariableObject;
    });

    return variables;
};


const StartFunc_Keshav_4Jul2024 = ({ mode, inFilesArray }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let LocalSideBarItems = LocalFuncGenerateSideBarJson();
    let LocalTableNames = getTableNames();

    Object.keys(LocalFiles).forEach((filename) => {
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        let LoopInsideTableName = LocalTableNames.find(element => {
            let LoopInsideTableName = path.parse(element).name;
            return filename.startsWith(LoopInsideTableName);
        });
        console.log("LoopInsideTableName : ", LoopInsideTableName);
        if (LoopInsideTableName === undefined === false) {
            let LoopInsidecolumnData = mainTableColumnsConfig({ inTableName: LoopInsideTableName });
            let LoopInsideTableConfig = mainTableSchema({ inTableName: LoopInsideTableName });

            variables[filename + '.html'] = {
                web_title: "Mazer Admin Dashboard",
                filename: filename + '.html',
                sidebarItems: LocalSideBarItems,
                isDev: mode === 'development',
                DataPk: ConfigJson.jsonConfig.DataPk,
                tableName: path.parse(LoopInsideTableName).name,
                columnData: LoopInsidecolumnData,
                tableConfig: LoopInsideTableConfig
            };
        };
    });

    return variables;
};

const LocalFuncGenerateSideBarJson = () => {
    let LocalTableNames = getTableNames();

    let LocalReturnArray = LocalTableNames.map(element => {
        let LoopInsideTableName = path.parse(element).name;

        let LocalSideBar = sideBarItems.map(element => {
            return {
                ...element,
                url: `${LoopInsideTableName}${element.url}`
            };
        });

        return {
            "name": LoopInsideTableName,
            "key": LoopInsideTableName,
            "icon": "bi bi-database-add",
            "children": LocalSideBar
        };
    });

    return LocalReturnArray;
};

export { StartFunc };