export interface ESButtonProps extends Partial<HTMLButtonElement> {
    label: string;
    variant?: "primary" | "secondary" | "branded" | "tertiary" | "destructive"; 
    type?: "button" | "submit" | "reset";
    className?: string;
    size?: "medium" | "xxlarge";
    fill?: boolean;
    disabled?: boolean;
    as?: "button" | "a";
    href?: string;
};

// How to incorporate slots / icons etc

