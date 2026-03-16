import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin } from 'lucide-react';

export function Team() {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      name: language === 'en' ? 'Lucien Cheung' : '張蒲劍',
      role: language === 'en' ? 'Managing Partner' : '執行合夥人',
      image: '/WhatsApp_Image_2025-04-10_at_15.26.09.jpeg',
      bio: language === 'en'
        ? 'Lucien is a Managing Partner & Co-Founder at Barbatos Limited.\n\nPrior to Barbatos, Lucien was an Executive Director and founding investment team member at Keyrock Capital Management in Hong Kong.\n\nBefore Keyrock, Lucien was an Investment Professional at Castik Capital Partners in Munich. Lucien started his career in investment banking with Citi in London.\n\nLucien holds a B.Sc. in Economics and Management from the University of Bristol.'
        : 'Lucien 是巴巴托斯有限公司的共同創辦人兼執行合夥人。\n\n在加入 Barbatos 之前，Lucien 曾在香港 Keyrock Capital Management 擔任執行董事及創始投資團隊成員。\n\n在 Keyrock 之前，Lucien 曾在慕尼黑的 Castik Capital Partners 擔任投資專業人員。Lucien 的職業生涯始於倫敦花旗集團的投資銀行業務。\n\nLucien 持有布里斯托大學經濟及管理學理學士學位。',
      linkedin: 'https://www.linkedin.com/in/luciencheung'
    },
    {
      name: language === 'en' ? 'Justin Leung' : 'Justin Leung',
      role: language === 'en' ? 'Managing Partner' : '執行合夥人',
      image: '/Justin_Leung.jpg',
      bio: language === 'en'
        ? 'Justin is a Managing Partner & Co-Founder at Barbatos Limited.\n\nPrior to Barbatos, Justin has held various roles in the digital assets space, including at Huobi Global, Coinsuper and OKEx. He has also founded various businesses.\n\nJustin started his career with Citibank in Hong Kong.\n\nJustin holds a Bachelor\'s from the University of Alberta and a Master\'s degree from the University of Wales.'
        : 'Justin 是巴巴托斯有限公司的共同創辦人兼執行合夥人。\n\n在加入 Barbatos 之前，Justin 曾在數字資產領域擔任多個職位，包括在 Huobi Global、Coinsuper 和 OKEx。他亦創辦了多項業務。\n\nJustin 的職業生涯始於香港花旗銀行。\n\nJustin 持有阿爾伯塔大學學士學位及威爾斯大學碩士學位。',
      linkedin: 'https://www.linkedin.com/in/justin-leung-227b0875/'
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('team_title')}
          </h2>
          <p className="text-xl text-slate-600">{t('team_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] p-2 rounded hover:bg-[#004182] transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                </div>
                <p className="text-lg text-slate-600 mb-4 font-medium">{member.role}</p>
                {member.bio && (
                  <div className="border-t border-slate-200 pt-4">
                    <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
