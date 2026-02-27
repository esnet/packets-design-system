export interface PktsButtonProps extends Partial<HTMLButtonElement> {
    label: string;
    variant?: 'primary' | 'secondary' | 'branded' | 'tertiary' | 'destructive'; 
    type?: 'button' | 'submit' | 'reset';
    size?: 'medium' | 'xxlarge';
    fill?: boolean;
    disabled?: boolean;
    as?: 'button' | 'a';
    href?: string;
    onClick?: (e: Event) => void;
};

//prepend, append, children (aka label)