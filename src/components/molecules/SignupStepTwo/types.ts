export interface SingupStepTwoProps {
    password: string;
    invalidPassword: boolean;
    confirmPassword: string;
    invalidConfirmPassword: boolean;
    onPasswordChange(name: string): void;
    onConfirmPasswordChange(email: string): void;
};