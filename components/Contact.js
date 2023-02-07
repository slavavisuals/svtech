import React, { useState } from 'react';
import { sendContactForm } from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contact } from './data';

const ContactForm = () => {
  //Object to save specific form values
  const initValues = {
    btname: '',
    btemail: '',
    btmessage: '',
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  //Saving form values in object
  const initState = {
    values: initValues,
  };

  const [state, setState] = useState(initState);

  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      delete values.btname;
      delete values.btemail;
      delete values.btmessage;
      await sendContactForm(values);
      setState(initState);
      toast.success('Messsage was successfully sent');
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Get in touch
          </h2>
          <p className="subtitle">
            Want to get in touch? I&apos;d love to hear from you. Feel free to
            submit your inquiry via my convenient contact form.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* If there is any error in the form */}

          {error && <div className="text-red-600 text-xl">{error}</div>}

          <form
            method
            className="space-y-8 w-full max-w-[780px]"
            onSubmit={(event) => event.preventDefault()}
          >
            {/* This is for the bot (clickbait) */}
            <div className="hidden">
              <div className="honey">
                <label htmlFor="btname">Name</label>
                <input
                  id="btname"
                  name="btname"
                  type="text"
                  autoComplete="off"
                  value={values.btname}
                  onChange={handleChange}
                />
              </div>

              <div className="honey">
                <label htmlFor="btemail">Email</label>
                <input
                  id="btemail"
                  name="btemail"
                  type="email"
                  autoComplete="off"
                  value={values.btemail}
                  onChange={handleChange}
                />
              </div>

              <div className="honey">
                <label htmlFor="btmessage">Message</label>
                <textarea
                  id="btmessage"
                  name="btmessage"
                  autoComplete="off"
                  value={values.btmessage}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* This is for the normal folks */}

            <div className="flex gap-8">
              <input
                required
                className="input"
                name="name"
                type="text"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
              />

              <input
                required
                className="input"
                name="email"
                type="email"
                placeholder="Your email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <input
              required
              className="input"
              name="subject"
              type="text"
              placeholder="Subject"
              value={values.subject}
              onChange={handleChange}
            />
            <textarea
              required
              name="message"
              className="textarea"
              placeholder="Your message"
              value={values.message}
              onChange={handleChange}
            ></textarea>
            <button
              onClick={onSubmit}
              disabled={
                values.btname ||
                values.btemail ||
                values.btmessage ||
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              className="btn btn-lg bg-accent hover:bg-secondary-hover disabled:opacity-50"
            >
              Send message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
