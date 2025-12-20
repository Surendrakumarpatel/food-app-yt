import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const loading =  false;

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-backgroundColor ">
      <form className="md:p-8 w-full max-w-md rounded-lg md:border border-orange mx-4">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-6">Forgot Password</h1>
          <p className="text-sm mb-2 text-orange text-left">Enter your email address to reset your password</p>
        </div>
        <div className="relative mb-6">
            <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="pl-10"
            />
            <Mail className="absolute inset-y-2 left-2 text-orange pointer-events-none"/>
        </div>
        {
            loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait</Button>
            ) : (
                <Button className="bg-orange hover:bg-hoverOrange text-backgroundColor">Send Reset Link</Button>
            )
        }
        <div className="mb-12"></div>
        <Separator />
        <div className="flex  justify-center mt-3">
        <span className=" ">
            Back to{" "}
            <Link to="/login" className="text-orange">Login</Link>
        </span>
        </div>
        
      </form>
    </div>
  );
};

export default ForgotPassword;
