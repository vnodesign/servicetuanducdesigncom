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
            <script>
            window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v10.0"})};function td_customerchat(){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",document.body.appendChild(t)}window.addEventListener?window.addEventListener("load",td_customerchat,!1):window.attachEvent?window.attachEvent("onload",td_customerchat):window.onload=td_customerchat;
            window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','UA-87140673-18');function td_gtag(){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://www.googletagmanager.com/gtag/js?id=UA-87140673-18",document.body.appendChild(t)}window.addEventListener?window.addEventListener("load",td_gtag,!1):window.attachEvent?window.attachEvent("onload",td_gtag):window.onload=td_gtag;
    </script>

        </React.Fragment>
    ]);

};
