/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <React.Fragment>
            <link rel="preload" href={withPrefix('css/application.css')} as="style" />
            <link rel="preload" href={withPrefix('js/application.js')} as="script" />
            <link rel="stylesheet" href={withPrefix('css/application.css')} type="text/css" />
            
        </React.Fragment>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('js/application.js')} defer/>
            
        </React.Fragment>
    ]);

};