import './styles.css';

export default () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header>
            <div className="flex-container menu">
                <div>
                    <h1>Airplane Viagens</h1>
                </div>
                <ul className="list-items">
                    <li><a onClick={() => { scrollTo('quem-somos') }}>Quem Somos</a></li>
                    <li><a onClick={() => { scrollTo('servicos') }}>Serviços</a></li>
                    <li><a onClick={() => { scrollTo('planos') }}>Planos</a></li>
                </ul>
            </div>
        </header>
    )
}