import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InputGroup } from './InputGroup';
import { Loader2 } from 'lucide-react';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = useCallback(async () => {
    if (!username || !password) {
      console.warn("Username and password are required.");
      // In a real app, you might set an error state here to display a message to the user
      return;
    }
    setIsLoading(true);
    console.log('Attempting to log in with:', { username, password });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // TODO: Handle actual login success/error (e.g., show toast, redirect, set error state)
    console.log('Login attempt finished.');
    // Example: setUsername(''); setPassword(''); // Clear fields on success/failure if desired
  }, [username, password]);

  const handleSignUp = useCallback(() => {
    // In a real app, this would navigate to the sign-up page or open a sign-up modal
    console.log('Navigate to sign up page or open sign up modal');
  }, []);

  return (
    <Card className={cn(
      "w-[350px]",
      "bg-card text-card-foreground",
      "rounded-md shadow-lg",
      "p-6",
      "flex flex-col gap-4",
      className
    )}>
      <h1 className="text-3xl font-bold text-center text-card-foreground">
        Log in
      </h1>

      <InputGroup
        username={username}
        onUsernameChange={setUsername}
        password={password}
        onPasswordChange={setPassword}
      />

      <Button
        onClick={handleLogin}
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base"
        type="submit" 
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> 
            <span>Logging in...</span>
          </div>
        ) : (
          'Log in'
        )}
      </Button>

      <Button
        variant="link"
        onClick={handleSignUp}
        className="text-sm text-center text-muted-foreground hover:text-primary self-center p-0 h-auto font-normal"
      >
        or, sign up
      </Button>
    </Card>
  );
};

export default LoginCard;
