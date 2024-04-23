import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button';
import './styles.css';

import MainImage from '../../assets/images/0-main.png';
import QuemSomosImage from '../../assets/images/1-quem-somos.png';

import Icon1 from '../../assets/icons/icon-1.png';
import Icon2 from '../../assets/icons/icon-2.png';
import Icon3 from '../../assets/icons/icon-3.png';

export default () => {
    return (
        <>
            <Header />

            <div className="flex-container apresentacao">
                <div className="texto-apresentacao">
                    <h1>Flex <br />Turismos</h1>
                    <p>O melhor serviço para você!</p>
                    <Button text='Saiba Mais!' link='#' />
                </div>

                <div>
                    <div>
                        <img src={MainImage} alt="banner de apresentação" />
                    </div>
                </div>
            </div>

            <div className="flex-container" id="quem-somos">
                <div>
                    <h2>Quem somos</h2>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout.
                    </p>
                    <p>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look like readable English.
                    </p>
                </div>

                <div>
                    <img src={QuemSomosImage} alt="balcão de atendimento" />
                </div>
            </div>

            <div className="container-externo">
                <div className="flex-container" id="servicos">
                    <div>
                        <h2>Serviços</h2>
                    </div>

                    <div className="list-servicos">
                        <div className="item-servico">
                            <div><img src={Icon2} alt="hospedagens" /></div>
                            <p>Hospedagens</p>
                            <a href="#">Comprar Agora</a>
                        </div>

                        <div className="item-servico">
                            <div><img src={Icon1} alt="pacote de viagens" /></div>
                            <p>Pacotes de viagens</p>
                            <a href="#">Comprar Agora</a>
                        </div>

                        <div className="item-servico">
                            <div><img src={Icon3} alt="roteiros personalizados" /></div>
                            <p>Roteiros personalizados</p>
                            <a href="#">Comprar Agora</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-container" id="planos">
                <div>
                    <h2>Planos</h2>
                </div>

                <div className="list-planos">
                    <div className="item-plano">
                        <h3>Plano 1</h3>
                        <ul>
                            <li>Suporte 24h</li>
                            <li>Serviços de quarto</li>
                            <li>Guia turístico</li>
                        </ul>
                        <Button text='Saiba Mais!' link='#' />
                    </div>

                    <div className="item-plano">
                        <h3>Plano 2</h3>
                        <br />
                        <ul>
                            <li>Suporte 24h</li>
                            <li>Serviços de quarto</li>
                            <li>Guia turístico</li>
                            <li>Roteiro de trilhas</li>
                        </ul>
                        <Button text='Saiba Mais!' link='#' />
                    </div>

                    <div className="item-plano">
                        <h3>Plano 3</h3>
                        <br />
                        <ul>
                            <li>Suporte 24h</li>
                            <li>Serviços de quarto</li>
                            <li>Guia turístico</li>
                            <li>Roteiro de trilhas</li>
                            <li>Serviço personalizado</li>
                            <li>Área Vip</li>
                        </ul>
                        <Button text='Saiba Mais!' link='#' />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}