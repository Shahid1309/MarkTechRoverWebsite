import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load all pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const WhoAreWePage = lazy(() => import('./pages/WhoAreWePage'));

// Lazy load service pages - SEO & Lead Generation
const SeoServicesPage = lazy(() => import('./pages/services/seo-lead-generation/SeoServicesPage'));
const EnterpriseSeoServices = lazy(() => import('./pages/services/seo-lead-generation/EnterpriseSeoServices'));
const DigitalMarketingServices = lazy(() => import('./pages/services/seo-lead-generation/DigitalMarketingServices'));
const LocalSeoServices = lazy(() => import('./pages/services/seo-lead-generation/LocalSeoServices'));
const LocalSeoServicesPage = lazy(() => import('./pages/services/seo-lead-generation/LocalSeoServicesPage'));
const LocalServicesAds = lazy(() => import('./pages/services/seo-lead-generation/LocalServicesAds'));
const SeoAudits = lazy(() => import('./pages/services/seo-lead-generation/SeoAudits'));
const ChatOptimization = lazy(() => import('./pages/services/seo-lead-generation/ChatOptimization'));
const PPCManagementServices = lazy(() => import('./pages/services/seo-lead-generation/PPCManagementServices'));
const EnterprisePPC = lazy(() => import('./pages/services/seo-lead-generation/EnterprisePPC'));
const SocialMediaAds = lazy(() => import('./pages/services/seo-lead-generation/SocialMediaAds'));
const EnterpriseSocialAds = lazy(() => import('./pages/services/seo-lead-generation/EnterpriseSocialAds'));
const ProgrammaticAds = lazy(() => import('./pages/services/seo-lead-generation/ProgrammaticAds'));
const Geofencing = lazy(() => import('./pages/services/seo-lead-generation/Geofencing'));
const ConnectedTV = lazy(() => import('./pages/services/seo-lead-generation/ConnectedTV'));
const EcommerceSEO = lazy(() => import('./pages/services/seo-lead-generation/EcommerceSEO'));
const EcommercePPC = lazy(() => import('./pages/services/seo-lead-generation/EcommercePPC'));
const EcommerceSocial = lazy(() => import('./pages/services/seo-lead-generation/EcommerceSocial'));
const B2BEcommerce = lazy(() => import('./pages/services/seo-lead-generation/B2BEcommerce'));
const ShoppingFeeds = lazy(() => import('./pages/services/seo-lead-generation/ShoppingFeeds'));
const EcommerceMarketing = lazy(() => import('./pages/services/seo-lead-generation/EcommerceMarketing'));
const EcommerceResources = lazy(() => import('./pages/services/seo-lead-generation/EcommerceResources'));

// Lazy load service pages - Revenue Marketing & CRO
const WebChannelCallTracking = lazy(() => import('./pages/services/revenue-marketing-cro/WebChannelCallTracking'));
const SeoReportingForecasting = lazy(() => import('./pages/services/revenue-marketing-cro/SeoReportingForecasting'));
const ChannelAttribution = lazy(() => import('./pages/services/revenue-marketing-cro/ChannelAttribution'));
const CompetitorAnalysis = lazy(() => import('./pages/services/revenue-marketing-cro/CompetitorAnalysis'));
const ConversionRateOptimization = lazy(() => import('./pages/services/revenue-marketing-cro/ConversionRateOptimization'));
const EmailMarketingManagement = lazy(() => import('./pages/services/revenue-marketing-cro/EmailMarketingManagement'));
const FacebookMarketplace = lazy(() => import('./pages/services/revenue-marketing-cro/FacebookMarketplace'));
const InfluencerMarketing = lazy(() => import('./pages/services/revenue-marketing-cro/InfluencerMarketing'));
const LandingPagesFunnels = lazy(() => import('./pages/services/revenue-marketing-cro/LandingPagesFunnels'));
const LeadNurtureEmail = lazy(() => import('./pages/services/revenue-marketing-cro/LeadNurtureEmail'));
const MicrosoftDynamicsAutomation = lazy(() => import('./pages/services/revenue-marketing-cro/MicrosoftDynamicsAutomation'));
const OnlineReviewAcceleration = lazy(() => import('./pages/services/revenue-marketing-cro/OnlineReviewAcceleration'));
const PrivateEquityDueDiligence = lazy(() => import('./pages/services/revenue-marketing-cro/PrivateEquityDueDiligence'));
const RecruitingMarketing = lazy(() => import('./pages/services/revenue-marketing-cro/RecruitingMarketing'));
const RevenueOperations = lazy(() => import('./pages/services/revenue-marketing-cro/RevenueOperations'));
const SalesforceMarketingAutomation = lazy(() => import('./pages/services/revenue-marketing-cro/SalesforceMarketingAutomation'));
const ShopifyOptimization = lazy(() => import('./pages/services/revenue-marketing-cro/ShopifyOptimization'));
const UXTesting = lazy(() => import('./pages/services/revenue-marketing-cro/UXTesting'));
const WalmartMarketplace = lazy(() => import('./pages/services/revenue-marketing-cro/WalmartMarketplace'));
const WebsitePersonalization = lazy(() => import('./pages/services/revenue-marketing-cro/WebsitePersonalization'));
const AccountBasedMarketing = lazy(() => import('./pages/services/revenue-marketing-cro/AccountBasedMarketing'));
const AmazonAdvertising = lazy(() => import('./pages/services/revenue-marketing-cro/AmazonAdvertising'));
const AmazonSEO = lazy(() => import('./pages/services/revenue-marketing-cro/AmazonSEO'));
const ChannelPartnerPipeline = lazy(() => import('./pages/services/revenue-marketing-cro/ChannelPartnerPipeline'));

// Lazy load service pages - AI Technology
const AIAdEditing = lazy(() => import('./pages/services/ai-technology/AIAdEditing'));
const AIAdGeneration = lazy(() => import('./pages/services/ai-technology/AIAdGeneration'));
const AIConsulting = lazy(() => import('./pages/services/ai-technology/AIConsulting'));
const AIContentCreation = lazy(() => import('./pages/services/ai-technology/AIContentCreation'));
const AICostGuide = lazy(() => import('./pages/services/ai-technology/AICostGuide'));
const AIDigitalMarketing = lazy(() => import('./pages/services/ai-technology/AIDigitalMarketing'));
const AIGPTIntegrationTech = lazy(() => import('./pages/services/ai-technology/AIGPTIntegrationTech'));
const AISeoServices = lazy(() => import('./pages/services/ai-technology/AISeoServices'));
const AISoftwareDevelopment = lazy(() => import('./pages/services/ai-technology/AISoftwareDevelopment'));
const AIVideoProduction = lazy(() => import('./pages/services/ai-technology/AIVideoProduction'));
const AIWebsiteGeneration = lazy(() => import('./pages/services/ai-technology/AIWebsiteGeneration'));
const ClosedLoopAnalytics = lazy(() => import('./pages/services/ai-technology/ClosedLoopAnalytics'));
const ContactEnrichment = lazy(() => import('./pages/services/ai-technology/ContactEnrichment'));
const CRMIntegrations = lazy(() => import('./pages/services/ai-technology/CRMIntegrations'));
const CRMRetargeting = lazy(() => import('./pages/services/ai-technology/CRMRetargeting'));
const CustomerDataPlatform = lazy(() => import('./pages/services/ai-technology/CustomerDataPlatform'));
const DataDrivenMarketingGuide = lazy(() => import('./pages/services/ai-technology/DataDrivenMarketingGuide'));
const HowToWriteAIPrompts = lazy(() => import('./pages/services/ai-technology/HowToWriteAIPrompts'));
const LeadManagementScheduling = lazy(() => import('./pages/services/ai-technology/LeadManagementScheduling'));
const RevenueCloudFXPlatform = lazy(() => import('./pages/services/ai-technology/RevenueCloudFXPlatform'));
const TrackAISearchVisibility = lazy(() => import('./pages/services/ai-technology/TrackAISearchVisibility'));
const WhatAreCRMIntegrations = lazy(() => import('./pages/services/ai-technology/WhatAreCRMIntegrations'));
const WhatIsAIMarketing = lazy(() => import('./pages/services/ai-technology/WhatIsAIMarketing'));
const WhatIsCRM = lazy(() => import('./pages/services/ai-technology/WhatIsCRM'));

// Lazy load service pages - UX & Interactive
const UxInteractivePage = lazy(() => import('./pages/services/UxInteractivePage'));

// Lazy load case studies
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const ChumbakCaseStudy = lazy(() => import('./pages/case-studies/ChumbakCaseStudy'));
const DentinicsCaseStudy = lazy(() => import('./pages/case-studies/DentinicsCaseStudy'));
const IDesignCaseStudy = lazy(() => import('./pages/case-studies/IDesignCaseStudy'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
          <Route path="/calculator" element={<Layout><CalculatorPage /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicyPage /></Layout>} />
          <Route path="/who-are-we" element={<Layout><WhoAreWePage /></Layout>} />
          
          {/* Service Pages - SEO & Lead Generation */}
          <Route path="/services/seo-lead-generation" element={<Layout><SeoServicesPage /></Layout>} />
          <Route path="/services/seo-lead-generation/seo-services" element={<Layout><SeoServicesPage /></Layout>} />
          <Route path="/services/enterprise-seo" element={<Layout><EnterpriseSeoServices /></Layout>} />
          <Route path="/services/digital-marketing" element={<Layout><DigitalMarketingServices /></Layout>} />
          <Route path="/services/local-seo" element={<Layout><LocalSeoServices /></Layout>} />
          <Route path="/services/local-seo-services" element={<Layout><LocalSeoServicesPage /></Layout>} />
          <Route path="/services/local-services-ads" element={<Layout><LocalServicesAds /></Layout>} />
          <Route path="/services/seo-audits" element={<Layout><SeoAudits /></Layout>} />
          <Route path="/services/chat-optimization" element={<Layout><ChatOptimization /></Layout>} />
          <Route path="/services/seo-lead-generation/ppc-management" element={<Layout><PPCManagementServices /></Layout>} />
          <Route path="/services/ppc-management" element={<Navigate to="/services/seo-lead-generation/ppc-management" replace />} />
          <Route path="/services/seo-lead-generation/enterprise-ppc" element={<Layout><EnterprisePPC /></Layout>} />
          <Route path="/services/enterprise-ppc" element={<Navigate to="/services/seo-lead-generation/enterprise-ppc" replace />} />
          <Route path="/services/seo-lead-generation/social-media-ads" element={<Layout><SocialMediaAds /></Layout>} />
          <Route path="/services/social-media-ads" element={<Navigate to="/services/seo-lead-generation/social-media-ads" replace />} />
          <Route path="/services/seo-lead-generation/enterprise-social-ads" element={<Layout><EnterpriseSocialAds /></Layout>} />
          <Route path="/services/enterprise-social-ads" element={<Navigate to="/services/seo-lead-generation/enterprise-social-ads" replace />} />
          <Route path="/services/programmatic-ads" element={<Layout><ProgrammaticAds /></Layout>} />
          <Route path="/services/geofencing" element={<Layout><Geofencing /></Layout>} />
          <Route path="/services/connected-tv" element={<Layout><ConnectedTV /></Layout>} />
          <Route path="/services/seo-lead-generation/ecommerce-seo" element={<Layout><EcommerceSEO /></Layout>} />
          <Route path="/services/ecommerce-seo" element={<Navigate to="/services/seo-lead-generation/ecommerce-seo" replace />} />
          <Route path="/services/seo-lead-generation/ecommerce-ppc" element={<Layout><EcommercePPC /></Layout>} />
          <Route path="/services/ecommerce-ppc" element={<Navigate to="/services/seo-lead-generation/ecommerce-ppc" replace />} />
          <Route path="/services/seo-lead-generation/ecommerce-social" element={<Layout><EcommerceSocial /></Layout>} />
          <Route path="/services/ecommerce-social" element={<Navigate to="/services/seo-lead-generation/ecommerce-social" replace />} />
          <Route path="/services/seo-lead-generation/b2b-ecommerce" element={<Layout><B2BEcommerce /></Layout>} />
          <Route path="/services/b2b-ecommerce" element={<Navigate to="/services/seo-lead-generation/b2b-ecommerce" replace />} />
          <Route path="/services/shopping-feeds" element={<Layout><ShoppingFeeds /></Layout>} />
          <Route path="/services/ecommerce-marketing" element={<Layout><EcommerceMarketing /></Layout>} />
          <Route path="/services/ecommerce-resources" element={<Layout><EcommerceResources /></Layout>} />
          
          {/* Service Pages - Revenue Marketing & CRO */}
          <Route path="/services/web-channel-call-tracking" element={<Layout><WebChannelCallTracking /></Layout>} />
          <Route path="/services/seo-reporting-forecasting" element={<Layout><SeoReportingForecasting /></Layout>} />
          <Route path="/services/channel-attribution" element={<Layout><ChannelAttribution /></Layout>} />
          <Route path="/services/competitor-analysis" element={<Layout><CompetitorAnalysis /></Layout>} />
          <Route path="/services/conversion-rate-optimization" element={<Layout><ConversionRateOptimization /></Layout>} />
          <Route path="/services/email-marketing-management" element={<Layout><EmailMarketingManagement /></Layout>} />
          <Route path="/services/facebook-marketplace" element={<Layout><FacebookMarketplace /></Layout>} />
          <Route path="/services/influencer-marketing" element={<Layout><InfluencerMarketing /></Layout>} />
          <Route path="/services/landing-pages-funnels" element={<Layout><LandingPagesFunnels /></Layout>} />
          <Route path="/services/lead-nurture-email" element={<Layout><LeadNurtureEmail /></Layout>} />
          <Route path="/services/microsoft-dynamics-automation" element={<Layout><MicrosoftDynamicsAutomation /></Layout>} />
          <Route path="/services/online-review-acceleration" element={<Layout><OnlineReviewAcceleration /></Layout>} />
          <Route path="/services/private-equity-due-diligence" element={<Layout><PrivateEquityDueDiligence /></Layout>} />
          <Route path="/services/recruiting-marketing" element={<Layout><RecruitingMarketing /></Layout>} />
          <Route path="/services/revenue-operations" element={<Layout><RevenueOperations /></Layout>} />
          <Route path="/services/salesforce-marketing-automation" element={<Layout><SalesforceMarketingAutomation /></Layout>} />
          <Route path="/services/shopify-optimization" element={<Layout><ShopifyOptimization /></Layout>} />
          <Route path="/services/ux-testing" element={<Layout><UXTesting /></Layout>} />
          <Route path="/services/walmart-marketplace" element={<Layout><WalmartMarketplace /></Layout>} />
          <Route path="/services/website-personalization" element={<Layout><WebsitePersonalization /></Layout>} />
          <Route path="/services/account-based-marketing" element={<Layout><AccountBasedMarketing /></Layout>} />
          <Route path="/services/amazon-advertising" element={<Layout><AmazonAdvertising /></Layout>} />
          <Route path="/services/amazon-seo" element={<Layout><AmazonSEO /></Layout>} />
          <Route path="/services/channel-partner-pipeline" element={<Layout><ChannelPartnerPipeline /></Layout>} />
          
          {/* Service Pages - AI Technology */}
          <Route path="/services/ai-ad-editing" element={<Layout><AIAdEditing /></Layout>} />
          <Route path="/services/ai-ad-generation" element={<Layout><AIAdGeneration /></Layout>} />
          <Route path="/services/ai-consulting" element={<Layout><AIConsulting /></Layout>} />
          <Route path="/services/ai-content-creation" element={<Layout><AIContentCreation /></Layout>} />
          <Route path="/services/ai-cost-guide" element={<Layout><AICostGuide /></Layout>} />
          <Route path="/services/ai-digital-marketing" element={<Layout><AIDigitalMarketing /></Layout>} />
          <Route path="/services/ai-gpt-integration-tech" element={<Layout><AIGPTIntegrationTech /></Layout>} />
          <Route path="/services/ai-seo-services" element={<Layout><AISeoServices /></Layout>} />
          <Route path="/services/ai-software-development" element={<Layout><AISoftwareDevelopment /></Layout>} />
          <Route path="/services/ai-video-production" element={<Layout><AIVideoProduction /></Layout>} />
          <Route path="/services/ai-website-generation" element={<Layout><AIWebsiteGeneration /></Layout>} />
          <Route path="/services/closed-loop-analytics" element={<Layout><ClosedLoopAnalytics /></Layout>} />
          <Route path="/services/contact-enrichment" element={<Layout><ContactEnrichment /></Layout>} />
          <Route path="/services/crm-integrations" element={<Layout><CRMIntegrations /></Layout>} />
          <Route path="/services/crm-retargeting" element={<Layout><CRMRetargeting /></Layout>} />
          <Route path="/services/customer-data-platform" element={<Layout><CustomerDataPlatform /></Layout>} />
          <Route path="/services/data-driven-marketing-guide" element={<Layout><DataDrivenMarketingGuide /></Layout>} />
          <Route path="/services/how-to-write-ai-prompts" element={<Layout><HowToWriteAIPrompts /></Layout>} />
          <Route path="/services/lead-management-scheduling" element={<Layout><LeadManagementScheduling /></Layout>} />
          <Route path="/services/revenue-cloud-fx-platform" element={<Layout><RevenueCloudFXPlatform /></Layout>} />
          <Route path="/services/track-ai-search-visibility" element={<Layout><TrackAISearchVisibility /></Layout>} />
          <Route path="/services/what-are-crm-integrations" element={<Layout><WhatAreCRMIntegrations /></Layout>} />
          <Route path="/services/what-is-ai-marketing" element={<Layout><WhatIsAIMarketing /></Layout>} />
          <Route path="/services/what-is-crm" element={<Layout><WhatIsCRM /></Layout>} />
          
          {/* Service Pages - UX & Interactive */}
          <Route path="/services/ux-interactive" element={<Layout><UxInteractivePage /></Layout>} />
          
          {/* Case Studies */}
          <Route path="/case-studies" element={<Layout><CaseStudyPage /></Layout>} />
          <Route path="/case-studies/chumbak" element={<Layout><ChumbakCaseStudy /></Layout>} />
          <Route path="/case-studies/dentinics" element={<Layout><DentinicsCaseStudy /></Layout>} />
          <Route path="/case-studies/idesign" element={<Layout><IDesignCaseStudy /></Layout>} />
          
          {/* 404 */}
          <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;