import { LoginForm } from "@/components/auth/LoginForm";
import { Header } from "@/components/Header";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="flex justify-center items-center">
          <LoginForm />
        </div>
      </main>
    </div>
  );
};

export default Login;