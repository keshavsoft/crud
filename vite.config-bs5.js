import { resolve } from 'path'
const commonSrcFolder = "src/Index/FrontEnd";
const commonDistFolder = "dist";

export default {
    root: resolve(__dirname, commonSrcFolder),
    build: {
        outDir: commonDistFolder
    },
    server: {
        port: 8080
    }
}
