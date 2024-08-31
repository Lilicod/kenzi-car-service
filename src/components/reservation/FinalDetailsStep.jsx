import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function FinalDetailsStep({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  const { register, handleSubmit, formState: { errors, isValid }, setValue, trigger } = useForm({
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
    },
    mode: "onChange",
  });

  useEffect(() => {
    // Trigger validation on mount
    trigger();
  }, [trigger]);

  const onSubmit = (data) => {
    // Update the parent component's formData
    Object.keys(data).forEach(key => handleChange({ target: { name: key, value: data[key] } }));
    nextStep();
  };

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value, { shouldValidate: true });
    handleChange(e);
  };

  return (
    <div className="space-y-4 w-full lg:w-1/2">
      <h2 className="text-xl font-medium">Step 3: Final Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            placeholder="First Name"
            onChange={handleInputChange}
            className={`border p-2 w-full rounded ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Last Name"
            onChange={handleInputChange}
            className={`border p-2 w-full rounded ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
        </div>
        <div>
          <input
            type="tel"
            {...register("phone", { 
              required: "Phone number is required",
              pattern: {
                // value: /^\d{10}$/,
                message: "Invalid phone number"
              }
            })}
            placeholder="Phone"
            onChange={handleInputChange}
            className={`border p-2 w-full rounded ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <input
            type="email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address"
              }
            })}
            placeholder="Email"
            onChange={handleInputChange}
            className={`border p-2 w-full rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Previous
          </button>
          <button
            type="submit"
            disabled={!isValid}
            className={`text-white px-4 py-2 rounded-lg ${isValid ? 'bg-primary' : 'bg-gray-300'}`}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}