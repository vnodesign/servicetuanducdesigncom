import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {withPrefix, attribute} from '../utils';
import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        let font = _.get(this.props, 'pageContext.site.siteMetadata.base_font', null) || 'nunito-sans';
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.seo.title', null) ? (_.get(this.props, 'pageContext.frontmatter.seo.title', null)) : _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.seo.description', null) || ''} />
                    {_.get(this.props, 'pageContext.frontmatter.seo.robots', null) && (
                    <meta name="robots" content={_.join(_.get(this.props, 'pageContext.frontmatter.seo.robots', null), ',')}/>
                    )}
                    {_.map(_.get(this.props, 'pageContext.frontmatter.seo.extra', null), (meta, meta_idx) => {
                        let key_name = _.get(meta, 'keyName', null) || 'name';
                        return (
                          _.get(meta, 'relativeUrl', null) ? (
                            _.get(this.props, 'pageContext.site.siteMetadata.domain', null) && ((() => {
                                let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');
                                let rel_url = withPrefix(_.get(meta, 'value', null));
                                let full_url = domain + rel_url;
                                return (
                                  <meta key={meta_idx} {...(attribute(key_name, _.get(meta, 'name', null)))} content={full_url}/>
                                );
                            })())
                          ) : 
                            <meta key={meta_idx + '.1'} {...(attribute(key_name, _.get(meta, 'name', null)))} content={_.get(meta, 'value', null)}/>
                        )
                    })}
                    {(font !== 'system-sans') && (
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    )}
                    {(font === 'nunito-sans') ? (
                    <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9ZKdn4qX5FHyg.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9dKdn4qX5FHyg.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9lKdn4qX5E.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY1wIUrt9w6fk2A.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY10IUrt9w6fk2A.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY1MIUrt9w6c.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cceyI9tAcVwob5A.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8ccezI9tAcVwob5A.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I9tAcVwo.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5iU1ECVZl_86Y.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5jU1ECVZl_86Y.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5tU1ECVZl_.woff2" as="font" type="font/woff2" crossorigin />
  <style>@font-face{font-family:'Nunito Sans';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9ZKdn4qX5FHyg.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Nunito Sans';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9dKdn4qX5FHyg.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Nunito Sans';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9lKdn4qX5E.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Nunito Sans';font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY1wIUrt9w6fk2A.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Nunito Sans';font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY10IUrt9w6fk2A.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Nunito Sans';font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY1MIUrt9w6c.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Nunito Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cceyI9tAcVwob5A.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Nunito Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8ccezI9tAcVwob5A.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Nunito Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I9tAcVwo.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Nunito Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5iU1ECVZl_86Y.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Nunito Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5jU1ECVZl_86Y.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Nunito Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5tU1ECVZl_.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}</style>
                    ) : ((font === 'fira-sans') && (
                    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet"/>
                    ))}
                    {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.favicon', null))}/>
                    )}
                    <body className={'palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette', null) + ' font-' + _.get(this.props, 'pageContext.site.siteMetadata.base_font', null)} />
                </Helmet>
                <div id="page" className="site">
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
