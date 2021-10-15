---
title: Cài đặt VPS Basic
sections:
  - section_id: install-vps-basic
    title: Cài đặt VPS Basic
    image_alt: lorem-ipsum
    actions: []
    type: section_hero
  - section_id: install-vps-basic-main
    background: gray
    form_id: install-vps-basic
    form_action: install-vps-basic
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
      - input_type: select
        name: bank_card
        label: Bạn dùng thẻ ở ngân hàng nào? *
        default_value: Lựa chọn ngân hàng
        options:
          - Ngân hàng VPBank
          - Ngân hàng ACB
          - Ngân hàng BIDV
          - Ngân hàng Đông Á Bank
          - Ngân hàng PVCombank
          - Ngân hàng Sacombank
          - Ngân hàng SHB
          - Ngân hàng SeaBank
          - Ngân hàng TP Bank
          - Ngân hàng Vietcombank
        is_required: true
      - input_type: text
        name: bank_cardname
        label: Tên trên thẻ ngân hàng *
        default_value: Tên trên thẻ ngân hàng
        options: []
        is_required: true
      - input_type: number
        name: bank_cardnumber
        label: Số tài khoản ngân hàng *
        default_value: Số tài khoản ngân hàng
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
        default_value: Mặc định port login ssh là 22
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
  title: Cài đặt VPS Basic - Tuan Duc Design
  description: ''
  robots: []
  extra:
    - name: 'og:image'
      value: images/58111AA6-D0D9-4C10-BC6C-068FDAC2CE6D_4_5005_c.jpeg
      keyName: property
      relativeUrl: true
    - name: 'og:type'
      value: article
      keyName: property
      relativeUrl: false
    - name: 'twitter:card'
      value: summary_large_image
      keyName: name
      relativeUrl: false
    - name: 'og:description'
      value: Thông tin về gói cài đặt VPS Basic
      keyName: property
      relativeUrl: false
template: landing
---
