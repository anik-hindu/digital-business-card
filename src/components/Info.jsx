function Info() {
  return (
    <section className="info">
      <img
        src="/src/assets/anik-saha.png"
        alt="Image of anik saha"
        className="profile-img"
      />
      <h1 className="name-text">Anik Saha</h1>
      <p className="profession-text">Frontend Developer</p>
      <p className="website-text">aniksaha.dev</p>
      <div className="btn-container">
        <a
          href="mailto:aniksahaofficial8@gmail.com"
          target="_blank"
          className="btn"
        >
          <img
            src="/src/assets/mail.png"
            className="link-icon"
            alt="email icon"
          />
          Email
        </a>
        <a
          className="btn-blue btn "
          href="https://www.linkedin.com/in/anik-saha-dev/"
          target="_blank"
        >
          <img
            src="/src/assets/linkedin.png"
            className="link-icon"
            alt="linkedin icon"
          />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Info;
