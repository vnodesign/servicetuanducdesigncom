import loadable from '@loadable/component';
const Action = loadable(() =>
  import(/* webpackPrefetch: true */ './Action')
);
//import Action from './Action';
const ActionLink = loadable(() =>
  import(/* webpackPrefetch: true */ './ActionLink')
);
//import ActionLink from './ActionLink';
const BlogPostFooter = loadable(() =>
  import(/* webpackPrefetch: true */ './BlogPostFooter')
);
//import BlogPostFooter from './BlogPostFooter';
const CtaButtons = loadable(() =>
  import(/* webpackPrefetch: true */ './CtaButtons')
);
//import CtaButtons from './CtaButtons';
const Footer = loadable(() =>
  import(/* webpackPrefetch: true */ './Footer')
);
//import Footer from './Footer';
const FooterForm = loadable(() =>
  import(/* webpackPrefetch: true */ './FooterForm')
);
//import FooterForm from './FooterForm';
const FooterNav = loadable(() =>
  import(/* webpackPrefetch: true */ './FooterNav')
);
//import FooterNav from './FooterNav';
const FooterText = loadable(() =>
  import(/* webpackPrefetch: true */ './FooterText')
);
//import FooterText from './FooterText';
const FormField = loadable(() =>
  import(/* webpackPrefetch: true */ './FormField')
);
//import FormField from './FormField';
const Header = loadable(() =>
  import(/* webpackPrefetch: true */ './Header')
);
//import Header from './Header';
const Icon = loadable(() =>
  import(/* webpackPrefetch: true */ './Icon')
);
//import Icon from './Icon';
const SectionContact = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionContact')
);
//import SectionContact from './SectionContact';
const SectionContent = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionContent')
);
//import SectionContent from './SectionContent';
const SectionCta = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionCta')
);
//import SectionCta from './SectionCta';
import SectionFaq from './SectionFaq';
const SectionFeatures = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionFeatures')
);
//import SectionFeatures from './SectionFeatures';
const SectionHero = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionHero')
);
//import SectionHero from './SectionHero';
const SectionPosts = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionPosts')
);
//import SectionPosts from './SectionPosts';
const SectionPricing = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionPricing')
);
//import SectionPricing from './SectionPricing';
const SectionReviews = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionReviews')
);
//import SectionReviews from './SectionReviews';
import Layout from './Layout';

export {
    Action,
    ActionLink,
    BlogPostFooter,
    CtaButtons,
    Footer,
    FooterForm,
    FooterNav,
    FooterText,
    FormField,
    Header,
    Icon,
    SectionContact,
    SectionContent,
    SectionCta,
    SectionFaq,
    SectionFeatures,
    SectionHero,
    SectionPosts,
    SectionPricing,
    SectionReviews,
    Layout
};

export default {
    Action,
    ActionLink,
    BlogPostFooter,
    CtaButtons,
    Footer,
    FooterForm,
    FooterNav,
    FooterText,
    FormField,
    Header,
    Icon,
    SectionContact,
    SectionContent,
    SectionCta,
    SectionFaq,
    SectionFeatures,
    SectionHero,
    SectionPosts,
    SectionPricing,
    SectionReviews,
    Layout
};
