---
title: Cài đặt WordPress miễn phí
sections:
  - section_id: install-wordpress-free
    title: Cài đặt WordPress miễn phí
    image_alt: lorem-ipsum
    actions: []
    type: section_hero
  - section_id: install-wordpress-free-main
    background: gray
    form_id: install-wordpress-free
    form_action: install-wordpress-free
    hide_labels: false
    form_fields:
      - input_type: text
        name: Họ và tên *
        label: first_lastname
        default_value: Họ và tên
        options: []
        is_required: true
      - input_type: email
        name: Địa chỉ Email *
        label: email_address
        default_value: Địa chỉ Email
        options: []
        is_required: true
      - input_type: text
        name: Tên đăng nhập Admin WordPress *
        label: username_adminwp
        default_value: Tên đăng nhập Admin WordPress
        options: []
        is_required: true
      - input_type: password
        name: Mật khẩu đăng nhập Admin WordPress *
        label: password_adminwp
        default_value: Mật khẩu đăng nhập Admin WordPress
        options: []
        is_required: false
      - input_type: text
        name: IP VPS *
        label: ip_vps
        default_value: IP VPS
        options: []
        is_required: true
      - input_type: number
        name: PORT VPS (Nếu có)
        label: port_vps
        default_value: Mặc định port login ssh là 22
        options: []
        is_required: false
      - input_type: text
        name: Tên đăng nhập VPS *
        label: username_vps
        default_value: Tên đăng nhập VPS
        options: []
        is_required: true
      - input_type: password
        name: Mật khẩu VPS *
        label: password_vps
        default_value: Mật khẩu VPS
        options: []
        is_required: true
      - input_type: text
        name: Nhà đăng ký tên miền *
        label: domain_nameregistrar
        default_value: Nhà đăng ký tên miền
        options: []
        is_required: true
      - input_type: text
        name: Tên đăng nhập vào tên miền *
        label: username_domain
        default_value: Tên đăng nhập vào tên miền
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