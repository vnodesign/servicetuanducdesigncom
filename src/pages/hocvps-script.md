---
title: HocVPS Script
subtitle: >-
  HocVPS Script là 1 bash script chạy trên SSH sẽ tự động cài đặt tất cả các
  thành phần cần thiết nhất cho VPS với một dòng lệnh duy nhất.
image_alt: HocVPS Script
seo:
  title: HocVPS Script - Tuan Duc Design
  description: ''
  robots: []
  extra:
    - name: 'og:image'
      value: images/hocvps-script-v2.0.png
      keyName: property
      relativeUrl: true
template: page
image: images/hocvps-script-v2.0.png
---
Không như những Control Panel khác, HocVPS Script không chạy ngầm bất kì service nào nên không hề tiêu thụ tài nguyên VPS khi không sử dụng.

**HocVPS Script sẽ support:**

*   Centos 6

*   Centos 7

*   Centos 8

**HocVPS Script sẽ tự động cài đặt:**

*   Webserver Nginx bản mới nhất.

*   Database MariaDB bản mới nhất (chính là MySQL được tối ưu).

*   Lựa chọn cài đặt và cập nhật các phiên bản Mariadb mới trong quá trình setup

*   PHP phiên bản mới nhất tùy chọn: PHP 8.0, PHP7.4, PHP 7.3, PHP 7.2, PHP 7.1, PHP 7.0, PHP 5.6; đi kèm [Zend OPcache](https://www.php.net/manual/en/book.opcache.php) giúp PHP hoạt động nhanh nhất

*   [phpMyAdmin](https://www.phpmyadmin.net/) mới nhất

*   [eXtplorer](https://extplorer.net/) mới nhất để quản lý File Manager, có thể tạo user, phân quyền riêng biệt

*   Tùy chọn cài đặt Firewall sử dụng CSF

*   Hỗ trợ cài đặt chứng chỉ SSL Let’s Encrypt cho website

*   Hỗ trợ cài đặt chứng chỉ SSL Thương mại (Sectigo, Geotrust, …)

**Những tính năng đặc biệt:**

1.  Thông tin cài đặt đơn giản, chỉ cần lựa chọn phiên bản PHP, tên miền chính và port admin là đủ.

2.  Sử dụng Nginx repo thay vì compile từ source như những script khác giúp việc cài đặt Nginx nhanh hơn, sau này có nâng cấp cũng dễ dàng hơn rất nhiều.

3.  Thay thế MySQL bằng MariaDB cho kịp xu hướng (đây là phiên bản cải tiến từ MySQL, hoạt động tương tự nhưng cho hiệu suất cao hơn MySQL; ngoài ra phiên bản mới nhất CentOS 7 chính thức đã hỗ trợ MariaDB).

4.  Lựa chọn cài đặt và cập nhật các phiên bản Mariadb mới trong quá trình setup

5.  Tương thích với cả CentOS 6 và 7, CentOS 8

6.  Tùy chọn sử dụng cài đặt phiên bản PHP mới nhất như: PHP8.0, PH7.4, PHP 7.3, PHP 7.2, PHP 7.1, PHP 7.0, PHP 5.6.

7.  Có trình quản lý File Manager eXtplorer trực tiếp ngay trên web.

8.  Tự động cài đặt module Zend Opcache và có thể theo dõi status ngay trên web.

9.  Sử dụng được với cả domain www và non-www, tự động redirect giúp bạn.

10. Update tự động cho Nginx, PHP, MariaDB.

11. Theo dõi tình trạng server ngay trên web, có thể sử dụng mobile truy cập mọi nơi.

12. Thay đổi port SSH mặc định từ 22 sang 2222 giúp hạn chế SSH Brute Force Attack, kèm theo Fail2ban block IP ngay nếu phát hiện login sai 3 lần (áp dụng cả SSH và HocVPS Script Admin).

13. Toàn bộ thông tin quản lý sẽ được lưu trong file text ở /root/hocvps-script.txt

14. Tham khảo thêm tính năng mới trong [Changelog](https://hocvps.com/changelog/).

15. Tùy chọn cài đặt Firewall sử dụng CSF

16. Hỗ trợ cài đặt chứng chỉ SSL Let’s Encrypt cho website

17. Hỗ trợ cài đặt chứng chỉ SSL Thương mại (Sectigo, Geotrust, …)
