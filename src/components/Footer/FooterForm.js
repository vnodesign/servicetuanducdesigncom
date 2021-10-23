import React from 'react';
import _ from 'lodash';
import {markdownify} from '../../utils';
import FormField from '../Form/FormField';
import '../../sass/recaptcha.scss';
import ReCAPTCHA from "react-google-recaptcha";
export default class FooterForm extends React.Component {
    // get datas constructors
    constructor(props) {
      super(props); // get information props
      this.submitForm = this.submitForm.bind(this); // Submit Form
      // get datas state
      this.state = {
        status: "" // Status after sending mail 
      };
      }
      render() {
        const { status } = this.state; // get status
        let section = _.get(this.props, 'section', null); // get information from sections
        return (
            <section className="cell widget widget-form">
              {_.get(section, 'title', null) && (
              <h2 className="widget-title">{_.get(section, 'title', null)}</h2>
              )}
              {markdownify(_.get(section, 'content', null))}
              <form name={_.get(section, 'form_id', null)} id={_.get(section, 'form_id', null)} {...(_.get(section, 'form_action', null) ? ({action: _.get(section, 'form_action', null)}) : null)} method="POST" action="https://formspree.io/f/mknkawry" onSubmit={this.submitForm}>
                <div className="screen-reader-text">
                  <label id={_.get(section, 'form_id', null)} htmlFor={_.get(section, 'form_id', null)}>Don't fill this out if you're
                    human:</label>
                  <input aria-labelledby={_.get(section, 'form_id', null)} id={_.get(section, 'form_id', null) }
                    name={_.get(section, 'form_id', null)} />
                </div>
                <input aria-labelledby={_.get(section, 'form_id', null)} type="hidden" name="form-name"
                  value={_.get(section, 'form_id', null)} />
                {_.map(_.get(section, 'form_fields', null), (field, field_idx) => (
                <div key={field_idx} className="form-row">
                  <FormField {...this.props} field={field} />
                </div>
                ))}
                <div className="form-row">
                    <ReCAPTCHA sitekey="6LfmZc0cAAAAAMVRiGzFENjRbnaqwdXT4WzrH6e0" />
                </div>
                <div className="form-row">
                    {status === "SUCCESS" ? <><div className="alert alert-success" role="alert">Thông tin của bạn đã được gửi đi, đừng quên kiểm tra email của bạn để xem có tin nhắn từ chúng tôi không nhé!</div></> : <button type="submit" className="button">{_.get(section, 'submit_label', null)}</button>}
                    {status === "ERROR" && <><div className="alert alert-danger" role="alert">Xin lỗi! Bạn chưa nhập đẩy đủ thông tin hoặc hệ thống đang bị lỗi, vui lòng thử lại sau.</div></>}
                </div>
              </form>
            </section>
        );
    }
    // begin submitform
    submitForm(ev) {
      ev.preventDefault(); // get data
      const form = ev.target; // get form
      const data = new FormData(form); // get data from form
      const xhr = new XMLHttpRequest(); // check request from xhr
      xhr.open(form.method, form.action); // get information
      xhr.setRequestHeader("Accept", "application/json"); // Send request to header
      // check state change
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return; // check state and request
        // check status
        if (xhr.status === 200) {
          form.reset().delay('2000').fadeIn('500'); // reset form after sending
          this.setState({ status: "SUCCESS" }); // sending success
        } else {
          this.setState({ status: "ERROR" }); // sending error
        }
      };
      xhr.send(data); // sending data
    }
}
