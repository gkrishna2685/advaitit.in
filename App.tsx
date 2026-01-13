
import React, { useState } from 'react';
import Layout from './components/Layout';
import { Page } from './types';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'it-services':
        return <ITServicesPage onNavigate={setCurrentPage} />;
      case 'hr-services':
        return <HRServicesPage onNavigate={setCurrentPage} />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderContent()}
      <AIChatBot />
    </Layout>
  );
};

// --- HOME PAGE COMPONENT ---
const HomePage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-[120px] -z-10 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Complete IT Infrastructure & <span className="text-indigo-600">Manpower Solutions</span>
              </h1>
              <p className="text-xl text-indigo-700 font-semibold mb-6">
                IT Rentals | Repairs | AMC | IT & Non-IT Staffing
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                Your trusted technology and workforce partner delivering reliable, scalable, and cost-effective IT and manpower solutions across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center group"
                >
                  Get a Free Consultation
                  <i className="fas fa-calendar-alt ml-2"></i>
                </button>
                <button 
                  onClick={() => onNavigate('case-studies')}
                  className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-100 rounded-xl font-bold hover:border-indigo-600 transition-all"
                >
                  View Success Stories
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573161158521-80325507c57e?auto=format&fit=crop&w=800&q=80" 
                alt="Advait Infotech Hero" 
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-indigo-50">
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl">
                  <i className="fas fa-microchip"></i>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg tracking-tight">Integrated Excellence</div>
                  <div className="text-sm text-slate-500 font-medium italic">Technology & Talent Combined</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8">Powering Business Growth Through <span className="text-indigo-600">Technology & Talent</span></h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Advait Infotech is a professionally managed organization delivering end-to-end IT infrastructure services combined with strategic IT and Non-IT manpower staffing solutions.
                </p>
                <p>
                  We help businesses reduce operational costs, improve efficiency, and maintain uninterrupted operations through a reliable and responsive service delivery model.
                </p>
                <p>
                  Our integrated approach eliminates the complexity of managing multiple vendors while ensuring consistent quality across all technology and workforce touchpoints.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">99%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Service Uptime</div>
              </div>
              <div className="bg-slate-900 p-8 rounded-3xl flex flex-col items-center justify-center text-center text-white">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Deployments</div>
              </div>
              <div className="bg-slate-100 p-8 rounded-3xl flex flex-col items-center justify-center text-center col-span-2">
                <div className="text-3xl font-bold text-slate-800 mb-2">Pan-India</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Service Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED SERVICE MODEL */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">One Partner. Complete Responsibility.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">This dual-service model simplifies vendor management, reduces administrative overhead, and delivers measurable business value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-transparent hover:border-indigo-100 transition-all">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-8">
                <i className="fas fa-server"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">IT Infrastructure Solutions</h3>
              <p className="text-slate-600 mb-6">Complete hardware lifecycle management including rentals, sales, repairs, AMC, networking, servers, and helpdesk support.</p>
              <button onClick={() => onNavigate('it-services')} className="text-indigo-600 font-bold flex items-center hover:translate-x-1 transition-transform">
                Explore Tech Solutions <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-transparent hover:border-indigo-100 transition-all">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl mb-8">
                <i className="fas fa-user-check"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">IT & Non-IT Staffing</h3>
              <p className="text-slate-600 mb-6">Skilled, verified professionals across technical and operational roles, available for immediate deployment.</p>
              <button onClick={() => onNavigate('hr-services')} className="text-indigo-600 font-bold flex items-center hover:translate-x-1 transition-transform">
                Explore Workforce <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. BUSINESS BENEFITS */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-extrabold mb-8">What Our <span className="text-indigo-600">Clients Gain</span></h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { icon: 'fa-dollar-sign', title: 'Lower Costs', desc: 'IT and staffing costs optimized for efficiency.' },
                   { icon: 'fa-rocket', title: 'Operational Efficiency', desc: 'Streamlined workflows and tech stacks.' },
                   { icon: 'fa-bolt', title: 'Faster Resolution', desc: 'Rapid technical and hiring response.' },
                   { icon: 'fa-project-diagram', title: 'Simplified Vendor MGMT', desc: 'One point of contact for everything.' }
                 ].map((item, idx) => (
                   <div key={idx} className="flex flex-col gap-3">
                     <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center"><i className={`fas ${item.icon}`}></i></div>
                     <h4 className="font-bold text-slate-900">{item.title}</h4>
                     <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
             <div className="bg-slate-900 rounded-[40px] p-12 text-white">
                <h3 className="text-2xl font-bold mb-8 italic text-indigo-300">"Our Mission"</h3>
                <p className="text-xl leading-relaxed mb-12 opacity-90">
                  To deliver reliable, scalable, and cost-efficient IT and staffing services that enable sustainable business growth.
                </p>
                <div className="h-px bg-white/10 w-full mb-8"></div>
                <h3 className="text-xl font-bold mb-4 text-indigo-300 tracking-wider uppercase text-sm">Our Vision</h3>
                <p className="text-slate-400">To become the most trusted partner for IT infrastructure and manpower solutions across India.</p>
             </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

// --- CASE STUDIES PAGE ---
const CaseStudiesPage: React.FC = () => {
  const cases = [
    {
      type: 'IT Infrastructure',
      title: 'Scalable Fintech Hardware Deployment',
      client: 'Major Fintech Start-up',
      challenge: 'Client needed 200+ high-end laptops deployed across 3 cities within 48 hours for a new product launch team.',
      solution: 'Leveraged Advait\'s agile rental inventory and pre-configured imaging services to stage and ship assets within 12 hours of contract signing.',
      result: '100% on-time deployment. Client avoided 40% initial CapEx costs through our OpEx rental model.',
      icon: 'fa-laptop-code',
      color: 'indigo'
    },
    {
      type: 'Manpower Staffing',
      title: 'Rapid Technical Team Expansion',
      client: 'Multinational BPO Provider',
      challenge: 'Requirement for 50 L1 Technical Support Engineers with specialized networking knowledge during peak seasonal ramp-up.',
      solution: 'Used our proprietary database and intensive screening process to shortlist and deploy verified candidates within 10 days.',
      result: 'Zero churn in the first 90 days. Improved client\'s support ticket resolution rate by 25%.',
      icon: 'fa-users-cog',
      color: 'slate-900'
    },
    {
      type: 'IT Infrastructure & AMC',
      title: 'Uptime Optimization for Manufacturing',
      client: 'Industrial Components Manufacturer',
      challenge: 'Frequent downtime of shop-floor inventory systems leading to production delays.',
      solution: 'Implementation of a 24/7 AMC with on-site hardware redundancy and scheduled preventive maintenance cycles.',
      result: 'Achieved 99.95% system uptime over 12 months. Production efficiency increased by 15%.',
      icon: 'fa-industry',
      color: 'indigo'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="pt-32 pb-20 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">Proven Success <span className="text-indigo-500">Stories</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">See how Advait Infotech helps businesses overcome challenges through integrated tech and talent solutions.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {cases.map((cs, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-indigo-100 text-indigo-700`}>
                    {cs.type}
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6">{cs.title}</h2>
                  <p className="text-indigo-600 font-bold mb-6">Client: {cs.client}</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">The Challenge</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Our Solution</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-xs font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-green-700">The Result</h4>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold italic">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className={`aspect-square rounded-[60px] bg-slate-100 flex items-center justify-center relative overflow-hidden group`}>
                     <i className={`fas ${cs.icon} text-[180px] text-slate-200 group-hover:scale-110 group-hover:text-indigo-200 transition-all duration-700`}></i>
                     <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to be our next success story?</h2>
          <p className="text-slate-600 mb-10">Connect with our consultants today for a customized infrastructure or manpower assessment.</p>
          <a href="#contact" className="inline-block px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl hover:bg-indigo-700 transition-all">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

// --- IT SERVICES PAGE ---
const ITServicesPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="pt-32 pb-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">Comprehensive IT Lifecycle Management</h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Advait Infotech provides complete infrastructure support designed to keep your business running securely, smoothly, and efficiently.
            </p>
            <button onClick={() => onNavigate('case-studies')} className="text-indigo-400 font-bold flex items-center gap-2 hover:text-indigo-300 transition-colors">
              <i className="fas fa-file-alt"></i> View IT Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* 4. IT INFRASTRUCTURE SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-laptop', title: 'Laptop & Desktop Rentals', desc: 'Latest configurations for flexible workforce needs.' },
              { icon: 'fa-shopping-cart', title: 'Hardware Sales', desc: 'Strategic procurement with full warranty support.' },
              { icon: 'fa-tools', title: 'Repair & Break-Fix', desc: 'Support with quick turnaround and replacement.' },
              { icon: 'fa-file-signature', title: 'AMC Services', desc: 'Annual Maintenance Contracts for peace of mind.' },
              { icon: 'fa-network-wired', title: 'Network & Server', desc: 'Printers, switches, and core server support.' },
              { icon: 'fa-headset', title: 'On-site & Remote Support', desc: 'Dedicated helpdesk services for all IT needs.' }
            ].map((service, idx) => (
              <div key={idx} className="p-10 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-indigo-100">
                <i className={`fas ${service.icon} text-3xl text-indigo-600 mb-6`}></i>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IT RENTAL & AMC ADVANTAGE & 8. TECH CAPABILITIES */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Flexible. Reliable. Cost-Controlled.</h2>
              <div className="space-y-4">
                {[
                  'Zero Capital Expenditure (CapEx to OpEx model)',
                  'Access to latest hardware technology',
                  'Preventive & corrective maintenance schedules',
                  'SLA-based support with defined response times',
                  'Maximum uptime assurance for critical systems'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0"><i className="fas fa-check text-[10px]"></i></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6">Security & Tech Capabilities</h3>
              <ul className="space-y-6 text-indigo-100">
                <li className="flex gap-4">
                  <i className="fas fa-user-shield text-2xl"></i>
                  <span>Endpoint security and device protection</span>
                </li>
                <li className="flex gap-4">
                  <i className="fas fa-barcode text-2xl"></i>
                  <span>IT asset tracking and inventory management</span>
                </li>
                <li className="flex gap-4">
                  <i className="fas fa-cloud-upload-alt text-2xl"></i>
                  <span>Data backup and disaster recovery</span>
                </li>
                <li className="flex gap-4">
                  <i className="fas fa-shield-virus text-2xl"></i>
                  <span>Compliance-ready IT processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SLA COMMITMENTS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Predictable Support You Can Trust</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-stopwatch', label: 'Fast Response', desc: 'Defined SLA timelines' },
              { icon: 'fa-ticket-alt', label: 'Priority Handling', desc: 'Urgent ticket routing' },
              { icon: 'fa-user-cog', label: 'Dedicated Account', desc: 'Personalized management' },
              { icon: 'fa-chart-line', label: 'Regular Reviews', desc: 'Service performance audits' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 mb-4 text-2xl">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="font-bold text-slate-900 mb-1">{item.label}</div>
                <div className="text-xs text-slate-500 font-bold uppercase">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- HR SERVICES PAGE ---
const HRServicesPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="pt-32 pb-20 bg-indigo-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Skilled & Verified Workforce</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Providing trained IT and operational professionals available on contract, temporary, and long-term engagement models.
            </p>
            <button onClick={() => onNavigate('case-studies')} className="text-indigo-600 font-bold flex items-center gap-2 hover:text-indigo-700 transition-colors">
              <i className="fas fa-users-cog"></i> View Recruitment Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* 6. IT MANPOWER & 7. NON-IT MANPOWER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-12 bg-slate-900 text-white rounded-[40px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                 <i className="fas fa-terminal text-[120px]"></i>
               </div>
               <h3 className="text-3xl font-bold mb-8">IT Manpower Staffing</h3>
               <p className="text-indigo-300 font-bold mb-8 uppercase tracking-widest text-xs">Technical Roles</p>
               <ul className="space-y-4">
                 {[
                   'IT Support Engineers',
                   'Desktop & Network Engineers',
                   'System Administrators',
                   'Helpdesk Executives',
                   'Infrastructure Managers'
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4">
                     <i className="fas fa-code text-indigo-500"></i> {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="p-12 bg-indigo-600 text-white rounded-[40px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                 <i className="fas fa-id-card text-[120px]"></i>
               </div>
               <h3 className="text-3xl font-bold mb-8">Non-IT Manpower</h3>
               <p className="text-white/60 font-bold mb-8 uppercase tracking-widest text-xs">Operational Roles</p>
               <ul className="space-y-4">
                 {[
                   'Office Administrators',
                   'Data Entry Operators',
                   'Back-Office Executives',
                   'Field & Operations Staff',
                   'Coordinators & Support Staff'
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4">
                     <i className="fas fa-user-tie text-white/40"></i> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
          <div className="mt-12 text-center p-8 bg-slate-100 rounded-2xl">
            <p className="font-bold text-slate-800">All manpower is professionally trained, background verified, and deployment-ready.</p>
          </div>
        </div>
      </section>

      {/* 10. WORKING APPROACH */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-indigo-600 underline-offset-8">Simple. Structured. Reliable.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Understand', desc: 'Business needs & challenges' },
              { step: '02', title: 'Strategise', desc: 'Tailored tech & talent solutions' },
              { step: '03', title: 'Deploy', desc: 'Fast, disruption-free setup' },
              { step: '04', title: 'Support', desc: 'Ongoing optimization' }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-white rounded-3xl text-center">
                <div className="text-5xl font-black text-slate-50 absolute -top-4 left-1/2 -translate-x-1/2 select-none">{item.step}</div>
                <h4 className="font-bold text-xl mb-2 relative z-10">{item.title}</h4>
                <p className="text-sm text-slate-500 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- CONTACT SECTION (COMMON) ---
const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <i className="fas fa-globe text-[500px] -translate-x-1/2 -translate-y-1/2"></i>
            </div>
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-indigo-100 text-lg mb-12 opacity-80 leading-relaxed">
              Ready to upgrade your IT infrastructure or find the perfect talent for your team? Our experts are here to help you scale.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Office</div>
                  <div className="text-xl font-medium">Saket, Delhi, India</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl"><i className="fas fa-phone-alt"></i></div>
                <div>
                  <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-medium">+91 9899979044</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl"><i className="fas fa-envelope"></i></div>
                <div>
                  <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-xl font-medium underline underline-offset-4 decoration-white/20">connect@advaithr.in</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white p-12 lg:p-20 border-l border-indigo-50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="email@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Inquiry Type</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                  <option>IT Infrastructure & Rentals</option>
                  <option>Manpower & Staffing Solutions</option>
                  <option>AMC & Maintenance</option>
                  <option>Other Services</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none" placeholder="Tell us about your requirements"></textarea>
              </div>
              <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                Submit Request <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
