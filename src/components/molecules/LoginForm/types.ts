export interface LoginFormProps {
    password: string;
    invalidPassword: boolean;
    email: string;
    invalidEmail: boolean;
    onPasswordChange(password: string): void;
    onEmailChange(email: string): void;
};