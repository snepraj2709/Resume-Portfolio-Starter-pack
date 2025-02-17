const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic =
      "https://res.cloudinary.com/dqg4mckho/image/upload/v1692808401/Portfolio/ngy0klk53ofcnrjbcuxz.png";
    var bio = data.bio;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sneha's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <b href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
