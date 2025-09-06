"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner';
import { motion } from "framer-motion";

type FormValues = {
  Name: string;
  Email: string;
  Message: string;
};

const container = {
  hidden: {opacity: 0},
  show:{
    opacity: 1,
    transition:{
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden:{scale: 0},
  show: {scale: 1}
}

const ContactForm = () => {
  const [mounted, setMounted] = useState(false);

  // ensure we only render the interactive form on the client
  useEffect(() => {
    setMounted(true);
  }, []);

 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  
  const sendEmail = (params: any) => {
    const toast_id = toast.loading("Sending your message, Please wait...")

    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
    const public_id = process.env.NEXT_PUBLIC_PUBLIC_ID ?? "";

    if (!service_id || !template_id || !public_id) {
      console.error("Missing EmailJS environment variables");
      return;
    }

    emailjs
      .send(service_id, template_id, params, {
        publicKey: public_id,
        limitRate: { throttle: 5000 },
      })
      .then(
        () => toast.success("I have received your message, I will get back to you soon!",{
          id: toast_id
        }),
        (error) => toast.error("There was an error sending your message, Please try again later!",{
          id: toast_id
        }),
      );
  };

  const onSubmit = (data: any) => {
    const templateParams = {
      name: data.Name,
      email: data.Email,
      message: data.Message,
    };
    sendEmail(templateParams);
  };

  // Render a layout-stable placeholder during SSR to avoid layout shift + hydration diffs
  if (!mounted) {
    return <div className="max-w-md w-full space-y-4" aria-hidden />;
  }

  // Client-only interactive form
  return (
    <>
      <Toaster richColors={true} />
      <motion.form
      
      variants={container}
      initial="hidden"
      animate="show"
        // suppressHydrationWarning as a defensive fallback (optional)
        suppressHydrationWarning
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
        
          variants={item}

          type="text"
          placeholder="Name"
          defaultValue="" // stable default so SSR/client agree
          {...register("Name", { required: 'This Field is Required',
            minLength: {
              value: 3,
              message:'Name should be at least 3 characters long'
            } })}
          className="w-full rounded-md border border-[rgb(var(--accent))]/30 p-1 
            focus:ring-2 focus:ring-[rgb(var(--accent))]/50
            shadow-[inset_0_17px_5px_-9px_rgba(254,254,91,0.05)]
            hover:shadow-[inset_0_17px_5px_-9px_rgba(254,254,91,0.05),5px_5px_20px_0px_rgba(254,254,91,0.3)]
            transition-shadow duration-300"
        />
        {
          errors.Name && <span className="inline-block self-start text-[rgb(var(--accent))]">
            {errors.Name.message}</span>
        }
        <motion.input
        
          variants={item}

          type="email"
          placeholder="Email"
          defaultValue=""
          {...register("Email", { required: 'This Field is Required',
            minLength: {
              value: 12,
              message:'Email should be at least 12 characters long'
            } })}
          className="w-full rounded-md border border-[rgb(var(--accent))]/30 p-1 
            focus:ring-2 focus:ring-[rgb(var(--accent))]/50
            shadow-[inset_0_17px_5px_-9px_rgba(254,254,91,0.05)]
            hover:shadow-[inset_0_17px_5px_-9px_rgba(254,254,91,0.05),5px_5px_20px_0px_rgba(254,254,91,0.3)]
            transition-shadow duration-300"
        />
        {
          errors.Email && <span className="inline-block self-start text-[rgb(var(--accent))]">
            {errors.Email.message}</span>
        }

        <motion.textarea
          variants={item}
          placeholder="Message"
          defaultValue=""
          {...register("Message", { required: 'This Field is Required',
            minLength: {
              value: 25,
              message:'Message should be at least 25 characters long'
            } })}
          className="w-full rounded-md border border-[rgb(var(--accent))]/30 p-1 
            focus:ring-2 focus:ring-[rgb(var(--accent))]/50
            shadow-[inset_0_17px_5px_-9px_rgba(254,254,91,0.05)]
            hover:shadow-[inset_0_17px_5px_-9px_rgba(254,254,91,0.05),5px_5px_20px_0px_rgba(254,254,91,0.3)]
            transition-shadow duration-300"
        />
        {
          errors.Message && <span className="inline-block self-start text-[rgb(var(--accent))]">
            {errors.Message.message}</span>
        }

        <motion.input
        
          variants={item}

          type="submit"
          value="Cast your Message!"
          className="px-10 py-4 rounded-md text-[rgb(var(--foreground))] bg-[rgb(var(--background))] 
            focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]/50
            border border-[rgb(var(--accent))]/30 border-solid cursor-pointer capitalize backdrop-blur-sm
            shadow-[inset_0_17px_5px_-9px_rgba(254,254,91,0.05)]
            hover:shadow-[inset_0_17px_5px_-9px_rgba(254,254,91,0.05),5px_5px_20px_0px_rgba(254,254,91,0.3)]
            transition-shadow duration-300"
        />
      </motion.form>    
    </>
  );
};

export default ContactForm;
