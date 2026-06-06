function MoreInfo({ heading, para }) {
  return (
    <section className="more-info">
      <h2 className="info-head">{heading}</h2>
      <p className="info-text">{para}</p>
    </section>
  );
}

export default MoreInfo;
