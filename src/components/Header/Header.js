import React from 'react';
import _ from 'lodash';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import {Link, withPrefix, classNames} from '../../utils';
import Action from '../Action/Action';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header outer" itemprop="mainEntity" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
              <div className="inner">
                <div className="site-header-inside">
                  <div className="site-branding">
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null) && (
                    <p className="site-logo"><Link to={withPrefix('/')} title={_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img_alt', null)}><LazyLoadComponent><img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null))} alt={_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img_alt', null)} loading="lazy" decoding="async" /></LazyLoadComponent></Link></p>
                    )}
                    {((_.get(this.props, 'pageContext.frontmatter.template', null) === 'landing') || (_.get(this.props, 'pageContext.frontmatter.template', null) === 'blog')) ? (
                    <h1 className={classNames('site-title', {'screen-reader-text': _.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null)})}><Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</Link></h1>
                    ) : 
                    <p className={classNames('site-title', {'screen-reader-text': _.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null)})}><Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</Link></p>
                    }
                  </div>
                  {(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null) && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null)) && (<React.Fragment>
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation" itemprop="mainEntity" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
                    <div className="site-nav-inside">
                      <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Open Menu</span><span className="icon-close" aria-hidden="true" /></button>
                      <ul className="menu">
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (action, action_idx) => {
                            let page_url = _.trim(_.get(this.props, 'pageContext.url', null), '/');
                            let action_url = _.trim(_.get(action, 'url', null), '/');
                            let action_style = _.get(action, 'style', null) || 'link';
                            return (
                              <li key={action_idx} className={classNames('menu-item', {'current-menu-item': page_url === action_url, 'menu-button': action_style !== 'link'})}>
                                <Action {...this.props} action={action} />
                              </li>
                            )
                        })}
                      </ul>
                    </div>
                  </nav>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-menu" aria-hidden="true" /></button>
                  </React.Fragment>)}
                </div>
              </div>
            </header>
        );
    }
}
