import React from 'react';
import _ from 'lodash';
import {htmlToReact, markdownify} from '../../utils';
import { useForm } from '@formspree/react';
import FormField from '../Form/FormField';
import '../../sass/recaptcha.scss';
import ReCAPTCHA from "react-google-recaptcha";
export default class SectionContact extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
    }
    render() {
        const { status } = this.state;
        const [submitForm] = useForm('mknkawry');
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block contact-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle', null))}
                </p>
                )}
              </div>
              <div className="block-content inner-medium">
                {markdownify(_.get(section, 'content', null))}
                <form name={_.get(section, 'form_id', null)} id={_.get(section, 'form_id', null)}{...(_.get(section, 'form_action', null) ? ({action: _.get(section, 'form_action', null)}) : null)} method="POST" onSubmit={submitForm}>
                  <div className="screen-reader-text">
                    <label id={_.get(section, 'form_id', null)} htmlFor={_.get(section, 'form_id', null)}>Don't fill this out if you're human:</label>
                    <input aria-labelledby={_.get(section, 'form_id', null)} id={_.get(section, 'form_id', null)} name={_.get(section, 'form_id', null)} />
                  </div>
                  <input aria-labelledby={_.get(section, 'form_id', null)} type="hidden" name="form-name" value={_.get(section, 'form_id', null)} />
                  {_.map(_.get(section, 'form_fields', null), (field, field_idx) => (
                  <div key={field_idx} className="form-row">
                    <FormField {...this.props} field={field} section={section} />
                  </div>
                  ))}
                  <div className="form-row">
                    <ReCAPTCHA sitekey="6LfmZc0cAAAAAMVRiGzFENjRbnaqwdXT4WzrH6e0" />
                  </div>
                  <div className="form-row form-submit">
                    {status === "SUCCESS" ? <p>Thông tin của bạn đã được gửi đi, đừng quên kiểm tra email của bạn để xem có tin nhắn từ chúng tôi không nhé!</p> : <button type="submit" className="button">{_.get(section, 'submit_label', null)}</button>}
                    {status === "ERROR" && <p>Xin lỗi! Bạn chưa nhập đẩy đủ thông tin hoặc hệ thống đang bị lỗi, vui lòng thử lại sau.</p>}
                  </div>
                </form>
              </div>
            </section>
        );
    }
    submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
