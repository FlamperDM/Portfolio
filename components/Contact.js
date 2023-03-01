import SectionHeader from './subComponents/SectionHeader'

export default () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <SectionHeader title="get in touch" description="" />
        <div className="row">
          
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div id="success">

                  </div>
                  <a id="sendMessageButton" href="mailto:contact@flampdiaz.dev" className="btn btn-primary btn-xl text-uppercase" type="submit">CONTACT ME</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}