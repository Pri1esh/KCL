import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import PhoneIcon from "../../assets/images/phone_icon.png";
import EmailIcon from "../../assets/images/email_icon.png";
import contact1 from "../../assets/images/contactUs3.png";
import contact2 from "../../assets/images/contactUs4.png";
import { Link } from "react-router-dom";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const schema = z.object({
  firstName: z.string().min(1, { message: "Name is required" }).max(18),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(18),
  email: z.string({ required_error: "Email is required" }).email({ message: "Please enter a valid email" }),
  phone: z.string({ required_error: "Phone no. is required" }).regex(phoneRegex, "Please enter a valid phone number"),
  message: z.string().min(30, "Please enter at least 30 charecters").max(1000, "Only 1000 characters are allowed!"),
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
    console.log();
  };

  return (
    <div>
      <section className="map-section">
        <div className="container">
        <div className="products-crumb d-md-flex d-none">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <p>&nbsp;/&nbsp;</p>
          <Link to={"/products"}>
            <p>Products</p>
          </Link>
          <p>&nbsp;/&nbsp;</p>
          <p>Copper Cathode</p>
        </div>
          <h1>Contact Us</h1>
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14709.823756745978!2d69.5861301321549!3d22.82261512885875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39512bc1f46323a1%3A0x7ba9a510e4f3621b!2sKutch%20Copper%20Limited!5e0!3m2!1sen!2sin!4v1706984489654!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <section className="contactus-section">
        <div className="container">
          <div className="row">
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
                  <img src={contact1} alt="" />
                  <div>
                    <h5>Copper Plant</h5>
                    <p>Plot No.1, Sector 04N, S. No.295/Paiki 6/Paiki 2, 138/1, 140, North of APL Road Near Adani Power Plant, APSEZ, Siracha and Navinal Village, mundra, Kachchh, Gujarat, 370421</p>
                  </div>
                </div>
                <div className="left-card">
                  <img src={contact1} alt="" />
                  <div className="cont">
                    <h5>Call Us</h5>
                    <p>+91 0796851906</p>
                  </div>
                </div>
                <div className="left-card">
                  <img src={contact1} alt="" />
                  <div className="cont">
                    <h5>Email Us</h5>
                    <p>copper.marketing@adani.com</p>
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
                  <p>+91 0796851906</p>
                </div>
                <div className="d-flex">
                  <img src={EmailIcon} alt="" />
                  <p>Prakash.marketing@adani.com</p>
                </div>
              </div>
            </div>
            <div className="regional-card">
              <h4>Mr Prakash Mehta</h4>
              <p>Adani Corporate House, Shantigram, near Vishnodevi Circle, S G Highway, Khodiyar, Ahmedabad, Gujarat. 382421</p>
              <div className="regional-info">
                <div className="d-flex">
                  <img src={PhoneIcon} alt="" />
                  <p>+91 0796851906</p>
                </div>
                <div className="d-flex">
                  <img src={EmailIcon} alt="" />
                  <p>Prakash.marketing@adani.com</p>
                </div>
              </div>
            </div>
            <div className="regional-card">
              <h4>Mr Prakash Mehta</h4>
              <p>Adani Corporate House, Shantigram, near Vishnodevi Circle, S G Highway, Khodiyar, Ahmedabad, Gujarat. 382421</p>
              <div className="regional-info">
                <div className="d-flex">
                  <img src={PhoneIcon} alt="" />
                  <p>+91 0796851906</p>
                </div>
                <div className="d-flex">
                  <img src={EmailIcon} alt="" />
                  <p>Prakash.marketing@adani.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
