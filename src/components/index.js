import loadable from '@loadable/component';
import Action from './Action';
import ActionLink from './ActionLink';
//import BlogPostFooter from './BlogPostFooter';
import CtaButtons from './CtaButtons';
const Footer = loadable(() =>
  import(/* webpackPrefetch: true */ './Footer')
);
//import Footer from './Footer';
import FooterForm from './FooterForm';
import FooterNav from './FooterNav';
const FooterText = loadable(() =>
  import(/* webpackPrefetch: true */ './FooterText')
);
//import FooterText from './FooterText';
import FormField from './FormField';
import Header from './Header';
import Icon from './Icon';
import SectionContact from './SectionContact';
const SectionContent = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionContent')
);
//import SectionContent from './SectionContent';
import SectionCta from './SectionCta';
import SectionFaq from './SectionFaq';
const SectionFeatures = loadable(() =>
  import(/* webpackPrefetch: true */ './SectionFeatures')
);
//import SectionFeatures from './SectionFeatures';
import SectionHero from './SectionHero';
//import SectionPosts from './SectionPosts';
import SectionPricing from './SectionPricing';
//import SectionReviews from './SectionReviews';
import Layout from './Layout';

export {
    Action,
    ActionLink,
    //BlogPostFooter,
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
    //SectionPosts,
    SectionPricing,
    //SectionReviews,
    Layout
};

export default {
    Action,
    ActionLink,
    //BlogPostFooter,
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
    //SectionPosts,
    SectionPricing,
    //SectionReviews,
    Layout
};
