import React from 'react';
import _ from 'lodash';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import {Link, withPrefix, markdownify} from '../../utils';

export default class FooterText extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="cell widget widget-text">
              {_.get(section, 'image', null) && (
                _.get(section, 'image_url', null) ? (
                <Link className="widget-image" to={withPrefix(_.get(section, 'image_url', null))} title={_.get(section, 'image_alt', null)}><LazyLoadComponent><img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} loading="lazy" decoding="async" /></LazyLoadComponent></Link>
                ) : 
                <p className="widget-image"><LazyLoadComponent><img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} loading="lazy" decoding="async" /></LazyLoadComponent></p>
              )}
              {_.get(section, 'title', null) && (
              <h2 className="widget-title">{_.get(section, 'title', null)}</h2>
              )}
              {markdownify(_.get(section, 'content', null))}
            </section>
        );
    }
}
