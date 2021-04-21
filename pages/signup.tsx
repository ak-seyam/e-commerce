import SignUpForm from "../components/forms/singupForm";

export default function SignUpPage() {
  const handleOnSubmit = async (data:any) => {
    alert(data)
  }
 return <SignUpForm onSubmit={handleOnSubmit}/> 
}