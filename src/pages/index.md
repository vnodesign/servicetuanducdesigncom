---
title: Trang chủ
sections:
  - section_id: hero
    type: section_hero
    image: images/cloud-hero.png
    image_alt: Cloud
    title: Tuan Duc Service
    content: >
      Chuyên cung cấp dịch vụ VPS và Website, Hướng dẫn bảo mật VPS và Website
      từ cơ bản đến nâng cao cho người không chuyên, Hỗ trợ cài đặt VPS,Tối ưu
      VPS thông qua module PageSpeed của Google,Cài đặt Memcached,Redis,SSL và
      Cloudflare.
    actions:
      - label: Xem thêm
        url: '#services'
        style: primary
        has_icon: true
        icon: arrow-right
        icon_position: right
  - section_id: services
    type: section_features
    background: gray
    title: Dịch vụ nổi bật của chúng tôi
    subtitle: >-
      Bạn đang quan tâm đến các dịch vụ nổi bật của tôi? Dưới đây là một số dịch
      vụ nổi bật của chúng tôi có thể nó sẽ hữu ích với bạn.
    features:
      - title: Cài đặt Module PageSpeed của Google
        image: images/B3BFE113-12C1-4AD0-ABD7-DDAF3D2D6BD7.png
        image_alt: App preview on a phone and tablet
        content: >
          Hàng triệu website đang sử dụng Module PageSpeed của Google trên máy
          chủ của họ. Không chỉ hỗ trợ tối ưu website trên VPS nó còn giúp bạn
          defer và async các scripts nguồn ngoài, Chuyển các thẻ script trên
          head xuống footer để website tải nhanh hơn, async Google Analytics,
          lazyload ảnh, rút gọn lại head và nhiều tính năng khác.
        actions:
          - label: Tìm hiểu thêm
            url: '#'
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
      - title: Cài đặt Memcached
        image: images/webserver-memcached-database.png
        image_alt: Memcached
        content: >
          Memcached là một hệ thống cache hoạt động bằng cách lưu tạm thông tin
          những dữ liệu bạn hay sử dụng vào bộ nhớ RAM. Do tốc độ đọc ghi của bộ
          nhớ bao giờ cũng cao hơn so với lưu trữ file nên việc sử dụng
          memcached giúp cho hệ thống của bạn tăng tốc lên một cách đáng kể.
        actions:
          - label: Tìm hiểu thêm
            url: '#'
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
      - title: Cài đặt Redis
        image: images/redis.png
        image_alt: Redis
        content: >
          Redis là hệ thống caching lưu trữ dữ liệu trong RAM tương tự như
          Memcached. Không chỉ hỗ trợ cache dạng keys/values tốt như Memcached
          mà Redis còn hỗ trợ nhiều cấu trúc dữ liệu khác như hash, list, set,
          sorted set, string.
        actions:
          - label: Tìm hiểu thêm
            url: '#'
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
      - title: Cài đặt Nginx Amplify
        content: >
          Công cụ hoạt động trên nền tảng điện toán đám mây, được cài đặt thông
          qua một module của Nginx kết nối với API cung cấp miễn phí bởi
          **Nginx.com**, giúp bạn dễ dàng theo dõi hoạt động của hệ thống cũng
          như chủ động xác định các vấn đề.
        image_alt: Nginx Amplify
        actions:
          - label: Tìm hiểu thêm
            url: '#'
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/nginx-amplify.png
  - section_id: pricing-plans-vps
    title: Bảng giá dịch vụ VPS
    subtitle: >-
      Chọn gói theo nhu cầu của bạn. Việc miễn phí các tính năng cơ bản là mãi
      mãi.
    background: gray
    pricing_plans:
      - title: GÓI MIỄN PHÍ
        price: 0 VNĐ
        details: |
          Cài đặt chứng chỉ **SSL Let’s Encrypt**

          Dùng **LAMP**,**LEMP** hoặc **Script cài đặt VPS**
        highlight: false
        actions:
          - label: Sử dụng gói này
            url: /install-vps-free
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
      - title: GÓI BASIC
        price: 200.000 VNĐ
        details: |
          **Đổi cổng IP login Server**, **IP login SSH**

          Cấu hình **Firewall**
        highlight: false
        actions:
          - label: Liên hệ
            url: /install-vps-basic
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
      - title: GÓI PRO
        price: 250.000 VNĐ
        details: |
          **Dọn dẹp file rác còn tồn đọng trên Server**

          Cấu hình **crontab tự động dọn dẹp** và **cập nhật Server** định kỳ
        highlight: true
        actions:
          - label: Liên hệ
            url: /install-vps-pro
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
    type: section_pricing
  - section_id: pricing-plans-website
    title: Bảng giá dịch vụ Website
    subtitle: >-
      Chọn gói theo nhu cầu của bạn. Việc miễn phí các tính năng cơ bản là mãi
      mãi.
    background: gray
    pricing_plans:
      - title: GÓI MIỄN PHÍ
        price: 0 VNĐ
        details: |
          Cài đặt và cấu hình **CloudFlare**

          Cài đặt mã nguồn website (**WordPress**, **CodeIgniter**, **Laravel**)
        highlight: false
        actions:
          - label: Sử dụng gói này
            url: /install-website-free
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
      - title: GÓI BASIC
        price: 200.000 VNĐ
        details: >
          **Tối ưu CSS**, **tối ưu Javascript** và **tối ưu ảnh**


          Hỗ trợ **tối ưu giao diện** và Font (**Google**, **Font-Awesome**, v
          v)
        highlight: false
        actions:
          - label: Liên hệ
            url: /install-website-basic
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
      - title: GÓI PRO
        price: 250.000 VNĐ
        details: |
          **Tắt liệt kê thư mục** trên Website

          **Chặn hotlink** (Không cho người khác download ảnh về local)
        highlight: true
        actions:
          - label: Liên hệ
            url: /install-website-pro
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
    type: section_pricing
  - section_id: pricing-plans-wordpress
    title: Bảng giá dịch vụ WordPress
    background: gray
    pricing_plans:
      - title: GÓI MIỄN PHÍ
        price: 0 VNĐ
        details: |
          Cài đặt và cấu hình **CloudFlare**

          Cài đặt **plugin nén cache** và **plugin nén định dạng ảnh**

          Cài đặt **CDN tăng tốc CSS**, **Javascript** và **ảnh**
        highlight: false
        actions:
          - label: Sử dụng gói này
            url: /install-wordpress-free
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
      - title: GÓI BASIC
        price: 200.000 VNĐ
        details: |
          Tối ưu với **PWA**

          **Tối ưu CSS**, **tối ưu Javascript** và **tối ưu ảnh**

          **Tối ưu giao diện** và **Font**
        highlight: false
        actions:
          - label: Liên hệ
            url: /install-wordpress-basic
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
      - title: GÓI PRO
        price: 250.000 VNĐ
        details: >
          **Tối ưu hóa cơ sở dữ liệu** và **dọn dẹp các table rác trong cơ sở dữ
          liệu**


          **Thay đổi tiền tố** trong **Database**


          Xử lý các **vấn đề liên quan đến bảo mật**
        highlight: true
        actions:
          - label: Liên hệ
            url: /install-wordpress-pro
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
    type: section_pricing
    subtitle: >-
      Ngoài cung cấp dịch vụ về VPS và Website ra chúng tôi còn cung cấp thêm
      các dịch vụ về WordPress.
  - section_id: pricing-plans-design-website
    title: Bảng giá dịch vụ thiết kế Website
    subtitle: >-
      Ngoài cung cấp các dịch vụ về VPS, Website và WordPress chúng tôi còn cung
      cấp thêm các dịch vụ về thiết kế Website.
    background: gray
    pricing_plans:
      - title: GÓI CƠ BẢN
        price: 1.000.000 VNĐ
        details: |
          Sử dụng mã nguồn **WordPress**

          Tích hợp chức năng **Seo** riêng

          Tích hợp chức năng **tùy biến giao diện và ADS**
        highlight: false
        actions:
          - label: Liên hệ
            url: /design-wordpress-basic
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
        subtitle: Thiết kế web landing page và web tin tức trên Bootstrap.
      - title: GÓI PRO
        subtitle: Thiết kế web landing page và web bán hàng trên Bootstrap.
        price: 1.500.000 VNĐ
        details: |
          Sử dụng mã nguồn **WordPress**

          Bán hàng không cần plugins **Woocommerce**

          Tích hợp chức năng **Seo** riêng và **tuỳ biến giao diện**
        highlight: false
        actions:
          - label: Liên hệ
            url: /design-wordpress-pro
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
      - title: GÓI PREMIUM
        subtitle: Thiết kế web bán hàng chuẩn seo và mượt.
        price: 5.000.000 VNĐ
        details: |
          Có **phiên bản cho** cả **Mobile** và **Desktop**

          Tích hợp các **cổng thanh toán phổ biến nhất**

          Tích hợp sẵn **giao diện AMP**
        highlight: true
        actions:
          - label: Liên hệ
            url: /design-website-premium
            style: primary
            has_icon: false
            icon: arrow-left
            icon_position: left
            new_window: false
            no_follow: false
    type: section_pricing
  - section_id: tools-vps
    title: Công cụ sử dụng trên VPS
    subtitle: >-
      Chúng tôi luôn chọn các công cụ mới nhất để giúp khách hàng quản lý VPS
      của mình dễ dàng.
    background: gray
    features:
      - title: HocVPS Script
        content: >
          **HocVPS Script** là 1 **bash script** chạy trên SSH sẽ tự động cài
          đặt tất cả các thành phần cần thiết nhất cho VPS với một dòng lệnh duy
          nhất.
        image_alt: HocVPS Script
        actions:
          - label: Chi tiết về HocVPS Script
            url: /hocvps-script
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/hocvps-script.png
      - title: HOSTVN Script
        content: >
          **HOSTVN Script** là 1 **bash script** chạy trên SSH sẽ tự động cài
          đặt tất cả các thành phần cần thiết nhất cho VPS với một dòng lệnh duy
          nhất.
        image_alt: HOSTVN Script
        actions:
          - label: Chi tiết về HOSTVN Script
            url: /hostvn-script
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/hostvn.png
      - title: AAPanel Script
        content: >
          Tương tự như **HocVPS Script** và **HOSTVN Script**, **AAPanel
          Script** cũng là một script tự động cài đặt và tối ưu hoạt động của
          VPS. Chỉ với vài lệnh đơn giản, VPS của bạn sẽ sẵn sàng hoạt động ngay
          lập tức.
        image_alt: AAPanel Script
        actions:
          - label: Chi tiết về AAPanel Script
            url: /aapanel-script
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/aapanel-script.png
      - title: LarVPS Script
        content: >
          **LarVPS Script** được thiết kế quản trị đơn giản, nhẹ, tối ưu tốc độ,
          bảo mật, phục vụ cho mã nguồn **PHP** phổ biến như **Wordpress**,
          **Laravel**... với các công nghệ mới nhất
        image_alt: LarVPS Script
        actions:
          - label: Chi tiết về LarVPS Script
            url: /larvps-script
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/larvps-script.png
    type: section_features
  - section_id: os-vps
    title: Hệ điều hành dùng trên VPS
    subtitle: >-
      Chúng tôi luôn chọn hệ điều hành CentOS 7 hoặc CentOS 8 để hỗ trợ khách
      hàng dễ dàng khi sử dụng dịch vụ của mình.
    background: gray
    features:
      - title: CentOS 7
        content: >
          **CentOS** – viết tắt của **Community enterprise Operating System**,
          là bản phân phối hệ điều hành dựa trên hạt nhân **Linux** . Được ra
          mắt lần đầu tiên vào tháng 5 năm 2004.
        image_alt: CentOS 7
        actions:
          - label: Chi tiết về CentOS 7
            url: /centos-7
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/centos-7.png
      - title: CentOS 8
        content: >
          **CentOS 8** cuối cùng đã được phát hành vào ngày 24 tháng 9 năm 2019.
          Vì đây là bản phân phối **Linux** có nguồn gốc từ **Red Hat Enterprise
          Linux** (RHEL), nhóm CentOS đã phải xây dựng cơ sở hạ tầng để hỗ trợ
          RHEL 8 mới được giới thiệu.
        image_alt: CentOS 8
        actions:
          - label: Chi tiết về CentOS 8
            url: /centos-8
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/centos-8.png
    type: section_features
  - section_id: support-install-source-code
    title: Hỗ trợ cài đặt Mã nguồn
    subtitle: >-
      Những mã nguồn phổ biến trên thế giới như WordPress, Joomla, Drupal,
      Xenforo, Laravel, Codeigniter.
    background: gray
    features:
      - title: WordPress
        content: >
          **WordPress** là **mã nguồn mở** giúp bạn **tạo website**, **blog**
          hay ứng dụng dễ dàng và đẹp mắt.
        image_alt: WordPress
        actions:
          - label: Chi tiết về WordPress
            url: /wordpress
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/wordpress.png
      - title: Joomla
        content: >
          **Joomla**! là một **hệ thống quản lý nội dung** (CMS) cho phép bạn
          **xây dựng trang web** và **ứng dụng** trực tuyến mạnh mẽ.
        image_alt: Joomla
        actions:
          - label: Chi tiết về Joomla
            url: /joomla
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/joomla.png
      - title: Drupal
        content: >
          **Drupal** là một khung sườn phát triển phần mềm hướng mô-đun, một
          **hệ quản trị nội dung** miễn phí và mã nguồn mở.
        image_alt: Drupal
        actions:
          - label: Chi tiết về Drupal
            url: /drupal
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/drupal.png
      - title: Xenforo
        content: >
          **Xenforo** là **mã nguồn mở** được xây dựng bởi các lập trình viên
          tách ra từ nhóm **vBullentin** (vBB)
        image_alt: Xenforo
        actions:
          - label: Chi tiết về Xenforo
            url: /xenforo
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/xenforo.png
      - title: Laravel
        content: >
          **Laravel** là một trong những **PHP Framework phổ biến nhất** trên
          thế giới được sử dụng để xây dựng ứng dụng web từ các dự án nhỏ đến
          lớn.
        image_alt: Laravel
        actions:
          - label: Chi tiết về Laravel
            url: /laravel
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/laravel.jpg
    type: section_features
  - section_id: provider-vps
    title: Nhà cung cấp
    subtitle: >-
      Hỗ trợ khách hàng tốt khi khách hàng sử dụng các nhà cung cấp VPS hàng đầu
      thế giới.
    background: gray
    features:
      - title: Vietnix
        content: >
          **Dịch vụ Hosting** đầu tiên tại Việt Nam tập trung phát triển công
          nghệ **chống tấn công DDoS** chuyên nghiệp. Bạn hoàn toàn yên tâm với
          dịch vụ của **Vietnix**.
        image_alt: Vietnix
        actions:
          - label: Chi tiết về Vietnix
            url: /vietnix
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/vietnix.png
      - title: Vultr
        content: >
          **Vultr** là nhà cung cấp **dịch vụ Cloud Server** nổi tiếng chất
          lượng với 100% phần cứng SSD, 15 datacenter location trải dài trên
          khắp thế giới.
        image_alt: Vultr
        actions:
          - label: Chi tiết về Vultr
            url: /vultr
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/vultr.jpg
      - title: AZDIGI
        content: >
          **Dịch vụ Web Hosting** cao cấp mạnh mẽ nhất dành cho **doanh nghiệp**
          và website **thương mại điện tử**.
        image_alt: AZDIGI
        actions:
          - label: Chi tiết về AZDIGI
            url: /azdigi
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/azdigi.jpg
      - title: INET
        content: >
          **iNET.vn** - Nhà đăng ký tên miền hỗ trợ khách hàng tốt nhất.
          **Chuyên cung cấp**, mua bán **Tên Miền**, **Hosting**, **Cloud VPS**,
          **Email doanh nghiệp** và các giải pháp công nghệ thông tin chất lượng
          cao.
        image_alt: INET
        actions:
          - label: Chi tiết về INET
            url: /inet
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
            new_window: false
            no_follow: false
        image: images/inet.jpg
    type: section_features
  - section_id: faq
    title: F.A.Q
    subtitle: Câu hỏi thường gặp về các dịch vụ chúng tôi
    background: gray
    faq_items:
      - answer: >
          Để sử dụng tốt các **dịch vụ** mà chúng tôi cung cấp. Bạn nên sử dụng
          **VPS CentOS**, Trong trường hợp bạn chạy **ASP.net**. Bạn hãy sử dụng
          **VPS Win Server**.
        question: 'Tôi nên dùng VPS CentOS, VPS Ubuntu hay Win Server?'
      - question: Tôi nên sử dụng máy chủ nào cho phù hợp với trang web của tôi?
        answer: >
          Để sử dụng tốt các dịch vụ mà chúng tôi cung cấp, Chúng tôi khuyên bạn
          nên **sử dụng máy chủ Nginx** hoặc **máy chủ LiteSpeed**, để đáp ứng
          mọi nhu cầu, Với **máy chủ Apache** nó tiêu tốn nhiều tài nguyên hơn,
          Nên chúng tôi sẽ không hỗ trợ khách hàng tối ưu trên máy chủ này.
      - question: Cấu hình hệ thống trên Server bao nhiêu là đủ với website của tôi?
        answer: >
          Tùy nhu cầu sử dụng của bạn! Thông thường đối với một **website tin
          tức nhiều ảnh** như mã nguồn **WordPress**, Thì CPU thường là 2 CPU,
          Ram là 4GB và phân vùng hệ thống là 250GB Disk.
      - question: Tôi có phải mất thêm tiền để duy trì dịch vụ không?
        answer: >
          Bạn chỉ cần đăng ký một lần là lần sau không cần phải đóng thêm **phí
          để duy trì các dịch vụ** bạn đã mua mà chúng tôi cung cấp nữa.
    type: section_faq
seo:
  title: Tuan Duc Service - Chuyên cung cấp dịch vụ VPS và Website
  description: >-
    Chuyên cung cấp dịch vụ VPS và Website, Hướng dẫn bảo mật VPS và Website từ
    cơ bản đến nâng cao cho người không chuyên, Hỗ trợ cài đặt VPS,Tối ưu VPS.
  robots: [index, follow]
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Tuan Duc Service - Chuyên cung cấp dịch vụ VPS và Website
      keyName: property
    - name: 'og:description'
      value: >-
        Chuyên cung cấp dịch vụ VPS và Website, Hướng dẫn bảo mật VPS và Website
        từ cơ bản đến nâng cao cho người không chuyên, Hỗ trợ cài đặt VPS,Tối ưu
        VPS.
      keyName: property
    - name: 'og:image'
      value: images/58111AA6-D0D9-4C10-BC6C-068FDAC2CE6D_4_5005_c.jpeg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Tuan Duc Service - Chuyên cung cấp dịch vụ VPS và Website
    - name: 'twitter:description'
      value: >-
        Chuyên cung cấp dịch vụ VPS và Website, Hướng dẫn bảo mật VPS và Website
        từ cơ bản đến nâng cao cho người không chuyên, Hỗ trợ cài đặt VPS,Tối ưu
        VPS.
    - name: 'twitter:image'
      value: images/58111AA6-D0D9-4C10-BC6C-068FDAC2CE6D_4_5005_c.jpeg
      relativeUrl: true
template: landing
---
