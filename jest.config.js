module.exports = {
    /*
    transform: {
        "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    },
    */
    transform: {
        "^.+\\.ts$": "ts-jest", // npm install --save-dev ts-jest
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    },
    moduleFileExtensions: ["js", "ts", "json", "vue"],
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    /*
    setupFiles: [`<rootDir>/loadershim.js`],
    */
}