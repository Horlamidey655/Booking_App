import { useForm } from "react-hook-form";

interface formData {
  onSubmit: (data: data) => void;
  isBooked: () => void;
}

interface data {
  Name: string;
  Date: string;
  Time: string;
}

const Booking = ({ onSubmit, isBooked }: formData) => {
  const { register, handleSubmit } = useForm<data>();
  return (
    <div className="booking">
      <h3 className="title">Book a table</h3>
      <p>This is where you will add the details of your booking</p>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          isBooked();
        })}
        className="booking-form"
      >
        <div className="form-label">
          <span>People</span>
          <input type="text" id="" {...register("Name", { required: true })} />
        </div>
        <div className="form-label">
          <span>Date</span>
          <input type="Date" id="" {...register("Date", { required: true })} />
        </div>
        <div className="form-label">
          <span>Time</span>
          <input
            type="datetime"
            id=""
            {...register("Time", { required: true })}
          />
        </div>

        <button className="btn btn-booking">Book now</button>
      </form>
    </div>
  );
};

export default Booking;
