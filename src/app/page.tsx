import pkg from "../../package.json";

export default function Home() {
  return (
    <main className="page__body page__body--centered">
      <article className="page__article">
        <div className="content">
          <div className="content__body">
            <section className="content__section content__section--centered">
              <div className="title">
                <h1 className="title__headline">{pkg.name}</h1>
                <div className="claim">Software Development</div>
              </div>
            </section>
            <aside className="content__aside"></aside>
          </div>
        </div>
      </article>
      <aside className="page__aside">
        <div className="vertical-text2">{pkg.description}</div>
      </aside>
    </main>
  );
}
