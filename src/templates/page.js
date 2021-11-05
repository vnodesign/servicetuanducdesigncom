import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Layout} from '../components/index';
import {htmlToReact, withPrefix} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <Helmet>
              <script type="application/ld+json">
                  {`{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Tuan Duc Service",
                    "alternateName": "Tuan Duc Design",
                    "url": "https://service.tuanducdesign.com",
                    "logo": "https://service.tuanducdesign.com/images/58111AA6-D0D9-4C10-BC6C-068FDAC2CE6D_4_5005_c.jpeg",
                    "sameAs": [
                      "https://www.facebook.com/tuanducdesign",
                      "https://twitter.com/tuanducdesign",
                      "https://instagram.com/mi.profile.56",
                      "https://github.com/tuanducdesign"
                    ]
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                      "@type": "Question",
                      "name": "Tôi nên dùng VPS CentOS, VPS Ubuntu hay Win Server?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Để sử dụng tốt các dịch vụ mà chúng tôi cung cấp. Bạn nên sử dụng VPS CentOS, Trong trường hợp bạn chạy ASP.net. Bạn hãy sử dụng VPS Win Server."
                      }
                    },{
                      "@type": "Question",
                      "name": "Tôi nên sử dụng máy chủ nào cho phù hợp với trang web của tôi?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Để sử dụng tốt các dịch vụ mà chúng tôi cung cấp, Chúng tôi khuyên bạn nên sử dụng máy chủ Nginx hoặc máy chủ LiteSpeed, để đáp ứng mọi nhu cầu, Với máy chủ Apache nó tiêu tốn nhiều tài nguyên hơn, Nên chúng tôi sẽ không hỗ trợ khách hàng tối ưu trên máy chủ này."
                      }
                    },{
                      "@type": "Question",
                      "name": "Cấu hình hệ thống trên Server bao nhiêu là đủ với website của tôi?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tùy nhu cầu sử dụng của bạn! Thông thường đối với một website tin tức nhiều ảnh như mã nguồn WordPress, Thì CPU thường là 2 CPU, Ram là 4GB và phân vùng hệ thống là 250GB Disk."
                      }
                    },{
                      "@type": "Question",
                      "name": "Tôi có phải mất thêm tiền để duy trì dịch vụ không?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Bạn chỉ cần đăng ký một lần là lần sau không cần phải đóng thêm phí để duy trì các dịch vụ bạn đã mua mà chúng tôi cung cấp nữa."
                      }
                    }]
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Tuan Duc Service",
                    "image": "https://service.tuanducdesign.com/images/58111AA6-D0D9-4C10-BC6C-068FDAC2CE6D_4_5005_c.jpeg",
                    "@id": "https://service.tuanducdesign.com/images/58111AA6-D0D9-4C10-BC6C-068FDAC2CE6D_4_5005_c.jpeg",
                    "url": "https://service.tuanducdesign.com",
                    "telephone": "0388842026",
                    "priceRange": "VNĐ",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Cầu Am, Yết Kiêu, Hà Đông",
                      "addressLocality": "Hà Nội",
                      "postalCode": "100000",
                      "addressCountry": "VN"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 20.9757157,
                      "longitude": 105.7768446
                    },
                    "openingHoursSpecification": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                      ],
                      "opens": "07:00",
                      "closes": "22:00"
                    },
                    "sameAs": [
                      "https://www.facebook.com/tuanducdesign",
                      "https://twitter.com/tuanducdesign",
                      "https://instagram.com/mi.profile.56",
                      "https://github.com/tuanducdesign"
                    ] 
                  }`}
              </script>
              </Helmet>
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                    </div>
                    )}
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                  <div className="post-image">
                    <LazyLoadImage alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} effect="blur" src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} />
                  </div>
                  )}
                  <div className="post-content">
                    {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
