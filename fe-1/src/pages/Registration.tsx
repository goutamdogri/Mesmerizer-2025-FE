import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { User, Mail, Phone, Building2, Users, Trophy } from "lucide-react";

interface RegistrationForm {
  eventTitle: string;
  participantNames: string[];
  email: string;
  whatsappNumber: string;
  alternatePhone: string;
  college: string;
  paySS: File;
  upiTransectionId: string;
}

const Registration = () => {
  const location = useLocation();
  const preSelectedEvent = location.state?.eventId;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>();

  const onSubmit = (data: RegistrationForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 registration-container"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">
            Register Now
          </h1>
          <p className="text-xl">
            Every great achievement begins with showing up&ndash;participation
            itself is a victory
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="neo-card bg-gradient-to-br from-[rgb(var(--color-secondary))]/5 to-transparent"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              Event Registration
            </h2>
            <div className="space-y-6">
              <div>
                <label className="flex items-center font-bold mb-4">
                  <Trophy className="mr-2 text-[rgb(var(--color-secondary))]" />
                  Events *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="neo-card flex items-center p-4 cursor-pointer hover:bg-[rgb(var(--color-secondary))]/5">
                    <input
                      type="checkbox"
                      value="battle-of-bands"
                      defaultChecked={preSelectedEvent === "battle-of-bands"}
                      {...register("events", {
                        required: "Select at least one event",
                      })}
                      className="mr-3 h-4 w-4"
                    />
                    Battle of Bands
                  </label>
                  <label className="neo-card flex items-center p-4 cursor-pointer hover:bg-[rgb(var(--color-secondary))]/5">
                    <input
                      type="checkbox"
                      value="dance-competition"
                      defaultChecked={preSelectedEvent === "dance-competition"}
                      {...register("events")}
                      className="mr-3 h-4 w-4"
                    />
                    Dance Competition
                  </label>
                  <label className="neo-card flex items-center p-4 cursor-pointer hover:bg-[rgb(var(--color-secondary))]/5">
                    <input
                      type="checkbox"
                      value="fashion-show"
                      defaultChecked={preSelectedEvent === "fashion-show"}
                      {...register("events")}
                      className="mr-3 h-4 w-4"
                    />
                    Fashion Show
                  </label>
                </div>
                {errors.events && (
                  <p className="text-[rgb(var(--color-primary))] mt-2">
                    {errors.events.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="neo-card bg-gradient-to-br from-[rgb(var(--color-secondary))]/5 to-transparent"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              Event Registration
            </h2>
            <div className="space-y-6">
              <div>
                <label className="flex items-center font-bold mb-4">
                  <Trophy className="mr-2 text-[rgb(var(--color-secondary))]" />
                  Events
                </label>
                <div className="relative">
                  <select
                    {...register("eventTitle", {
                      required: "Please select an event",
                    })}
                    defaultValue=""
                    className="neo-input w-full p-4 cursor-pointer bg-transparent border-4 border-black focus:outline-none focus:ring-4 focus:ring-[rgb(var(--color-secondary))]"
                  >
                    <option value="" disabled hidden>
                      Select an event
                    </option>
                    <option value="battle-of-bands">Battle of Bands</option>
                    <option value="dance-competition">Dance Competition</option>
                    <option value="fashion-show">Fashion Show</option>
                  </select>
                </div>
                {errors.eventTitle && (
                  <p className="text-[rgb(var(--color-primary))] mt-2">
                    {errors.eventTitle.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="neo-card bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-transparent"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              Team Information
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center font-bold mb-2"
                >
                  <User className="mr-2 text-[rgb(var(--color-primary))]" />
                  Participant Name 1
                </label>
                <input
                  type="text"
                  id="name"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
                  {...register("participantNames", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center font-bold mb-2"
                >
                  <Mail className="mr-2 text-[rgb(var(--color-secondary))]" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="whatsappNumber"
                  className="flex items-center font-bold mb-2"
                >
                  <Phone className="mr-2 text-[rgb(var(--color-accent))]" />
                  Whatsapp Number
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
                  {...register("whatsappNumber", {
                    required: "Whatsapp number is required",
                    pattern: {
                      value: /^\+?[\d\s-]+$/,
                      message: "Invalid Whatsapp number",
                    },
                  })}
                />
                {errors.whatsappNumber && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.whatsappNumber.message}
                  </p>
                )}
              </div>
              
              <div>
                <label
                  htmlFor="alternatePhone"
                  className="flex items-center font-bold mb-2"
                >
                  <Phone className="mr-2 text-[rgb(var(--color-accent))]" />
                  Alternate Phone Number
                </label>
                <input
                  type="tel"
                  id="alternatePhone"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
                  {...register("alternatePhone", {
                    required: "Whatsapp number is required",
                    pattern: {
                      value: /^\+?[\d\s-]+$/,
                      message: "Invalid Whatsapp number",
                    },
                  })}
                />
                {errors.alternatePhone && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.alternatePhone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="college"
                  className="flex items-center font-bold mb-2"
                >
                  <Building2 className="mr-2 text-[rgb(var(--color-purple))]" />
                  College/University
                </label>
                <input
                  type="text"
                  id="college"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
                  {...register("college", {
                    required: "College name is required",
                  })}
                />
                {errors.college && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.college.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="neo-card bg-gradient-to-br from-[rgb(var(--color-accent))]/5 to-transparent"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              Team Information
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="teamName"
                  className="flex items-center font-bold mb-2"
                >
                  <Trophy className="mr-2 text-[rgb(var(--color-accent))]" />
                  Team Name (Optional)
                </label>
                <input
                  type="text"
                  id="teamName"
                  className="neo-input focus:ring-[rgb(var(--color-accent))]"
                  {...register("teamName")}
                />
              </div>

              <div>
                <label
                  htmlFor="teamSize"
                  className="flex items-center font-bold mb-2"
                >
                  <Users className="mr-2 text-[rgb(var(--color-purple))]" />
                  Team Size (Optional)
                </label>
                <input
                  type="number"
                  id="teamSize"
                  min="1"
                  className="neo-input"
                  {...register("teamSize")}
                />
              </div>

              <div>
                <label
                  htmlFor="teamMembers"
                  className="flex items-center font-bold mb-2"
                >
                  <Users className="mr-2 text-[rgb(var(--color-indigo))]" />
                  Team Members' Names (Optional)
                </label>
                <textarea
                  id="teamMembers"
                  className="neo-input"
                  rows={3}
                  {...register("teamMembers")}
                  placeholder="John Doe, Jane Smith, ..."
                ></textarea>
              </div>
            </div>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="neo-button-primary w-full text-center text-xl py-4"
          >
            Submit Registration
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Registration;
