import { useState } from "react";
import { useForm } from "react-hook-form";

interface contact {
  entry: input;
}
interface input {
  Name: string;
  Date: string;
  Time: string;
}
interface inputdata {
  fullName: string;
  number: string;
}

const Contact = ({ entry: { Name, Date, Time } }: contact) => {
  const [isReserved, setIsReserved] = useState(false);
  const { register, handleSubmit } = useForm<inputdata>();

  const submitHandler = (data: inputdata) => {
    console.log(
      `${data.fullName}, the user with the number ${data.number} booked a table for ${Name} people on ${Date} at ${Time}.`
    );
    setIsReserved(true);
  };
  return (
    <div className="contact">
      <h3 className="title">Contact details</h3>
      <div>
        {isReserved && (
          <p className="contact-details">
            You are making a reservation for{" "}
            <span className="bold">{Name}</span>, on{" "}
            <span className="bold">{Date}</span>, at{" "}
            <span className="bold">{Time}</span>
          </p>
        )}

        <form
          action=""
          className="contact-form"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="contact-label">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("fullName", { required: true })}
            />
          </div>
          <div className="contact-label">
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              id="number"
              placeholder="Enter your number"
              {...register("number", { required: true })}
            />
          </div>
          <button className="btn">Confirm Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
