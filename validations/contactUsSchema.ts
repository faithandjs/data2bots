
import { object,number, string } from "yup";

export const contactUsSchema = object().shape({
    companyName: string().label("Company Name").required("Company Name is required"),
    email: string().label("Email address").email().required("Email is required"),
    interests: string().label("Interests "),
    budgetRange: number().required("Budget range is required").label("Budget range "),
    additionalMessage: string().label("Additional Message"),
});
