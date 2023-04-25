import React, { useState } from "react";
import { yupResolver as yupResolvers } from "@hookform/resolvers/yup";
import { Container } from "../Container";
import { Input } from "../formControls/Input";
import { Textarea } from "../formControls/Textarea";
import Select from "../formControls/Select";
import { FormProvider, useForm } from "react-hook-form";
import { contactUsSchema } from "@/validations/contactUsSchema";

export default function Contact() {
  const defaultValues = {
    companyName: "",
    email: "",
    interests: "",
    budgetRange: 0,
  };

  interface IcontactUs {
    companyName: string;
    email: string;
    interests: string;
    budgetRange: string | number;
    additionalMessage?: string;
  }
  const isClient = () => typeof window === "object";

  const yupResolver = isClient() ? yupResolvers : undefined;

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver ? yupResolvers(contactUsSchema) : undefined,
    defaultValues,
  });
  const onSubmit = async (payload: IcontactUs) => {
    console.log("payload", {
      ...payload,
      interests: interest,
    });
  };
  const [interest, setInterest] = useState<string | number>(0);
  return (
    <div className="md:pt-32 pb-24 pt-14 overflow-hidden">
      <Container>
        {/* <div className=' flex flex-col relative justify-center md:flex-row md:items-center lg:gap-12 md:gap-6'> */}
        <div>
          <h4 className=" text-[2.375rem] relative text-primary pb-10 max-w-[440px] ">
            Let’s know how we can help your team
          </h4>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="grid gap-6 ">
                <div className="grid md:grid-cols-2 gap-y-6 lg:gap-x-40 gap-x-20">
                  <Input
                    {...{
                      name: "companyName",
                      label: "Enter Company  name",
                      placeholder: "Company name",
                      type: "text",
                    }}
                  />
                  <Input
                    {...{
                      name: "email",
                      label: "Enter your Email Address",
                      placeholder: "email",
                      type: "email",
                    }}
                  />

                  <Select
                    id="interests"
                    name="interests"
                    placeholder="Select Option"
                    className="!py-3 !border-solid !mt-0 pl-[0.35rem] h-[50px]"
                    options={[
                      {
                        label: "Interest one",
                        value: 1,
                      },
                      {
                        label: "Interest two",
                        value: 2,
                      },
                    ]}
                    optionPlaceHolder="Select Category"
                    onChange={(value) => {
                      console.log(value);
                      setInterest(value);
                    }}
                    label="What are you interested in"
                  />
                  <Input
                    {...{
                      name: "budgetRange",
                      label: "What is your Budget range",
                      placeholder: "Budget Range",
                      type: "number",
                    }}
                  />
                </div>
                <Textarea
                  name="additionalMessage"
                  classes="h-32"
                  label="Additional message"
                />
                <button
                  className=" px-10 py-3 rounded text-white bg-[#4388C8] w-max"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
}
