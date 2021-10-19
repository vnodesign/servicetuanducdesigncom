---
title: LarVPS Script
subtitle: >-
  LarVPS Script được thiết kế quản trị đơn giản, nhẹ, tối ưu tốc độ, bảo mật,
  phục vụ cho mã nguồn PHP phổ biến như Wordpress, Laravel... với các công nghệ
  mới nhất
image_alt: AAPanel Script
seo:
  title: LarVPS Script - Tuan Duc Service
  description: ''
  robots: []
  extra: []
template: page
image: images/larvps-script-post.png
---
**Yêu cầu**

Những yêu cầu trước khi cài đặt LarVPS bạn cần đọc qua để cài đặt LarVPS như hệ điều hành Centos 8/ Almalinux 8 /Rocky 8. Tối thiểu CPU 1 Core, 1GB Ram, 10GB HDD. VPS chưa cài bất kỳ thông tin gì.

**Kết nối SSH đến VPS**

Để thao tác được với VPS thì việc đầu tiên bạn cần một công cụ có thể kết nối từ máy tính của bạn đến VPS qua giao thức  SSH (Secure Shell). Nghĩa là bạn có thể quản lý VPS từ xa thông qua Internet. Ví dụ VPS mua ở Japan, bạn ở Việt Nam vẫn kết nối được.

Để kết nối SSH đến VPS bạn có thể sử dụng một trong các công cụ sau:

*   [Bitvise SSH Client (Nên dùng)](https://www.bitvise.com/download-area)

*   [Termius (Nên dùng)](https://termius.com/)

*   [Mobaxterm](https://mobaxterm.mobatek.net/download-home-edition.html)

*   [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) (Win)

*   Powershell (Win)

*   Terminal (Mac)

Thường mặc định các nhà cung cấp VPS sử dụng port  **22** + IP + Mật khẩu.

Ví dụ ở đây mình sử dụng VPS có IP là: **14.225.255.151**

Vậy để kết nối đến VPS bạn gõ như sau:

ssh -p 22 root@14.225.255.151

\-p: port kết nối, mặc định là 22

root: tài khoản root (có quyền cao nhất trong VPS)

Ở lần đầu kết nối sẽ có xác thực ssh (yes/no): bạn gõ yes

Kế đến sẽ yêu cầu nhập mật khẩu, bạn hãy gõ 1 mạch hoặc paste mật khẩu vào sau đó nhấn Enter. Bởi vì mật khẩu sẽ ẩn nên khi gõ sẽ không thấy ký tự nào ngoài dấu nháy.

**Yêu cầu hệ thống**

*   CPU: >= 1 Core

*   Ram: >= 1GB

*   HDD: >= 10GB

Lưu ý: VPS chưa cài bất kỳ dữ liệu nào. Nếu có bạn cần rebuild VPS. Hầu hết các nhà cung cấp VPS đều có tính năng này (rebuild/destroy).
