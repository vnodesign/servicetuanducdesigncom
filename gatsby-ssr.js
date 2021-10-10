/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('js/plugins.js')} defer/>
            <script src={withPrefix('js/init.js')} defer/>
            <script src={withPrefix('js/main.js')} defer/>
            <script>window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v10.0"})};</script>
            <script src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js" async defer></script>
        </React.Fragment>
    ]);

};
