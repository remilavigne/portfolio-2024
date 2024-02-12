
export default function ContactMe() {
  const emailAddress = "remilavigne.pro@gmail.com";

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--content--title">
        <h2>Contact Me</h2>
        <p className="text-lg">
        Have a project you'd like to discuss or just want to connect? I'm all ears! Feel free to reach out through any of the channels below, and let's start a conversation:
        </p>
        <h3>You can me via email at:{" "}
          <a className="contact--link" href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </h3>
      </div>
      {/* <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              placeholder="Sarah"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              placeholder="Connor"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              placeholder="sarah.connor@gmail.com"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              placeholder="01 42 92 81 00"
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Say hello here..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form> */}
    </section>

  );
}
