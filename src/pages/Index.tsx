import Icon from '@/components/ui/icon';

const tiers = [
  {
    id: 'platinum',
    name: 'Platinum',
    subtitle: 'Высший уровень партнёрства',
    price: '500 000 ₽',
    color: 'platinum',
    borderColor: 'border-[#a8b4c2]/40',
    glowColor: 'shadow-[0_0_60px_rgba(168,180,194,0.12)]',
    topBarColor: 'from-[#a8b4c2] via-[#dde4ec] to-[#a8b4c2]',
    badgeBg: 'bg-[#a8b4c2]/10',
    badgeText: 'text-[#dde4ec]',
    featured: true,
    benefits: [
      'Логотип на главной сцене и баннерах',
      'Эксклюзивный стенд в VIP-зоне',
      '10 билетов категории VVIP',
      'Выступление спикера (15 мин)',
      'Интервью в официальных медиа',
      'Именной приём с организаторами',
      'Полный брендинг на всех носителях',
      'Отчёт о медиаохвате мероприятия',
    ],
    icon: 'Crown',
  },
  {
    id: 'gold',
    name: 'Gold',
    subtitle: 'Премиальное присутствие',
    price: '250 000 ₽',
    color: 'gold',
    borderColor: 'border-[#c9a84c]/40',
    glowColor: 'shadow-[0_0_60px_rgba(201,168,76,0.12)]',
    topBarColor: 'from-[#8a6820] via-[#e8c96a] to-[#8a6820]',
    badgeBg: 'bg-[#c9a84c]/10',
    badgeText: 'text-[#e8c96a]',
    featured: false,
    benefits: [
      'Логотип на сцене и пресс-волле',
      'Стенд в основной зоне (6 м²)',
      '6 билетов категории VIP',
      'Упоминание в медиа-выпусках',
      'Брендинг в программе мероприятия',
      'Встреча с ключевыми спикерами',
    ],
    icon: 'Star',
  },
  {
    id: 'silver',
    name: 'Silver',
    subtitle: 'Оптимальный старт',
    price: '100 000 ₽',
    color: 'silver',
    borderColor: 'border-[#7a8694]/40',
    glowColor: 'shadow-[0_0_40px_rgba(122,134,148,0.08)]',
    topBarColor: 'from-[#4a5562] via-[#c4cdd6] to-[#4a5562]',
    badgeBg: 'bg-[#7a8694]/10',
    badgeText: 'text-[#c4cdd6]',
    featured: false,
    benefits: [
      'Логотип в каталоге партнёров',
      'Стол в выставочной зоне',
      '3 билета категории Business',
      'Упоминание в соцсетях события',
    ],
    icon: 'Award',
  },
];

const stats = [
  { value: '5 000+', label: 'Участников' },
  { value: '120+', label: 'Спикеров' },
  { value: '3', label: 'Дня события' },
  { value: '40+', label: 'Партнёров прошлых лет' },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: 'linear-gradient(180deg, hsl(20 14% 6% / 0.95) 0%, transparent 100%)', backdropFilter: 'blur(12px)' }}>
        <div className="font-cormorant text-xl font-light tracking-[0.2em] text-white/80">
          SUMMIT<span className="gold-text font-semibold"> 2025</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-montserrat text-xs tracking-[0.15em] text-white/50 uppercase">
          <a href="#about" className="hover:text-white/90 transition-colors">О событии</a>
          <a href="#partners" className="hover:text-white/90 transition-colors">Уровни</a>
          <a href="#contact" className="hover:text-white/90 transition-colors">Контакты</a>
        </div>
        <button className="font-montserrat text-xs tracking-[0.15em] uppercase px-6 py-2.5 border border-[hsl(var(--gold)/0.5)] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold)/0.1)] transition-all duration-300">
          Стать партнёром
        </button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/2d3d3998-806e-4ff2-b765-3a17099682da/files/880b9e83-0e81-4ad0-8a86-48208a591aab.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(20 14% 6% / 0.3) 0%, hsl(20 14% 6% / 0.85) 70%, hsl(20 14% 6%) 100%)' }} />
        </div>

        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-40 opacity-20" style={{ background: 'linear-gradient(180deg, transparent, hsl(var(--gold)), transparent)' }} />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-40 opacity-20" style={{ background: 'linear-gradient(180deg, transparent, hsl(var(--gold)), transparent)' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="font-montserrat text-xs tracking-[0.4em] uppercase text-[hsl(var(--gold)/0.7)] mb-6 opacity-0 animate-fade-up">
            Эксклюзивное партнёрство
          </div>
          <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-6 opacity-0 animate-fade-up delay-200">
            <span className="animate-shimmer">Партнёры</span>
            <br />
            <span className="text-white/90 italic">&amp; Спонсоры</span>
          </h1>
          <div className="divider-gold w-32 mx-auto mb-8 opacity-0 animate-fade-up delay-300" />
          <p className="font-montserrat text-base md:text-lg font-light leading-relaxed text-white/60 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-400">
            Присоединяйтесь к числу брендов, которые создают историю.<br />
            Три уровня партнёрства — для каждого своя возможность.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-500">
            <button className="font-montserrat text-sm tracking-[0.15em] uppercase px-10 py-4"
              style={{ background: 'linear-gradient(135deg, hsl(var(--gold-dark)), hsl(var(--gold-light)), hsl(var(--gold-dark)))', color: 'hsl(20 14% 6%)' }}>
              <span className="font-semibold">Стать партнёром</span>
            </button>
            <button className="font-montserrat text-sm tracking-[0.15em] uppercase px-10 py-4 border border-white/20 text-white/70 hover:border-white/40 hover:text-white/90 transition-all duration-300">
              Узнать подробнее
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-white/60">Scroll</div>
          <div className="w-px h-10 animate-float" style={{ background: 'linear-gradient(180deg, hsl(var(--gold)), transparent)' }} />
        </div>
      </section>

      {/* Stats */}
      <section id="about" className="py-20 relative">
        <div className="divider-gold" />
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-cormorant text-5xl md:text-6xl font-light gold-text mb-2">{stat.value}</div>
                <div className="font-montserrat text-xs tracking-[0.2em] uppercase text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-gold" />
      </section>

      {/* Sponsorship Tiers */}
      <section id="partners" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-montserrat text-xs tracking-[0.4em] uppercase text-[hsl(var(--gold)/0.6)] mb-4">
              Возможности партнёрства
            </div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white/90 mb-4">
              Уровни спонсорства
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`card-luxury rounded-none ${tier.borderColor} ${tier.glowColor} border transition-all duration-500 hover:-translate-y-1 ${tier.featured ? 'md:-mt-4' : ''}`}
              >
                <div className={`h-px bg-gradient-to-r ${tier.topBarColor}`} />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center ${tier.badgeBg} border ${tier.borderColor}`}>
                      <Icon name={tier.icon} fallback="Award" size={22} className={tier.badgeText} />
                    </div>
                    {tier.featured && (
                      <span className="font-montserrat text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 bg-[hsl(var(--gold)/0.15)] border border-[hsl(var(--gold)/0.3)] text-[hsl(var(--gold))]">
                        Топ выбор
                      </span>
                    )}
                  </div>

                  <div className={`font-cormorant text-4xl font-semibold mb-1 ${
                    tier.color === 'platinum' ? 'platinum-text' :
                    tier.color === 'gold' ? 'gold-text' : 'silver-text'
                  }`}>
                    {tier.name}
                  </div>
                  <div className="font-montserrat text-xs tracking-wider text-white/40 uppercase mb-6">
                    {tier.subtitle}
                  </div>

                  <div className="mb-6">
                    <div className="font-cormorant text-3xl font-light text-white/90">{tier.price}</div>
                    <div className="font-montserrat text-[10px] tracking-[0.2em] text-white/30 uppercase mt-1">
                      Инвестиция в партнёрство
                    </div>
                  </div>

                  <div className="divider-gold mb-6" />

                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                          tier.color === 'platinum' ? 'bg-[#dde4ec]' :
                          tier.color === 'gold' ? 'bg-[hsl(var(--gold))]' : 'bg-[#c4cdd6]'
                        }`} />
                        <span className="font-montserrat text-sm text-white/60 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full font-montserrat text-xs tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
                      tier.featured
                        ? 'font-semibold hover:opacity-90'
                        : `border ${tier.borderColor} hover:bg-white/5 text-white/70 hover:text-white/90`
                    }`}
                    style={tier.featured ? {
                      background: 'linear-gradient(135deg, hsl(var(--gold-dark)), hsl(var(--gold-light)), hsl(var(--gold-dark)))',
                      color: 'hsl(20 14% 6%)'
                    } : {}}>
                    Выбрать уровень
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-24 px-6 relative">
        <div className="divider-gold mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-montserrat text-xs tracking-[0.4em] uppercase text-[hsl(var(--gold)/0.6)] mb-4">
                Почему мы
              </div>
              <h2 className="font-cormorant text-5xl font-light text-white/90 leading-tight mb-6">
                Ваш бренд —<br />
                <em className="gold-text">в центре внимания</em>
              </h2>
              <p className="font-montserrat text-sm font-light leading-relaxed text-white/50 mb-8">
                Мы создаём пространство, где встречаются лидеры индустрии, инвесторы и новаторы. Ваш бренд получает доступ к аудитории, которая принимает решения.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Users', text: 'Прямой контакт с целевой аудиторией' },
                  { icon: 'TrendingUp', text: 'Измеримый рост узнаваемости бренда' },
                  { icon: 'Globe', text: 'Медиаохват в ведущих изданиях' },
                  { icon: 'Handshake', text: 'Нетворкинг с топ-менеджерами' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-[hsl(var(--gold)/0.3)] bg-[hsl(var(--gold)/0.05)]">
                      <Icon name={item.icon} fallback="Star" size={14} className="text-[hsl(var(--gold))]" />
                    </div>
                    <span className="font-montserrat text-sm text-white/60">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card-luxury border border-[hsl(var(--gold)/0.2)] p-10 glow-gold">
                <div className="font-cormorant text-6xl font-light gold-text mb-2">97%</div>
                <div className="font-montserrat text-xs tracking-wider uppercase text-white/40 mb-6">Партнёров возвращаются снова</div>
                <div className="divider-gold mb-6" />
                <blockquote className="font-cormorant text-xl italic text-white/70 leading-relaxed mb-4">
                  «Партнёрство с Summit открыло нам двери к аудитории, которую мы искали годами.»
                </blockquote>
                <div className="font-montserrat text-xs text-white/30 tracking-wider">— Генеральный директор, Fortune 500</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[hsl(var(--gold)/0.1)] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold) / 0.05) 0%, transparent 70%)' }} />
        <div className="divider-gold mb-24" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="font-montserrat text-xs tracking-[0.4em] uppercase text-[hsl(var(--gold)/0.6)] mb-6">
            Готовы к партнёрству?
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white/90 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="font-montserrat text-sm text-white/50 leading-relaxed mb-10">
            Наша команда готова ответить на все вопросы и подобрать оптимальный формат сотрудничества для вашего бренда.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <input
              type="text"
              placeholder="Ваше имя"
              className="bg-transparent border border-white/15 focus:border-[hsl(var(--gold)/0.5)] outline-none px-6 py-4 font-montserrat text-sm text-white/80 placeholder-white/25 w-full sm:w-64 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Email адрес"
              className="bg-transparent border border-white/15 focus:border-[hsl(var(--gold)/0.5)] outline-none px-6 py-4 font-montserrat text-sm text-white/80 placeholder-white/25 w-full sm:w-64 transition-colors duration-300"
            />
            <button
              className="font-montserrat text-sm tracking-[0.15em] uppercase px-8 py-4 font-semibold whitespace-nowrap w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, hsl(var(--gold-dark)), hsl(var(--gold-light)), hsl(var(--gold-dark)))', color: 'hsl(20 14% 6%)' }}>
              Отправить
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/30 flex-wrap">
            <Icon name="Mail" size={14} />
            <span className="font-montserrat text-xs">partners@summit2025.ru</span>
            <span className="mx-3">·</span>
            <Icon name="Phone" size={14} />
            <span className="font-montserrat text-xs">+7 (800) 000-00-00</span>
          </div>
        </div>
        <div className="divider-gold mt-24" />
      </section>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-lg font-light tracking-[0.2em] text-white/40">
            SUMMIT<span className="gold-text"> 2025</span>
          </div>
          <div className="font-montserrat text-xs text-white/25 tracking-wider">
            © 2025 Summit. Все права защищены.
          </div>
          <div className="flex items-center gap-6">
            {['Telegram', 'Instagram', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}