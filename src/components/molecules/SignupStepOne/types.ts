export interface SingupStepOneProps {
    name: string;
    invalidName: boolean;
    email: string;
    invalidEmail: boolean;
    onNameChange(name: string): void;
    onEmailChange(email: string): void;
};