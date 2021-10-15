import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block">
            <div className="hero-block">
                <div className="bg-accent">
                    <div className="outer">
                        <div className="inner">
                            <div className="grid">
                            {_.get(section, 'image', null) && (
                            <div className="cell">
                                <div className="block-preview">
                                    <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                                </div>
                            </div>
                            )}
                            <div className="cell">
                                {_.get(section, 'title', null) && (
                                <h2 className="block-title underline">{_.get(section, 'title', null)}</h2>
                                )}
                                <div className="block-copy">
                                {markdownify(_.get(section, 'content', null))}
                                </div>
                                {_.get(section, 'actions', null) && (
                                <div className="block-buttons">
                                <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                                </div>
                                )}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}
