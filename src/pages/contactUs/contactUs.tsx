import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import PhoneIcon from "../../assets/images/phone_icon.png";
import EmailIcon from "../../assets/images/email_icon.png";
import contact1 from "../../assets/images/contact-location.svg";
import contact2 from "../../assets/images/contact-factory.svg";
import contact3 from "../../assets/images/contact-phone.svg";
import contact4 from "../../assets/images/contact-mail.svg";
import thumb from "../../assets/images/thumbsUp.png";
import crCross from "../../assets/images/cross.svg";
import direction from "../../assets/images/direction-svgrepo-com.svg"
import share from "../../assets/images/share-svgrepo-com.svg"

import { Link } from "react-router-dom";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const schema = z.object({
  firstName: z.string().min(1, { message: "Name is required" }).max(18),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(18),
  email: z.string({ required_error: "Email is required" }).email({ message: "Please enter a valid email" }),
  phone: z.string({ required_error: "Phone no. is required" }).regex(phoneRegex, "Please enter a valid phone number"),
  message: z.string().min(1, "Message is required").max(1000, "Only 1000 characters are allowed!"),
});

type FormFields = z.infer<typeof schema>;

const Contactus = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = () => {
    console.log(234234);
    ($("#thanksModal") as any).modal("show");
    console.log(44);
  };

  const navigate = useNavigate();
  useEffect(()=>{
    $("#modal-cross").click(()=>{
      ($("#thanksModal") as any).modal("hide");
    })
    $("#backToHome").click(()=>{
      ($("#thanksModal") as any).modal("hide");
    })
    
  },[]);

  return (
    <div>
      <section className="map-section">
        <div className="container">
          <div className="products-crumb d-md-flex d-none">
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <p>&nbsp;/&nbsp;</p>
            <p>Contact Us</p>
          </div>
          <h1>Contact Us</h1>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3677.5184864570065!2d69.57728677590785!3d22.8202993238451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ5JzEzLjEiTiA2OcKwMzQnNDcuNSJF!5e0!3m2!1sen!2sin!4v1707225183521!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <div className="btn-box">
              <button className="btn direction"><img src={direction} alt="" /><p>Get Direction</p></button>
              <button className="btn share"><img src={share} alt="" /><p>Share</p></button>
            </div> */}
          </div>
        </div>
      </section>

      <section className="contactus-section">
        <div className="container">
          <div className="row contact_row">
            <div className="here-left col">
              <h2>We’re here for you</h2>

              <div className="left-box">
                <div className="left-card">
                  <img src={contact1} alt="" />
                  <div>
                    <h5>Registered Office</h5>
                    <p>Adani Corporate House, Shantigram, near Vishnodevi Circle, S G Highway, Khodiyar, Ahmedabad, Gujarat. 382421</p>
                  </div>
                </div>
                <div className="left-card">
                  <img src={contact2} alt="" />
                  <div>
                    <h5>Copper Plant</h5>
                    <p>Plot No.1, Sector 04N, S. No.295/Paiki 6/Paiki 2, 138/1, 140, North of APL Road Near Adani Power Plant, APSEZ, Siracha and Navinal Village, mundra, Kachchh, Gujarat, 370421</p>
                  </div>
                </div>
                <div className="left-card">
                  <img src={contact3} alt="" />
                  <div className="cont">
                    <h5>Call Us</h5>
                    <p><a href="tel:+91 796851906">+91 796851906</a></p>
                  </div>
                </div>
                <div className="left-card">
                  <img src={contact4} alt="" />
                  <div className="cont">
                    <h5>Email Us</h5>
                    <p><a href="mailto:copper.marketing@adani.com">copper.marketing@adani.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="here-right col">
              <form className="contact-form needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
                <h3>Share to hear back from us</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="text" className={`form-control ${errors.firstName ? "is-invalid" : ""}`} id="floatingInput" placeholder="name@example.com" {...register("firstName")} />
                      <label htmlFor="floatingInput">First Name</label>
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName?.message}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="text" className={`form-control ${errors.lastName ? "is-invalid" : ""}`} id="floatingInput" placeholder="name@example.com" {...register("lastName")} />
                      <label htmlFor="floatingInput">Last Name</label>
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName?.message}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="floatingInput" placeholder="name@example.com" {...register("email")} />
                      <label htmlFor="floatingInput">Email ID</label>
                      {errors.email && <div className="invalid-feedback">{errors.email?.message}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="tel" className={`form-control ${errors.phone ? "is-invalid" : ""}`} id="floatingInput" placeholder="name@example.com" {...register("phone")} />
                      <label htmlFor="floatingInput">Contact Number</label>
                      {errors.phone && <div className="invalid-feedback">{errors.phone?.message}</div>}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating message mb-3">
                      <textarea rows={2} className={`form-control ${errors.message ? "is-invalid" : ""}`} id="floatingInput" placeholder="name@example.com" {...register("message")}></textarea>
                      <label htmlFor="floatingInput">How can we help</label>
                      {errors.message && <div className="invalid-feedback">{errors.message?.message}</div>}
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark rounded-pill" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="regional-section">
        <div className="container">
          <h2>Regional Office</h2>
          <div className="regional-row">
            <div className="regional-card">
              <h4>Mr Prakash Mehta</h4>
              <p>Adani Corporate House, Shantigram, near Vishnodevi Circle, S G Highway, Khodiyar, Ahmedabad, Gujarat. 382421</p>
              <div className="regional-info">
                <div className="d-flex">
                  <img src={PhoneIcon} alt="" />
                  <p><a href="tel:+91 796851906">+91 796851906</a></p>
                </div>
                <div className="d-flex">
                  <img src={EmailIcon} alt="" />
                  <p><a href="mailto:Prakash.marketing@adani.com">Prakash.marketing@adani.com</a></p>
                </div>
              </div>
            </div>
            <div className="regional-card">
              <h4>Mr Prakash Mehta</h4>
              <p>Adani Corporate House, Shantigram, near Vishnodevi Circle, S G Highway, Khodiyar, Ahmedabad, Gujarat. 382421</p>
              <div className="regional-info">
                <div className="d-flex">
                  <img src={PhoneIcon} alt="" />
                  <p><a href="tel:+91 796851906">+91 796851906</a></p>
                </div>
                <div className="d-flex">
                  <img src={EmailIcon} alt="" />
                  <p><a href="mailto:Prakash.marketing@adani.com">Prakash.marketing@adani.com</a></p>
                </div>
              </div>
            </div>
            <div className="regional-card">
              <h4>Mr Prakash Mehta</h4>
              <p>Adani Corporate House, Shantigram, near Vishnodevi Circle, S G Highway, Khodiyar, Ahmedabad, Gujarat. 382421</p>
              <div className="regional-info">
                <div className="d-flex">
                  <img src={PhoneIcon} alt="" />
                  <p><a href="tel:+91 796851906">+91 796851906</a></p>
                </div>
                <div className="d-flex">
                  <img src={EmailIcon} alt="" />
                  <p><a href="mailto:Prakash.marketing@adani.com">Prakash.marketing@adani.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="thanksModal" tabIndex={-1} role="dialog" aria-labelledby="thanksModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <div id="modal-cross" className="modal-cross">
                <img src={crCross} alt="" />
              </div>
              <img src={thumb} alt="" />
              <h3>
                Thank you for
                <br /> reaching out to us!{" "}
              </h3>
              <p>Our representative will call you shortly.</p>
              <button className="btn btn-dark rounded-pill" id="backToHome" onClick={()=>{navigate("/")}}>Back to Home Page</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
