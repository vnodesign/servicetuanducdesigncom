---
title: Thiết kế WordPress Basic
sections:
  - section_id: design-wordpress-basic
    title: Thiết kế WordPress Basic
    image_alt: lorem-ipsum
    actions: []
    type: section_hero
  - section_id: design-wordpress-basic-main
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
      - input_type: select
        name: bank_card
        label: Bạn dùng thẻ ở ngân hàng nào? *
        default_value: Lựa chọn ngân hàng
        options:
          - Ngân hàng VPBank
          - Ngân hàng ACB
          - Ngân hàng BIDV
          - Ngân hàng Đông Á Bank
          - Ngân hàng PVComBank
          - Ngân hàng Sacombank
          - Ngân hàng SHB
          - Ngân hàng SeaBank
          - Ngân hàng TP Bank
          - Ngân hàng Vietcombank
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
        name: bank_cardname
        label: Tên trên thẻ ngân hàng *
        default_value: Tên trên thẻ ngân hàng
        options: []
        is_required: true
      - input_type: text
        name: bank_cardnumber
        label: Số tài khoản ngân hàng *
        default_value: Số tài khoản ngân hàng
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
