import './Button.scss';

type Icon = {
    src: string
    altText: string
}

type ButtonProps = {
    link: string
    label: string
    icon: Icon | null
    iconClass?: string
    iconLetter? : string
}

export function Button ({link, label, icon, iconClass = "", iconLetter = ""}: ButtonProps) {
    return (
        <a className="button" href={link} target="_blank">
            {icon && <img src={icon.src} alt={icon.altText} />}
            {iconClass && <span className="wordle-icon">{iconLetter}</span>}
            {label}
        </a>
    )
}