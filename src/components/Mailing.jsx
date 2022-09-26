import React from 'react'

const Mailing = () => {
  return (
    <section className="mailing">
        <h1>Stay Connected With Us!</h1>
        <h2>Subscribe to our mailing list to get notified, every time we add a new course.</h2>
        <form>
            <input type="email" placeholder="Enter your email" required />
            <button className="btn m-btn">Subscribe</button>
        </form>
    </section>
  )
}

export default Mailing