---
title: Cài đặt Website Pro
sections:
  - section_id: install-website-pro
    title: Cài đặt Website Pro
    image_alt: lorem-ipsum
    actions: []
    type: section_hero
  - section_id: install-website-pro-main
    background: gray
    form_id: install-website-pro
    form_action: install-website-pro
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
        name: Tên đăng nhập VPS *
        label: Tên đăng nhập VPS *
        default_value: Tên đăng nhập VPS
        options: []
        is_required: true
      - input_type: password
        name: Mật khẩu VPS *
        label: password_vps
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
