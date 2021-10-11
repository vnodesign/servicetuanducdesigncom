import loadable from '@loadable/component';
import React from 'react';
import _ from 'lodash';
const Action = loadable(() =>
  import(/* webpackPrefetch: true */ './Action')
);
//import Action from './Action';

export default class CtaButtons extends React.Component {
    render() {
        let actions = _.get(this.props, 'actions', null);
        return (
            _.map(actions, (action, action_idx) => (
              <Action key={action_idx} {...this.props} action={action} />
            ))
        );
    }
}
