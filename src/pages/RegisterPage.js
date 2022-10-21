import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";

function RegisterPage() {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);

    if (!error) {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto mt-16">
      <h1 className="font-bold text-4xl text-center">Register</h1>
      <RegisterInput register={onRegisterHandler} />
    </div>
  );
}

export default RegisterPage;
