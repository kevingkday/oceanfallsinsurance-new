(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* ── Hub & Spoke Data ── */
  const hubs = [
    {
      name: 'Tech & AI Companies',
      short: 'Tech & AI',
      icon: 'memory',
      href: 'tech-ai-companies.html',
      spokes: [
        { name: 'Tech & AI Companies', icon: 'apartment', href: 'tech-ai-companies.html', desc: 'SaaS, dev shops, AI builders and MSPs.' },
        { name: 'First enterprise contract', icon: 'handshake', href: 'tech-ai-companies.html#enterprise-contract', desc: 'When a customer contract asks for insurance.' },
        { name: 'Fundraising', icon: 'trending_up', href: 'tech-ai-companies.html#fundraising', desc: 'What investors and boards usually ask to see.' },
        { name: 'Launching AI features', icon: 'psychology', href: 'tech-ai-companies.html#launching-ai', desc: 'Cyber, tech E&O and AI liability when you ship AI.' },
      ],
    },
    {
      name: 'Cyber & AI Risk',
      short: 'Cyber & AI',
      icon: 'psychology',
      href: 'ai-risk-services.html',
      spokes: [
        { name: 'Cyber Insurance', icon: 'fingerprint', href: 'cyberrisk-elite.html', desc: 'Breach, ransomware and social-engineering fraud.' },
        { name: 'AI Infrastructure & Data Centres', icon: 'dns', href: 'ai-infrastructure-data-centre.html', desc: 'Property and liability for compute facilities.' },
        { name: 'AI Model Underperformance', icon: 'monitoring', href: 'ai-model-underperformance.html', desc: 'When a model misses a contractual promise.' },
        { name: 'Algorithmic Bias', icon: 'balance', href: 'algorithmic-bias.html', desc: 'Discrimination claims from automated decisions.' },
        { name: 'Regulatory Compliance', icon: 'gavel', href: 'regulatory-compliance.html', desc: 'Defence costs when AI rules are in play.' },
      ],
    },
    {
      name: 'Tech E&O & D&O',
      short: 'E&O & D&O',
      icon: 'account_balance',
      href: 'errors-omissions.html',
      spokes: [
        { name: 'Tech E&O', icon: 'verified', href: 'errors-omissions.html', desc: 'Professional liability for software and tech services.' },
        { name: 'Directors & Officers (D&O)', icon: 'shield_person', href: 'directors-officers.html', desc: 'Personal liability cover for directors and officers.' },
        { name: 'Employment Practices (EPLI)', icon: 'groups', href: 'employment-practices.html', desc: 'Workplace and hiring-related claims.' },
      ],
    },
    {
      name: 'Other Business Insurance',
      short: 'Other Business',
      icon: 'domain',
      href: 'other-business.html',
      spokes: [
        { name: 'Commercial Property & Liability', icon: 'store', href: 'commercial.html', desc: 'Property, liability and the everyday commercial book.' },
        { name: 'Builders Risk', icon: 'apartment', href: 'builders-risk.html', desc: 'Course of construction for projects.' },
        { name: 'Wrap-Up Liability', icon: 'safety_check', href: 'wrap-up-liability.html', desc: 'One liability program for a multi-party project.' },
        { name: 'Trades & Contractors', icon: 'engineering', href: 'trades-contractors.html', desc: 'Packages for contractors and trades.' },
        { name: 'Marine & Logistics', icon: 'sailing', href: 'marine-logistics.html', desc: 'Cargo, hull and goods in transit.' },
        { name: 'Environmental Liability', icon: 'eco', href: 'environmental-liability.html', desc: 'Pollution and remediation exposures.' },
        { name: 'Political Risk', icon: 'flag', href: 'political-risk.html', desc: 'Cross-border and political disruption.' },
        { name: 'Niche & Specialty', icon: 'category', href: 'niche-specialty.html', desc: 'Fitness, childcare, events and other specialty operations.' },
        { name: 'Medical Malpractice', icon: 'medical_services', href: 'medical-malpractice.html', desc: 'Professional liability for healthcare practices.' },
      ],
    },
    {
      name: 'Personal',
      short: 'Personal',
      icon: 'home',
      href: 'personal.html',
      spokes: [
        { name: 'Travel', icon: 'travel_explore', href: 'global-travel-security.html', desc: 'Travel medical and trip cover for Canadians.' },
        { name: 'High-Value Home', icon: 'villa', href: 'high-value-home.html', desc: 'Homes that are hard to place on a standard form.' },
        { name: 'Home Sharing / Rental', icon: 'meeting_room', href: 'home-sharing-rental.html', desc: 'Short-term and home-sharing rentals.' },
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

    const hubLinks = hubs.map((hub, idx) => {
      const active = isActive(hub.href) || isSpokeActive(hub);
      const activeClass = active
        ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
        : 'text-slate-300 hover:text-white';
      return `
        <div class="mega-hub relative" data-hub="${idx}">
            <button class="mega-hub-btn ${activeClass} font-['Manrope'] tracking-tight font-semibold transition-colors flex items-center gap-1 bg-transparent border-0 cursor-pointer text-xs xl:text-sm whitespace-nowrap" data-hub="${idx}">
            ${hub.short}
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

            const gridCols = hub.spokes.length >= 5 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
            return `
        <div class="mega-panel absolute left-0 right-0 top-full bg-slate-900/95 backdrop-blur-2xl border-t border-white/5 shadow-2xl z-40 opacity-0 pointer-events-none transition-all duration-200" data-panel="${idx}" style="transform:translateY(-8px)">
          <div class="max-w-7xl mx-auto px-8 py-8">
            <div class="flex items-center gap-3 mb-6">
              <span class="material-symbols-outlined text-primary">            ${hub.icon}</span>
              <a href="${hub.href}" class="text-white font-['Manrope'] font-bold text-lg no-underline hover:text-cyan-400">${hub.name}</a>
              ${hub.href !== '#' ? `<a href="${hub.href}" class="ml-auto text-xs text-cyan-400 hover:text-white transition-colors font-semibold uppercase tracking-widest">View Overview →</a>` : ''}
            </div>
            <div class="grid ${gridCols} gap-2">
              ${spokeCards}
            </div>
          </div>
        </div>`;
    }).join('');

    const linkClass = (href) => isActive(href)
      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
      : 'text-slate-300 hover:text-white';
    const aboutActive = linkClass('about.html');
    const resourcesActive = linkClass('resources.html');
    const contactActive = linkClass('contact.html');

    el.innerHTML = `
      <nav class="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.04)]" id="main-nav">
        <div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <a href="index.html" class="text-xl font-bold tracking-tighter text-white uppercase font-['Manrope'] no-underline">Ocean Falls Insurance</a>
          <div class="hidden lg:flex gap-2 xl:gap-3 items-center" id="desktop-nav">
            ${hubLinks}
            <a class="${aboutActive} font-['Manrope'] tracking-tight font-semibold transition-colors text-xs xl:text-sm" href="about.html">About</a>
            <a class="${resourcesActive} font-['Manrope'] tracking-tight font-semibold transition-colors text-xs xl:text-sm" href="resources.html">Insights</a>
            <a class="${contactActive} font-['Manrope'] tracking-tight font-semibold transition-colors text-xs xl:text-sm" href="contact.html">Contact</a>
          </div>
          <div class="flex items-center gap-4">
            <a href="contact.html" class="bg-gradient-to-r from-[#c3f5ff] to-[#00e5ff] text-[#00363d] px-5 py-2.5 rounded-full font-bold tracking-tight text-sm no-underline hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all hidden sm:inline-block">Book a Review</a>
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
          <a href="about.html" class="text-white font-['Manrope'] font-semibold text-lg py-3 border-b border-white/5 no-underline">About</a>
          <a href="resources.html" class="text-white font-['Manrope'] font-semibold text-lg py-3 border-b border-white/5 no-underline">Insights</a>
          <a href="contact.html" class="text-white font-['Manrope'] font-semibold text-lg py-3 border-b border-white/5 no-underline">Contact</a>
          <a href="contact.html" class="mt-6 text-center bg-gradient-to-r from-[#c3f5ff] to-[#00e5ff] text-[#00363d] px-8 py-4 rounded-full font-bold text-lg no-underline">Book a Review</a>
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
              <p class="text-slate-500 text-sm leading-relaxed">Cyber and AI insurance for technology companies in British Columbia, plus the rest of a commercial or personal account.</p>
            </div>
            ${hubFooterLinks}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5 mb-12">
            <div>
              <h6 class="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">Contact</h6>
              <p class="text-slate-500 text-sm">+1&nbsp;&nbsp;778-653-8828</p>
              <p class="text-slate-500 text-sm">hello@oceanfallsinsurance.com</p>
            </div>
            <div>
              <h6 class="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">Coverage Review</h6>
              <!-- Newsletter signup needs a HighLevel form before it can collect email addresses. -->
              <p class="text-slate-500 text-sm leading-relaxed mb-3">Twenty minutes on cyber, tech E&amp;O and AI liability.</p>
              <a class="text-cyan-400 hover:text-white transition-colors text-sm font-semibold" href="contact.html">Book a 20-min review</a>
            </div>
            <div>
              <h6 class="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">Quick Links</h6>
              <div class="flex flex-col gap-2">
                <a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="about.html">About Kevin Day</a>
                <a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="resources.html">Insights</a>
                <a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="contact.html">Contact</a>
                <a class="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="privacy.html">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-slate-500 font-['Inter'] text-xs tracking-wide leading-relaxed max-w-3xl">© ${new Date().getFullYear()} Ocean Falls Insurance Services Limited. Agency licence LIC-2022-0037261-R01. Ocean Falls Insurance Services Limited is an independent insurance broker licensed in British Columbia. Coverage is provided by insurers and is subject to the terms, conditions and exclusions of the policy.</p>
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
        <span class="text-white font-['Manrope'] font-bold hidden sm:inline">Twenty minutes on the policies your buyers are asking for.</span>
        <div class="flex gap-4 items-center w-full sm:w-auto justify-center sm:justify-end">
          <a href="contact.html" class="bg-gradient-to-r from-[#c3f5ff] to-[#00e5ff] text-[#00363d] px-8 py-3 rounded-full font-bold text-sm no-underline hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">Book a Coverage Review</a>
          <a href="tel:+17786538828" class="text-cyan-400 font-semibold text-sm hidden sm:inline no-underline hover:text-white transition-colors">+1&nbsp;&nbsp;778-653-8828</a>
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
              <h3 class="text-white font-['Manrope'] font-bold text-xl mb-2">Cyber and AI coverage</h3>
              <p class="text-[#bac9cc] text-sm leading-relaxed">Cyber, tech E&amp;O and AI liability, described in the language your engineers already use.</p>
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
                <div style="color:#fff;font-family:Manrope;font-weight:700;font-size:16px;">Book a coverage review</div>
                <div style="color:#bac9cc;font-size:12px;margin-top:2px;">20 minutes with Kevin Day</div>
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
      const isQuoteCTA = text.includes('quote') || text.includes('bespoke') || text.includes('coverage review') || text.includes('book a 20') || text.includes('book a review') || text.includes('discuss ai coverage');
      const isContactLink = href === 'contact.html' || href.indexOf('contact.html#') === 0;
      const isNavText = text === 'contact' || text === 'insights' || text === 'about' || text === 'privacy policy';
      // Only intercept CTA-style buttons that point to contact, not the nav "Contact" text link
      if (isQuoteCTA && !isNavText && (isContactLink || !link.getAttribute('href') || link.tagName === 'BUTTON')) {
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

    // GoHighLevel Voice Assistant Widget (Hidden Container)
    let voiceWidgetFound = false;
    if (!document.getElementById('voice-widget-container')) {
      const voiceContainer = document.createElement('div');
      voiceContainer.id = 'voice-widget-container';
      voiceContainer.className = 'hidden';
      voiceContainer.style.display = 'none';

      const voice = document.createElement('script');
      voice.src = 'https://widgets.leadconnectorhq.com/loader.js';
      voice.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      voice.setAttribute('data-widget-id', '69bdbaf7db148045986963f5');
      
      voiceContainer.appendChild(voice);
      document.body.appendChild(voiceContainer);
    }

    // Custom Generic Event Listener for Voice Activation (Like kevinday.ai)
    let isVoiceInitializing = false;
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.ofi-voice-btn, #ofi-voice-trigger, #test-voice-btn');
      if (!trigger) return;
      
      e.preventDefault();
      
      // Debounce lock to prevent double-clicks triggering multiple microphone prompts
      if (isVoiceInitializing || trigger.disabled) return;
      isVoiceInitializing = true;

      const originalText = trigger.innerText;
      if (trigger.innerText && trigger.innerText.trim() !== '') {
        trigger.innerText = 'INITIALIZING...';
      }

      let attempts = 0;
      const tryClickWidget = setInterval(() => {
        attempts++;
        const widgets = document.querySelectorAll('chat-widget');
        
        widgets.forEach(widget => {
          if (widget.shadowRoot && !voiceWidgetFound) {
            // Target the Voice widget explicitly by its internal phone icon class
            const phoneIcon = widget.shadowRoot.querySelector('.lc_text-widget--phone-icon, [aria-label="Select to start the voice call"]');
            if (phoneIcon) {
              phoneIcon.click();
              voiceWidgetFound = true;
            }
          }
        });

        // Fallback if the first method fails
        if (!voiceWidgetFound && widgets.length >= 1) {
          widgets.forEach(widget => {
            if (widget.shadowRoot && !voiceWidgetFound) {
              const chatBubble = widget.shadowRoot.querySelector('.lc_text-widget--bubble, #lc_text-widget--btn');
              if (!chatBubble) {
                const anyClickable = widget.shadowRoot.querySelector('.lc_text-widget--embedded, .widget-open-icon');
                if (anyClickable) {
                  anyClickable.click();
                  voiceWidgetFound = true;
                }
              }
            }
          });
        }

        if (voiceWidgetFound) {
          clearInterval(tryClickWidget);
          if (trigger.innerText && trigger.innerText.trim() !== '') {
            trigger.innerText = 'CONNECTED';
          }
          // Disable the button to prevent overlapped calls
          trigger.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
          trigger.disabled = true;
        }

        if (attempts >= 20 && !voiceWidgetFound) {
          clearInterval(tryClickWidget);
          isVoiceInitializing = false;
          if (trigger.innerText && trigger.innerText.trim() !== '') {
            trigger.innerText = 'WIDGET NOT READY - TRY AGAIN';
          }
          setTimeout(() => { if (originalText) trigger.innerText = originalText; }, 2000);
        }
      }, 500);
    });

    // Inject Custom High-End Chat Button (kevinday.ai style)
    const customChatBtnId = 'ofi-custom-chat-trigger';
    if (!document.getElementById(customChatBtnId)) {
        const customChatBtn = document.createElement('button');
        customChatBtn.id = customChatBtnId;
        customChatBtn.className = 'fixed bottom-6 right-6 z-[9990] flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container border border-cyan-400/50 hover:border-cyan-300 transition-all duration-500 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] group hover:scale-105 cursor-pointer';
        customChatBtn.innerHTML = `
            <svg class="w-8 h-8 text-on-primary transform group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
        `;
        document.body.appendChild(customChatBtn);

        customChatBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const widgets = document.querySelectorAll('chat-widget');
            widgets.forEach(widget => {
                if (widget.shadowRoot) {
                    // Make sure it's the chat widget, not voice
                    const shadowHTML = widget.shadowRoot.innerHTML.toLowerCase();
                    const isVoice = shadowHTML.includes('microphone') || shadowHTML.includes('call us');
                    if (!isVoice) {
                        const chatBubbleBtn = widget.shadowRoot.querySelector('#lc_text-widget--btn, .lc_text-widget--bubble');
                        if (chatBubbleBtn) chatBubbleBtn.click();
                    }
                }
            });
        });
    }

    // Theme Customization for Regular Chat Widget
    const bindChatTheme = setInterval(() => {
      const widgets = document.querySelectorAll('chat-widget');
      widgets.forEach((widget) => {
        if (!widget.shadowRoot) return;
        
        // Ensure this is the chat widget, not the hidden voice widget
        const shadowHTML = widget.shadowRoot.innerHTML.toLowerCase();
        const isVoice = shadowHTML.includes('call us') || shadowHTML.includes('microphone') || shadowHTML.includes('audio') || widget.closest('#voice-widget-container');
        
        // If it IS the voice widget, enforce hiding its default bubble since GHL might append it to body
        if (isVoice && !widget.shadowRoot.querySelector('#ofi-hide-voice-bubble')) {
          const style = document.createElement('style');
          style.id = 'ofi-hide-voice-bubble';
          style.textContent = `
            #lc_text-widget--btn, .lc_text-widget--btn, [class*="launcher"], [class*="bubble"] {
              display: none !important;
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

        if (!isVoice && !widget.shadowRoot.querySelector('#ofi-shadow-theme')) {
          const themeStyle = document.createElement('style');
          themeStyle.id = 'ofi-shadow-theme';
          themeStyle.textContent = `
            :host {
              --chat-widget-header-color: transparent !important;
              --chat-widget-primary-color: #00e5ff !important;
              --chat-widget-background-color: rgba(0, 20, 43, 0.95) !important;
            }
            
            /* HIDE DEFAULT GHL BUBBLE SO OUR CUSTOM ONE SHOWS */
            #lc_text-widget--btn, .lc_text-widget--bubble { 
                opacity: 0 !important; 
                pointer-events: none !important; 
                transform: scale(0) !important;
                display: none !important;
            }

            .lc_text-widget--header {
              background: linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(0, 20, 43, 0.95) 100%) !important;
              border-bottom: 1px solid rgba(0, 229, 255, 0.2) !important;
            }
            
            /* Target ONLY the box container! This prevents the rogue 2px line! */
            .lc_text-widget--box, .lc_text-widget--box--agency-branding, #lc_text-widget--box {
              background: rgba(0, 20, 43, 0.95) !important;
              backdrop-filter: blur(20px) !important;
              -webkit-backdrop-filter: blur(20px) !important;
              border: 1px solid rgba(0, 229, 255, 0.3) !important;
              border-radius: 16px !important;
              box-shadow: 0 0 40px rgba(0, 229, 255, 0.15) !important;
              overflow: hidden !important;
            }
            .lc_text-widget--body {
              background: transparent !important;
            }
            .lc_text-widget--send-btn, [class*="send"] {
              background: #00e5ff !important;
              color: #00363d !important;
            }
            /* Target the powered by footer */
            .lc_text-widget--agency, .lc_text-widget_agency, [class*="agency"], [class*="footer"], .lc_text-widget_footer {
              background-color: rgba(0, 20, 43, 0.95) !important;
              background: rgba(0, 20, 43, 0.95) !important;
            }
          `;
          widget.shadowRoot.appendChild(themeStyle);
          clearInterval(bindChatTheme); // Stop polling when applied
        }
      });
    }, 500);

    setTimeout(() => clearInterval(bindChatTheme), 15000);
  });
})();
