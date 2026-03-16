import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav_about: 'About Us',
    nav_philosophy: 'Investment Philosophy',
    nav_portfolio: 'Portfolio',
    nav_team: 'Team',
    nav_recruitment: 'Opportunities',
    nav_contact: 'Contact Us',

    hero_title: 'Investing in Hong Kong\'s Future',
    hero_subtitle: 'Partnering with SMEs in Hong Kong to create sustainable growth and lasting value',
    hero_cta: 'Learn More',

    about_title: 'About Us',
    about_text_1: 'Barbatos Limited is a private equity investment firm focused on partnering with small and medium-sized enterprises in Hong Kong.',
    about_text_2: 'Our mission is to identify promising SMEs, provide strategic capital and operational support, and help them achieve their full potential.',
    about_text_3: 'With deep expertise across various industries and a commitment to long-term partnerships, we work closely with management teams to drive sustainable growth and create lasting value.',

    philosophy_title: 'Investment Philosophy',
    philosophy_subtitle: 'Our Approach to Value Creation',
    philosophy_1_title: 'Long-term Partnership',
    philosophy_1_text: 'We invest with a long-term perspective, working closely with management teams to build sustainable businesses.',
    philosophy_2_title: 'Operational Excellence',
    philosophy_2_text: 'We combine financial resources with operational expertise to drive meaningful improvements.',
    philosophy_3_title: 'Local Expertise',
    philosophy_3_text: 'We leverage our deep understanding of the Hong Kong market to identify opportunities and navigate challenges.',

    portfolio_title: 'Portfolio',
    portfolio_subtitle: 'Companies we have invested in and partnered with',
    portfolio_company_1: 'Clinicon Medical Limited',
    portfolio_company_2: 'Coming Soon',

    team_title: 'Our Team',
    team_subtitle: 'Experienced professionals with deep industry knowledge',

    recruitment_title: 'Join Our Team',
    recruitment_subtitle: 'We are always looking for talented individuals who share our vision',
    recruitment_text: 'If you are passionate about Hong Kong\'s business landscape, value creation, and building lasting partnerships, we want to hear from you.',
    recruitment_cta: 'View Opportunities',

    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch to learn more about our investment approach',
    contact_name: 'Name',
    contact_email: 'Email',
    contact_company: 'Company',
    contact_message: 'Message',
    contact_send: 'Send Message',
    contact_office: 'Office',
    contact_email_label: 'Email',

    footer_rights: 'All rights reserved.',
  },
  zh: {
    nav_about: '關於我們',
    nav_philosophy: '投資理念',
    nav_portfolio: '投資組合',
    nav_team: '團隊',
    nav_recruitment: '招聘資訊',
    nav_contact: '聯絡我們',

    hero_title: '投資香港未來',
    hero_subtitle: '與香港中小企業攜手合作，創造可持續增長和長遠價值',
    hero_cta: '了解更多',

    about_title: '關於我們',
    about_text_1: 'Barbatos Limited 是一家專注於與香港中小企業合作的私募股權投資公司。',
    about_text_2: '我們的使命是發掘具潛力的中小企業，提供策略性資本和營運支援，協助他們發揮最大潛力。',
    about_text_3: '憑藉跨行業的深厚專業知識和對長期合作的承諾，我們與管理團隊緊密合作，推動可持續增長並創造長遠價值。',

    philosophy_title: '投資理念',
    philosophy_subtitle: '我們的價值創造方式',
    philosophy_1_title: '長期合作夥伴',
    philosophy_1_text: '我們以長遠角度進行投資，與管理團隊緊密合作，建立可持續發展的業務。',
    philosophy_2_title: '卓越營運',
    philosophy_2_text: '我們結合財務資源與營運專業知識，推動切實的改進。',
    philosophy_3_title: '本地專業知識',
    philosophy_3_text: '我們運用對香港市場的深入了解，發掘機遇並應對挑戰。',

    portfolio_title: '投資組合',
    portfolio_subtitle: '我們投資及合作的公司',
    portfolio_company_1: 'Clinicon Medical Limited',
    portfolio_company_2: '敬請期待',

    team_title: '我們的團隊',
    team_subtitle: '擁有深厚行業知識的資深專業人員',

    recruitment_title: '加入我們',
    recruitment_subtitle: '我們一直在尋找志同道合的優秀人才',
    recruitment_text: '如果您對香港商業環境、價值創造和建立長遠合作夥伴關係充滿熱誠，我們期待您的加入。',
    recruitment_cta: '查看職位',

    contact_title: '聯絡我們',
    contact_subtitle: '歡迎聯絡我們了解更多投資方針',
    contact_name: '姓名',
    contact_email: '電郵',
    contact_company: '公司名稱',
    contact_message: '訊息',
    contact_send: '發送訊息',
    contact_office: '辦公室',
    contact_email_label: '電郵',

    footer_rights: '版權所有。',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
