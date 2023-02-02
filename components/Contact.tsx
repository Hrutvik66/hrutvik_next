import { useState } from "react";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const [message, setMessage] = useState({
    NameMessage: "",
    EmailMessage: "",
    SubjectMessage: "",
    MessageMessage: "",
  });

  const isRequired = (value: string) => (value === "" ? false : true);

  const isEmailValid = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  };

  const sendEmail = async (e: any) => {
    try {
      const { Name, Email, Subject, Message } = data;

      e.preventDefault();

      //   Check for empty field,invalid email and set error message
      if (!isRequired(Name)) {
        setMessage({
          NameMessage: "Name is required",
          EmailMessage: "",
          SubjectMessage: "",
          MessageMessage: "",
        });
        return;
      } else if (!isRequired(Email)) {
        setMessage({
          ...message,
          EmailMessage: "Email is required",
          NameMessage: "",
          SubjectMessage: "",
          MessageMessage: "",
        });
        return;
      } else if (!isEmailValid(Email)) {
        setMessage({
          ...message,
          EmailMessage: "Invalid Email",
          NameMessage: "",
          SubjectMessage: "",
          MessageMessage: "",
        });
        return;
      } else if (!isRequired(Subject)) {
        setMessage({
          ...message,
          SubjectMessage: "Subject is required",
          NameMessage: "",
          EmailMessage: "",
          MessageMessage: "",
        });
        return;
      } else if (!isRequired(Message)) {
        setMessage({
          ...message,
          MessageMessage: "Message is required",
          NameMessage: "",
          EmailMessage: "",
          SubjectMessage: "",
        });
        return;
      }
      fetch("/api/Email", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          toast.success("Thank you for contacting me! Have a nice day!");
          setData({
            Name: "",
            Email: "",
            Subject: "",
            Message: "",
          });
          setMessage({
            EmailMessage: "",
            NameMessage: "",
            SubjectMessage: "",
            MessageMessage: "",
          });
        } else {
          toast.error("Something went wrong, please try again later");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="Contact"
      className="lg:p-[4rem_5rem_4rem_9rem] p-[3.5rem_1rem_1rem] font-Inter"
      
    >
      <div className="flex items-center pb-[2rem] text-[#ccd6f6]">
        <h1 className="font-bold text-[2rem]">Contact Me</h1>
        <hr className="flex-1 h-1px ml-[1rem] border-solid bg-[#ccd6f6] outline-none" />
      </div>
      <div className="flex lg:flex-row lg:space-x-6 flex-col items-center p-[2rem_0rem] font-Fira justify-center text-white space-x-0">
        <div className="flex-1 text-[1rem] text-[#8892b0] leading-[26px]">
          <h1 className="mb-[1rem] font-bold text-[2rem] text-[#ccd6f6] text-center">
            Get In Touch
          </h1>
          <p className="md:text-[1.1rem] text-justify">
            I am currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I will try
            my best to get back to you!
          </p>
        </div>
        <div className="flex flex-col flex-1 font-Abel mt-[2rem] w-full">
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                value={data.Name}
                onChange={(e) => setData({ ...data, Name: e.target.value })}
                className="lg:w-[17rem] p-[1rem] outline-none border-[1px] border-solid border-[#0a192f] rounded-[5px] bg-[#182438] text-white font-Fira  focus:border-[#00ffff] focus:border-spacing-[1rem]"
              />
              <span
                id="nameMessage"
                className="mb-[1rem] text-left text-red-500"
              >
                {message.NameMessage}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={data.Email}
                onChange={(e) => setData({ ...data, Email: e.target.value })}
                className="lg:w-[17rem] p-[1rem] outline-none border-[1px] border-solid border-[#0a192f] rounded-[5px] bg-[#182438] text-white font-Fira focus:border-[#00ffff] focus:border-spacing-[1rem]"
              />
              <span
                id="emailMessage"
                className="mb-[1rem] text-left text-red-500"
              >
                {message.EmailMessage}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              value={data.Subject}
              onChange={(e) => setData({ ...data, Subject: e.target.value })}
              className="p-[1rem] outline-none border-[1px] border-solid border-[#0a192f] rounded-[5px] bg-[#182438] text-white font-Fira focus:border-[#00ffff] focus:border-spacing-[1rem]"
            />
            <span
              id="subjectMessage"
              className="mb-[1rem] text-left text-red-500"
            >
              {message.SubjectMessage}
            </span>
          </div>
          <div className="flex flex-col">
            <textarea
              name="Message"
              placeholder="Message"
              value={data.Message}
              onChange={(e) => setData({ ...data, Message: e.target.value })}
              className="h-[9rem] p-[1rem] outline-none border-[1px] border-solid border-[#0a192f] rounded-[5px] bg-[#182438] text-white font-Fira focus:border-[#00ffff] focus:border-spacing-[1rem] resize-none"
            ></textarea>
            <span
              id="messageMessage"
              className="mb-[1rem] text-left text-red-500"
            >
              {message.MessageMessage}
            </span>
          </div>
          <button
            onClick={sendEmail}
            className={`self-center text-bold border-[1px] border-solid border-[#3fffff] font-Fira bg-[#0a192f] text-[#ccd6f6] px-[1rem] py-[0.6rem] cursor-pointer transition-all duration-700 ease-in-out shadow-[inset_0_0_0_0_#3fffff] w-[10rem] p-[2rem] backdrop-blur-[10px] outline-none hover:shadow-[inset_10rem_0_0_0_#00ffffa7] hover:text-[#0a192f]`}
          >
            Send
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Contact;
