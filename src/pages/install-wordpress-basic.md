---
title: Cài đặt WordPress Basic
sections:
  - section_id: install-wordpress-basic
    title: Cài đặt WordPress Basic
    image_alt: lorem-ipsum
    actions: []
    type: section_hero
  - section_id: install-wordpress-basic-main
    background: gray
    form_id: install-wordpress-basic
    form_action: install-wordpress-basic
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
        name: username_adminwp
        label: 'Tên đăng nhập Admin WordPress * '
        default_value: Tên đăng nhập Admin WordPress
        options: []
        is_required: true
      - input_type: password
        name: password_adminwp
        label: Mật khẩu đăng nhập Admin WordPress *
        default_value: Mật khẩu đăng nhập Admin WordPress
        options: []
        is_required: false
      - input_type: text
        name: ip_vps
        label: IP VPS *
        default_value: IP VPS
        options: []
        is_required: true
      - input_type: number
        name: port_vps
        label: PORT VPS (Nếu có)
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
  title: Cài đặt WordPress Basic - Tuan Duc Service
  description: Thông tin về gói cài đặt WordPress Basic
  robots: []
  extra:
    - name: 'og:image'
      value: images/58111AA6-D0D9-4C10-BC6C-068FDAC2CE6D_4_5005_c.jpeg
      keyName: property
      relativeUrl: true
template: landing
---
