export interface ESButtonProps extends Partial<HTMLButtonElement> {
    label: string;
    variant?: 'primary' | 'secondary' | 'branded' | 'tertiary' | 'destructive'; 
    type?: 'button' | 'submit' | 'reset';
    size?: 'medium' | 'xxlarge';
    fill?: boolean;
    disabled?: boolean;
    as?: 'button' | 'a';
    href?: string;
};

//prepend, append, children (aka label)