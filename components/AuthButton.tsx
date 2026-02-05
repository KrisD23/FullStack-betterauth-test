"use client";
import { Github, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { signIn, useSession } from "@/lib/auth-client";

const AuthButton = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading....
      </div>
    );
  }

  const handleGithubSignIn = async () => {
    await signIn.social({
      provider: "github",
    });
  };

  return (
    <Button onClick={handleGithubSignIn}>
      <Github className="h-4 w-4 mr-2" />
      Sign in With Github
    </Button>
  );
};

export default AuthButton;
