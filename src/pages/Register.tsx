import { RegisterForm } from "@/components/auth/RegisterForm";
import { Header } from "@/components/Header";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="flex justify-center items-center">
          <RegisterForm />
        </div>
      </main>
    </div>
  );
};

export default Register;