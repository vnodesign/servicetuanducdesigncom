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
        name: Họ và tên *
        label: Họ và tên *
        default_value: Họ và tên
        options: []
        is_required: true
      - input_type: email
        name: Địa chỉ Email *
        label: Địa chỉ Email *
        default_value: Địa chỉ Email
        options: []
        is_required: true
      - input_type: select
        name: Bạn dùng thẻ ở ngân hàng nào? *
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
        name: Tên trên thẻ ngân hàng *
        label: Tên trên thẻ ngân hàng *
        default_value: Tên trên thẻ ngân hàng
        options: []
        is_required: true
      - input_type: text
        name: IP VPS *
        label: IP VPS *
        default_value: IP VPS
        options: []
        is_required: true
      - input_type: number
        name: PORT VPS (Nếu có)
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
      - input_type: text
        name: Mật khẩu VPS *
        label: Mật khẩu VPS *
        default_value: Mật khẩu VPS
        options: []
        is_required: true
      - input_type: number
        name: Số tài khoản ngân hàng *
        label: Số tài khoản ngân hàng *
        default_value: lorem-ipsum
        options: []
        is_required: false
    submit_label: Submit
    type: section_contact
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: landing
---
