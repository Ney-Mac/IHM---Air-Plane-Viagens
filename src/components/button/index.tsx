import './styles.css';

type Props = {
    text: string;
    onPress?: () => void;
    link?: string;
}

export default ({ text, onPress, link }: Props) => {
    return (
        <a href={link} onClick={onPress} className="btn">{text}</a>
    )
}