---
title: Cài đặt VPS miễn phí
sections:
  - section_id: install-vps-free
    title: Cài đặt VPS miễn phí
    image_alt: lorem-ipsum
    actions: []
    type: section_hero
  - section_id: install-vps-free-main
    background: gray
    form_id: install-vps-free
    form_action: install-vps-free
    hide_labels: false
    form_fields:
      - input_type: text
        name: first_lastname
        label: Họ và tên *
        default_value: Họ và tên
        options: []
        is_required: true
      - input_type: email
        name: email_address
        label: Địa chỉ Email *
        default_value: Địa chỉ Email
        options: []
        is_required: true
      - input_type: text
        name: ip_vps
        label: IP VPS *
        default_value: IP VPS
        options: []
        is_required: true
      - input_type: number
        name: port_vps
        label: PORT VPS (Nếu có)
        default_value: Mặc định port login SSH là 22
        options: []
        is_required: false
      - input_type: text
        name: username_vps
        label: Tên đăng nhập VPS *
        default_value: Tên đăng nhập VPS
        options: []
        is_required: true
      - input_type: password
        name: password_vps
        label: Mật khẩu VPS *
        default_value: Mật khẩu VPS
        options: []
        is_required: true
    submit_label: Submit
    type: section_contact
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: landing
---
