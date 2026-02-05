"use client";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

const AuthButton = () => {
  const handleGithubSignIn = () => {};

  return (
    <Button onClick={handleGithubSignIn}>
      <Github className="h-4 w-4 mr-2" />
      Sign in With Github
    </Button>
  );
};

export default AuthButton;
