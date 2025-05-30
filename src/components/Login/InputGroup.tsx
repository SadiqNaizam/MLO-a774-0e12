import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputGroupProps {
  username: string;
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  className?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  username,
  onUsernameChange,
  password,
  onPasswordChange,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div>
        <Label htmlFor="username" className="sr-only">
          Username
        </Label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          autoComplete="username"
          className="bg-transparent text-card-foreground placeholder:text-muted-foreground text-sm"
        />
      </div>
      <div>
        <Label htmlFor="password" className="sr-only">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          autoComplete="current-password"
          className="bg-transparent text-card-foreground placeholder:text-muted-foreground text-sm"
        />
      </div>
    </div>
  );
};

export default InputGroup;
