import './App.css';
import logo from "./images/logo.svg";

function App() {

  return (
    <div>
      <header className='hero'>
        <nav className='hero__nav container'>
          <figure className='hero__logo'>
            <img src={logo} alt="logo" className='hero__huddle'/>
          </figure>
          <a href="#" className='hero__cta'>Try it free</a>
        </nav>
        <section className='hero__main container'>
          <div className="hero__texts">
            <h1 className='hero__title'> Build The Community Your Fans Will Love</h1>
            <p className="hero__paragraph">Huddle re-imagines the way we  build communities. You have a voice, but so does your audience. Create connections whit your users as you engage in genuine discussion</p>
            <a href="#" className="cta"> Get Started For Free</a>
          </div>
          <figure className='hero__picture'>
            <img src="../src/images/screen-mockups.svg" alt="" className='hero__img' />
          </figure>
          <div className="hero__numbers">
            <div className="hero__item">
              <img src="../src/images/icon-communities.svg" alt="" className='hero__icon' />
              <h3 className="hero__number">1.4k+</h3>
              <p className="hero__community">Communities Formed</p>
            </div>
            <div className="hero__item">
              <img src="../src/images/icon-messages.svg" alt="" className='hero__icon' />
              <h3 className="hero__number">2.7m+</h3>
              <p className="hero__community">Messages Sent</p>
            </div>
          </div>
        </section>
        <div className='wave wave--bottom'></div>
      </header>
      <main className='main'>
        <section className='section'>
          <div className="section__container container">
            <figure className="section__picture">
              <img src="../src/images/illustration-grow-together.svg" alt="" className='section__img' />
            </figure>
            <div className="section__texts">
              <h2 className="subtitle">Grow Together</h2>
              <p className="section__paragraph">Generate meaningful discussions whit your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </p>
            </div>
          </div>
        </section>
        <section className='section section--white'>
          <div className="section__container container section__container--inverse">
            <figure className="section__picture">
              <img src="../src/images/illustration-flowing-conversation.svg" alt="" className='section__img' />
            </figure>
            <div className="section__texts">
              <h2 className="subtitle">Flowing Conversation</h2>
              <p className="section__paragraph">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
            </div>
          </div>
          <div className='wave wave--top'></div>
          <div className='wave wave--bottom'></div>
        </section>
        <section className='section'>
          <div className="section__container container">
            <figure className="section__picture">
              <img src="../src/images/illustration-your-users.svg" alt="" className='section__img' />
            </figure>
            <div className="section__texts">
              <h2 className="subtitle">Your Users</h2>
              <p className="section__paragraph">It takes no time at all to integrate Huddle whit your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
            </div>
          </div>
        </section>
        <section className='question'>
          <div className="question__texts container">
            <h2 className='subtitle'>Ready To Build Your Community?</h2>
            <a href="" className="cta">Get Started For Free</a>
          </div>
          <div className='wave wave--top'></div>
          <div className='wave wave--bottom'></div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container container">
          <section className="footer__newsletter">
            <h2 className="fotter__title">NewsLetter</h2>
            <p className='footer__paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis excepturi laborum nesciunt nostrum vitae repudiandae, error harum?</p>
            <form className="footer__form">
              <input type="email" className='footer__input' />
              <input type="submit" className='footer__cta' value="Subscribe" />
            </form>
          </section>
          <section className="footer__content">
            <img src="" alt="" />
            <p className="footer__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique illo molestias fuga harum? Incidunt, distinctio ea dolor doloribus quibusdam dignissimos.</p>
            <div className="footer__contact">
              <img src="../src/images/icon-phone.svg" alt="" className='footer__img' />
            </div>
            <div className="footer__contact footer__contact--email">
              <img src="../src/images/icon-email.svg" alt="" className='footer__img' />
            </div>
            <div className="footer__social">
              <a href="#" className='footer__link'>
                <img src="../src/images/fb.svg" alt="" className='footer__icon' />
              </a>
              <a href="#" className='footer__link'>
                <img src="../src/images/instagram.svg" alt="" className='footer__icon' />
              </a>
              <a href="#" className='footer__link'>
                <img src="../src/images/twitter.svg" alt="" className='footer__icon' />
              </a>
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default App
