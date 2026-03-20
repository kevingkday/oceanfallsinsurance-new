(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* ── Hub & Spoke Data ── */
  const hubs = [
    {
      name: 'AI & Digital Risk',
      icon: 'psychology',
      href: 'ai-risk-services.html',
      spokes: [
        { name: 'AI Model Underperformance', icon: 'monitoring', href: 'ai-model-underperformance.html', desc: 'Coverage for unmet AI performance guarantees.' },
        { name: 'Algorithmic Bias', icon: 'balance', href: 'algorithmic-bias.html', desc: 'Protection against discrimination claims from AI decisions.' },
        { name: 'CyberRisk Elite', icon: 'fingerprint', href: 'cyberrisk-elite.html', desc: 'AI-enhanced cyber liability & breach response.' },
        { name: 'Regulatory Compliance', icon: 'gavel', href: 'regulatory-compliance.html', desc: 'Navigating evolving AI governance frameworks.' },
      ],
    },
    {
      name: 'Executive & Professional',
      icon: 'account_balance',
      href: 'commercial.html',
      spokes: [
        { name: 'Directors & Officers (D&O)', icon: 'shield_person', href: 'directors-officers.html', desc: 'Personal asset protection for corporate leadership.' },
        { name: 'Errors & Omissions (E&O)', icon: 'verified', href: 'errors-omissions.html', desc: 'Professional liability for tech services & software.' },
        { name: 'Employment Practices (EPLI)', icon: 'groups', href: 'employment-practices.html', desc: 'Defense against workplace discrimination & wrongful termination.' },
        { name: 'Medical Malpractice', icon: 'medical_services', href: 'medical-malpractice.html', desc: 'Specialized coverage for healthcare professionals.' },
      ],
    },
    {
      name: 'Specialty Commercial',
      icon: 'public',
      href: 'commercial.html',
      spokes: [
        { name: 'Political Risk (PRI)', icon: 'flag', href: 'political-risk.html', desc: 'Coverage for geopolitical disruptions & asset seizure.' },
        { name: 'Environmental Liability', icon: 'eco', href: 'environmental-liability.html', desc: 'Protection against pollution & remediation costs.' },
        { name: 'Marine & Logistics', icon: 'sailing', href: 'marine-logistics.html', desc: 'Cargo, hull, and supply chain risk solutions.' },
        { name: 'Niche Specialty', icon: 'category', href: 'niche-specialty.html', desc: 'Fitness, daycare, and other specialized verticals.' },
      ],
    },
    {
      name: 'Construction',
      icon: 'construction',
      href: 'commercial.html',
      spokes: [
        { name: 'Builders Risk', icon: 'apartment', href: 'builders-risk.html', desc: 'Course of construction coverage for projects of all sizes.' },
        { name: 'Wrap-Up Liability', icon: 'safety_check', href: 'wrap-up-liability.html', desc: 'Consolidated liability for multi-stakeholder projects.' },
        { name: 'Trades & Contractors', icon: 'engineering', href: 'trades-contractors.html', desc: 'Packaged coverage for contractors & subcontractors.' },
      ],
    },
    {
      name: 'Personal & Travel',
      icon: 'flight_takeoff',
      href: 'personal.html',
      spokes: [
        { name: 'Global Travel Security', icon: 'travel_explore', href: 'global-travel-security.html', desc: 'Worldwide medical & trip protection via Allianz.' },
        { name: 'High-Value Home', icon: 'home', href: 'high-value-home.html', desc: 'Hard-to-place & luxury property coverage.' },
        { name: 'Home Sharing / Rental', icon: 'villa', href: 'home-sharing-rental.html', desc: 'Protection for short-term rental operators.' },
      ],
    },
  ];

  /* ── Utility ── */
  const isActive = (href) => currentPage === href;

  const allSpokeHrefs = hubs.flatMap(h => h.spokes.map(s => s.href));
  const isSpokeActive = (hub) => hub.spokes.some(s => isActive(s.href));

  /* ── Render Mega Menu ── */
  function renderNav() {
    const el = document.getElementById('site-nav');
    if (!el) return;

    const shortNames = ['AI Risk', 'Executive', 'Specialty', 'Construction', 'Personal'];
    const hubLinks = hubs.map((hub, idx) => {
      const active = isActive(hub.href) || isSpokeActive(hub);
      const activeClass = active
        ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
        : 'text-slate-300 hover:text-white';
      return `
        <div class="mega-hub relative" data-hub="${idx}">
          <button class="mega-hub-btn ${activeClass} font-['Manrope'] tracking-tight font-semibold transition-colors flex items-center gap-1 bg-transparent border-0 cursor-pointer text-sm" data-hub="${idx}">
            ${shortNames[idx]}
            <span class="material-symbols-outlined text-xs mega-chevron transition-transform duration-200" style="font-size:16px">expand_more</span>
          </button>
        </div>`;
    }).join('');

    const panels = hubs.map((hub, idx) => {
      const spokeCards = hub.spokes.map(s => {
        const cls = isActive(s.href) ? 'text-cyan-400' : 'text-white';
        return `
          <a href="${s.href}" class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
            <div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-primary-fixed-dim">${s.icon}</span>
            </div>
            <div>
              <div class="${cls} font-semibold text-sm font-['Manrope'] group-hover:text-cyan-400 transition-colors">${s.name}</div>
              <div class="text-slate-400 text-xs mt-1 leading-relaxed">${s.desc}</div>
            </div>
          </a>`;
      }).join('');

      return `
        <div class="mega-panel absolute left-0 right-0 top-full bg-slate-900/95 backdrop-blur-2xl border-t border-white/5 shadow-2xl z-40 opacity-0 pointer-events-none transition-all duration-200" data-panel="${idx}" style="transform:translateY(-8px)">
          <div class="max-w-7xl mx-auto px-8 py-8">
            <div class="flex items-center gap-3 mb-6">
              <span class="material-symbols-outlined text-primary">${hub.icon}</span>
              <span class="text-white font-['Manrope'] font-bold text-lg">${hub.name}</span>
              ${hub.href !== '#' ? `<a href="${hub.href}" class="ml-auto text-xs text-cyan-400 hover:text-white transition-colors font-semibold uppercase tracking-widest">View Hub Overview →</a>` : ''}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              ${spokeCards}
            </div>
          </div>
        </div>`;
    }).join('');

    const homeActive = isActive('index.html')
      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
      : 'text-slate-300 hover:text-white';
    const resourcesActive = isActive('resources.html')
      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
      : 'text-slate-300 hover:text-white';
    const contactActive = isActive('contact.html')
      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
      : 'text-slate-300 hover:text-white';

    el.innerHTML = `
      <nav class="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.04)]" id="main-nav">
        <div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <a href="index.html" class="text-xl font-bold tracking-tighter text-white uppercase font-['Manrope'] no-underline">Ocean Falls Insurance</a>
          <div class="hidden lg:flex gap-3 items-center" id="desktop-nav">
            <a class="${homeActive} font-['Manrope'] tracking-tight font-semibold transition-colors text-sm" href="index.html">Home</a>
            ${hubLinks}
            <a class="${resourcesActive} font-['Manrope'] tracking-tight font-semibold transition-colors text-sm" href="resources.html">Resources</a>
            <a class="${contactActive} font-['Manrope'] tracking-tight font-semibold transition-colors text-sm" href="contact.html">Contact</a>
          </div>
          <div class="flex items-center gap-4">
            <a href="contact.html" class="bg-gradient-to-r from-[#c3f5ff] to-[#00e5ff] text-[#00363d] px-6 py-2.5 rounded-full font-bold tracking-tight text-sm no-underline hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all hidden sm:inline-block">Get a Quote</a>
            <button class="lg:hidden text-white" id="mobile-toggle" aria-label="Menu">
              <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
        ${panels}
      </nav>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="fixed inset-0 z-[60] bg-[#00142b]/98 backdrop-blur-xl hidden flex-col overflow-y-auto" style="display:none">
        <div class="flex justify-between items-center px-8 h-20 border-b border-white/5">
          <a href="index.html" class="text-xl font-bold tracking-tighter text-white uppercase font-['Manrope'] no-underline">Ocean Falls</a>
          <button id="mobile-close" class="text-white"><span class="material-symbols-outlined text-3xl">close</span></button>
        </div>
        <div class="px-8 py-6 flex flex-col gap-2">
          <a href="index.html" class="text-white font-['Manrope'] font-semibold text-lg py-3 border-b border-white/5 no-underline">Home</a>
          ${hubs.map((hub, idx) => `
            <div class="border-b border-white/5">
              <button class="mobile-acc-btn w-full flex justify-between items-center py-3 text-white font-['Manrope'] font-semibold text-lg bg-transparent border-0 cursor-pointer" data-acc="${idx}">
                <span class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">${hub.icon}</span> ${hub.name}</span>
                <span class="material-symbols-outlined mobile-acc-chevron transition-transform duration-200">expand_more</span>
              </button>
              <div class="mobile-acc-panel hidden pl-4 pb-4" data-acc-panel="${idx}">
                ${hub.spokes.map(s => `<a href="${s.href}" class="flex items-center gap-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm no-underline"><span class="material-symbols-outlined text-primary-fixed-dim text-lg">${s.icon}</span>${s.name}</a>`).join('')}
              </div>
            </div>`).join('')}
          <a href="resources.html" class="text-white font-['Manrope'] font-semibold text-lg py-3 border-b border-white/5 no-underline">Resources</a>
          <a href="contact.html" class="text-white font-['Manrope'] font-semibold text-lg py-3 border-b border-white/5 no-underline">Contact</a>
          <a href="contact.html" class="mt-6 text-center bg-gradient-to-r from-[#c3f5ff] to-[#00e5ff] text-[#00363d] px-8 py-4 rounded-full font-bold text-lg no-underline">Get a Quote</a>
        </div>
      </div>`;

    /* ── Desktop Mega Menu Interactions ── */
    let activePanel = null;
    let closeTimer = null;

    function openPanel(idx) {
      clearTimeout(closeTimer);
      if (activePanel !== null && activePanel !== idx) closePanel(activePanel);
      const panel = document.querySelector(`[data-panel="${idx}"]`);
      const chevron = document.querySelector(`.mega-hub-btn[data-hub="${idx}"] .mega-chevron`);
      if (panel) {
        panel.style.opacity = '1';
        panel.style.pointerEvents = 'auto';
        panel.style.transform = 'translateY(0)';
      }
      if (chevron) chevron.style.transform = 'rotate(180deg)';
      activePanel = idx;
    }

    function closePanel(idx) {
      const panel = document.querySelector(`[data-panel="${idx}"]`);
      const chevron = document.querySelector(`.mega-hub-btn[data-hub="${idx}"] .mega-chevron`);
      if (panel) {
        panel.style.opacity = '0';
        panel.style.pointerEvents = 'none';
        panel.style.transform = 'translateY(-8px)';
      }
      if (chevron) chevron.style.transform = 'rotate(0)';
      if (activePanel === idx) activePanel = null;
    }

    function closeAll() {
      hubs.forEach((_, i) => closePanel(i));
    }

    document.querySelectorAll('.mega-hub').forEach((hubEl) => {
      const idx = parseInt(hubEl.dataset.hub);
      hubEl.addEventListener('mouseenter', () => openPanel(idx));
      hubEl.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(() => closePanel(idx), 150);
      });
    });

    document.querySelectorAll('.mega-panel').forEach((panel) => {
      panel.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
      });
      panel.addEventListener('mouseleave', () => {
        const idx = parseInt(panel.dataset.panel);
        closeTimer = setTimeout(() => closePanel(idx), 100);
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.mega-hub') && !e.target.closest('.mega-panel')) closeAll();
    });

    /* ── Mobile Menu ── */
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', () => { mobileMenu.style.display = 'flex'; document.body.style.overflow = 'hidden'; });
    }
    if (mobileClose && mobileMenu) {
      mobileClose.addEventListener('click', () => { mobileMenu.style.display = 'none'; document.body.style.overflow = ''; });
    }

    document.querySelectorAll('.mobile-acc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.acc;
        const panel = document.querySelector(`[data-acc-panel="${idx}"]`);
        const chevron = btn.querySelector('.mobile-acc-chevron');
        if (panel.classList.contains('hidden')) {
          panel.classList.remove('hidden');
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
          panel.classList.add('hidden');
          if (chevron) chevron.style.transform = 'rotate(0)';
        }
      });
    });
  }

  /* ── Render Footer ── */
  function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    const hubFooterLinks = hubs.map(hub => `
      <div class="flex flex-col gap-3">
        <h6 class="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-1">${hub.name}</h6>
        ${hub.spokes.map(s => `<a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="${s.href}">${s.name}</a>`).join('')}
      </div>`).join('');

    el.innerHTML = `
      <footer class="bg-[#00142b] w-full py-16 px-8 border-t border-white/5">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
            <div class="lg:col-span-1">
              <div class="text-lg font-black text-white mb-4 uppercase font-['Manrope']">Ocean Falls</div>
              <p class="text-slate-500 text-sm leading-relaxed">Protecting the digital deep with precision and intelligence. Specialized insurance for the 21st century enterprise.</p>
            </div>
            ${hubFooterLinks}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5 mb-12">
            <div>
              <h6 class="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">Contact</h6>
              <p class="text-slate-500 text-sm">+1 778-653-8828</p>
              <p class="text-slate-500 text-sm">hello@oceanfallsinsurance.com</p>
            </div>
            <div>
              <h6 class="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">Newsletter</h6>
              <div class="relative">
                <input class="w-full bg-transparent border-b border-white/10 focus:border-cyan-400 px-0 py-3 text-white placeholder-slate-600 focus:ring-0 transition-all outline-none text-sm" placeholder="Email address" type="email"/>
                <button class="absolute right-0 top-1/2 -translate-y-1/2 text-cyan-400"><span class="material-symbols-outlined">chevron_right</span></button>
              </div>
            </div>
            <div>
              <h6 class="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">Quick Links</h6>
              <div class="flex flex-col gap-2">
                <a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="resources.html">Resources & Insights</a>
                <a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="contact.html">Contact Us</a>
                <a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="contact.html">Privacy Policy</a>
                <a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="contact.html">Terms of Service</a>
              </div>
            </div>
          </div>
          <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-slate-500 font-['Inter'] text-xs tracking-wide">© 2024 Ocean Falls Insurance Limited. All rights reserved.</p>
            <div class="flex gap-6 text-xs text-slate-500">
              <span>BC License: 44291-C</span>
              <span>ISO 31000 Compliant</span>
            </div>
          </div>
        </div>
      </footer>`;
  }

  /* ── Render Sticky CTA (Spoke Pages Only) ── */
  function renderStickyCTA() {
    if (!document.body.hasAttribute('data-spoke-page')) return;
    const bar = document.createElement('div');
    bar.id = 'sticky-cta';
    bar.className = 'fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-t border-white/10 py-3 px-8 transform translate-y-full transition-transform duration-300';
    bar.innerHTML = `
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <span class="text-white font-['Manrope'] font-bold hidden sm:inline">Ready to protect your business?</span>
        <div class="flex gap-4 items-center w-full sm:w-auto justify-center sm:justify-end">
          <a href="contact.html" class="bg-gradient-to-r from-[#c3f5ff] to-[#00e5ff] text-[#00363d] px-8 py-3 rounded-full font-bold text-sm no-underline hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">Secure a Bespoke Quote</a>
          <a href="tel:+17786538828" class="text-cyan-400 font-semibold text-sm hidden sm:inline no-underline hover:text-white transition-colors">+1 778-653-8828</a>
        </div>
      </div>`;
    document.body.appendChild(bar);

    let shown = false;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400 && !shown) {
        bar.style.transform = 'translateY(0)';
        shown = true;
      } else if (window.scrollY <= 400 && shown) {
        bar.style.transform = 'translateY(100%)';
        shown = false;
      }
    });
  }

  /* ── Related Insight Widget (Spoke Pages Only) ── */
  function renderRelatedInsight() {
    const el = document.getElementById('related-insight');
    if (!el) return;
    el.innerHTML = `
      <section class="py-16 bg-[#001c3a]">
        <div class="max-w-7xl mx-auto px-8">
          <div class="bg-[#0e2b4b]/60 backdrop-blur-xl rounded-2xl p-10 border border-white/5 flex flex-col md:flex-row items-center gap-8">
            <div class="w-16 h-16 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[#00daf3] text-3xl">psychology</span>
            </div>
            <div class="flex-grow">
              <h3 class="text-white font-['Manrope'] font-bold text-xl mb-2">AI Risk Advisory Services</h3>
              <p class="text-[#bac9cc] text-sm leading-relaxed">Discover how our AI-first approach to risk assessment can transform your coverage strategy. Our Human-in-the-Loop methodology ensures 99% document processing accuracy.</p>
            </div>
            <a href="ai-risk-services.html" class="shrink-0 bg-transparent border border-cyan-400/30 text-cyan-400 px-6 py-3 rounded-full font-bold text-sm no-underline hover:bg-cyan-400/10 transition-colors whitespace-nowrap">Explore AI Risk →</a>
          </div>
        </div>
      </section>`;
  }

  /* ── Booking Modal (Site-Wide) ── */
  function renderBookingModal() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'booking-modal';
    modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:9999;';
    modal.innerHTML = `
      <div id="booking-backdrop" style="position:absolute;inset:0;background:rgba(0,20,43,0.85);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);"></div>
      <div style="position:relative;z-index:1;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;">
        <div style="background:#0e2b4b;border:1px solid rgba(255,255,255,0.08);border-radius:16px;width:100%;max-width:560px;max-height:90vh;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,0.5);display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.05);">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:40px;height:40px;border-radius:10px;background:rgba(0,229,255,0.1);display:flex;align-items:center;justify-content:center;">
                <span class="material-symbols-outlined" style="color:#00daf3;">calendar_month</span>
              </div>
              <div>
                <div style="color:#fff;font-family:Manrope;font-weight:700;font-size:16px;">Schedule a Consultation</div>
                <div style="color:#bac9cc;font-size:12px;margin-top:2px;">Book a time with our specialists</div>
              </div>
            </div>
            <button id="booking-close" style="background:none;border:none;cursor:pointer;color:#bac9cc;padding:4px;" aria-label="Close">
              <span class="material-symbols-outlined" style="font-size:24px;">close</span>
            </button>
          </div>
          <div style="flex:1;overflow-y:auto;padding:0;">
            <iframe src="https://api.leadconnectorhq.com/widget/booking/6Zm3OzecFpqZEilRCVnQ" style="width:100%;min-height:550px;border:none;overflow:hidden;" scrolling="no" id="ghl-booking-modal"></iframe>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);

    // Load GHL embed script (once)
    if (!document.querySelector('script[src*="msgsndr.com"]')) {
      const s = document.createElement('script');
      s.src = 'https://link.msgsndr.com/js/form_embed.js';
      s.type = 'text/javascript';
      document.body.appendChild(s);
    }

    function openModal() {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }

    // Close handlers
    document.getElementById('booking-close').addEventListener('click', closeModal);
    document.getElementById('booking-backdrop').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
    });

    // Intercept CTA clicks site-wide
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a, button');
      if (!link) return;
      const text = (link.textContent || '').trim().toLowerCase();
      const href = (link.getAttribute('href') || '').toLowerCase();
      const isQuoteCTA = text.includes('quote') || text.includes('bespoke') || text.includes('discuss ai coverage');
      const isContactLink = href === 'contact.html';
      // Only intercept CTA-style buttons that point to contact, not the nav "Contact" text link
      if (isQuoteCTA && (isContactLink || !link.getAttribute('href') || link.tagName === 'BUTTON')) {
        e.preventDefault();
        e.stopPropagation();
        openModal();
      }
    });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderFooter();
    renderStickyCTA();
    renderRelatedInsight();
    renderBookingModal();

    // GoHighLevel Chat Widget
    if (!document.querySelector('script[data-widget-id="6984b6aae64c73176d61c4e7"]')) {
      const chat = document.createElement('script');
      chat.src = 'https://widgets.leadconnectorhq.com/loader.js';
      chat.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      chat.setAttribute('data-widget-id', '6984b6aae64c73176d61c4e7');
      document.body.appendChild(chat);
    }

    // GoHighLevel Voice Assistant Widget
    if (!document.querySelector('script[data-widget-id="69bdbaf7db148045986963f5"]')) {
      const voice = document.createElement('script');
      voice.src = 'https://widgets.leadconnectorhq.com/loader.js';
      voice.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      voice.setAttribute('data-widget-id', '69bdbaf7db148045986963f5');
      document.body.appendChild(voice);
    }

    // ── GHL Widget Theme Customization ──
    // CSS Variable Inheritance for both chat widgets
    const widgetStyles = document.createElement('style');
    widgetStyles.id = 'ghl-widget-theme';
    widgetStyles.textContent = `
      chat-widget {
        --chat-widget-header-color: #0e2b4b !important;
        --chat-widget-primary-color: #00e5ff !important;
        --chat-widget-background-color: rgba(0, 20, 43, 0.95) !important;
        --ion-color-primary: #00e5ff !important;
        --ion-color-primary-rgb: 0, 229, 255 !important;
        --ion-color-primary-contrast: #00363d !important;
      }

      /* Custom Voice Assistant Button */
      #ofi-voice-trigger {
        position: fixed;
        bottom: 24px;
        left: 24px;
        z-index: 9990;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        background: linear-gradient(135deg, #00e5ff 0%, #00daf3 50%, #c3f5ff 100%);
        color: #00363d;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(0, 229, 255, 0.35), 0 0 0 0 rgba(0, 229, 255, 0.4);
        transition: transform 0.2s ease, box-shadow 0.3s ease;
        opacity: 0;
        pointer-events: none;
        animation: ofi-pulse 2.5s ease-in-out infinite;
      }
      #ofi-voice-trigger:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 30px rgba(0, 229, 255, 0.5);
        animation: none;
      }
      #ofi-voice-trigger:active {
        transform: scale(0.95);
      }
      #ofi-voice-trigger.ofi-ready {
        opacity: 1;
        pointer-events: auto;
      }
      #ofi-voice-trigger svg {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
      /* Tooltip */
      #ofi-voice-trigger::after {
        content: 'Speak with AI Assistant';
        position: absolute;
        left: calc(100% + 12px);
        top: 50%;
        transform: translateY(-50%);
        background: #0e2b4b;
        color: #c3f5ff;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        padding: 6px 12px;
        border-radius: 8px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
        border: 1px solid rgba(0, 229, 255, 0.15);
      }
      #ofi-voice-trigger:hover::after {
        opacity: 1;
      }
      @keyframes ofi-pulse {
        0%, 100% { box-shadow: 0 4px 20px rgba(0, 229, 255, 0.35), 0 0 0 0 rgba(0, 229, 255, 0.4); }
        50% { box-shadow: 0 4px 20px rgba(0, 229, 255, 0.35), 0 0 0 10px rgba(0, 229, 255, 0); }
      }
    `;
    document.head.appendChild(widgetStyles);

    // Create custom Voice Assistant button
    const voiceBtn = document.createElement('button');
    voiceBtn.id = 'ofi-voice-trigger';
    voiceBtn.setAttribute('aria-label', 'Speak with AI Voice Assistant');
    voiceBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>`;
    document.body.appendChild(voiceBtn);

    // Shadow DOM penetration — poll for widgets, hide voice bubble, bind custom trigger
    let voiceBound = false;
    const bindWidgets = setInterval(() => {
      const widgets = document.querySelectorAll('chat-widget');
      
      // We need at least 2 widgets: first = chat, second = voice
      if (widgets.length < 2) return;
      
      widgets.forEach((widget, index) => {
        if (!widget.shadowRoot) return;

        // Second widget (index 1) is the voice assistant
        const isVoice = index === 1;

        // For the voice widget: hide EVERYTHING and bind custom button
        if (isVoice && !voiceBound) {
          // Inject aggressive CSS into Shadow DOM to hide ALL default UI
          if (!widget.shadowRoot.querySelector('#ofi-hide-voice-bubble')) {
            const style = document.createElement('style');
            style.id = 'ofi-hide-voice-bubble';
            style.textContent = `
              * {
                opacity: 0 !important;
                pointer-events: none !important;
                position: fixed !important;
                left: -9999px !important;
                width: 0 !important;
                height: 0 !important;
                overflow: hidden !important;
              }
            `;
            widget.shadowRoot.appendChild(style);
          }

          // Also hide the outer chat-widget element itself for the voice bubble
          widget.style.cssText = 'position:fixed!important;left:-9999px!important;width:0!important;height:0!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important;';

          // Find any clickable trigger inside the shadow DOM
          const bubble = widget.shadowRoot.querySelector(
            '#lc_text-widget--btn, .lc_text-widget--bubble, [class*="bubble"], [class*="launcher"], [class*="btn"], button, [role="button"]'
          );

          if (bubble) {
            // Temporarily restore pointer-events on the trigger so .click() works
            bubble.style.cssText = 'pointer-events:auto!important;';

            // Bind custom button click to hidden GHL trigger
            voiceBtn.onclick = (e) => {
              e.preventDefault();
              // Briefly unhide widget so GHL's internal logic can open
              widget.style.cssText = '';
              // Remove the aggressive hide from shadow DOM
              const hideStyle = widget.shadowRoot.querySelector('#ofi-hide-voice-bubble');
              if (hideStyle) hideStyle.remove();
              // Click the internal trigger
              bubble.click();
            };
          } else {
            // No bubble found, just click the widget itself
            voiceBtn.onclick = (e) => {
              e.preventDefault();
              widget.style.cssText = '';
              const hideStyle = widget.shadowRoot.querySelector('#ofi-hide-voice-bubble');
              if (hideStyle) hideStyle.remove();
              widget.click();
            };
          }

          // Reveal custom button
          requestAnimationFrame(() => {
            voiceBtn.classList.add('ofi-ready');
          });

          voiceBound = true;
        }

        // For all widgets: inject theme overrides into Shadow DOM
        if (!widget.shadowRoot.querySelector('#ofi-shadow-theme')) {
          const themeStyle = document.createElement('style');
          themeStyle.id = 'ofi-shadow-theme';
          themeStyle.textContent = `
            :host {
              --chat-widget-header-color: #0e2b4b !important;
              --chat-widget-primary-color: #00e5ff !important;
              --chat-widget-background-color: rgba(0, 20, 43, 0.95) !important;
            }
            .lc_text-widget--header {
              background: #0e2b4b !important;
              border-bottom: 1px solid rgba(0, 229, 255, 0.1) !important;
            }
            .lc_text-widget--container {
              background: rgba(0, 20, 43, 0.95) !important;
              backdrop-filter: blur(20px) !important;
              -webkit-backdrop-filter: blur(20px) !important;
              border: 1px solid rgba(0, 229, 255, 0.08) !important;
              border-radius: 16px !important;
            }
            .lc_text-widget--body {
              background: transparent !important;
            }
            .lc_text-widget--send-btn, [class*="send"] {
              background: #00e5ff !important;
              color: #00363d !important;
            }
          `;
          widget.shadowRoot.appendChild(themeStyle);
        }
      });

      // If voice is bound, stop polling
      if (voiceBound) clearInterval(bindWidgets);
    }, 500);

    // Safety: stop polling after 15 seconds regardless
    setTimeout(() => {
      clearInterval(bindWidgets);
      // If voice widget never loaded, still show button as a fallback contact link
      if (!voiceBound) {
        voiceBtn.onclick = () => { window.location.href = 'contact.html'; };
        voiceBtn.classList.add('ofi-ready');
      }
    }, 15000);
  });
})();
