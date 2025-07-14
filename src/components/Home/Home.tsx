import Image from "next/image";
import { Home as StyledHome, ClientItem } from "./styled";

interface IPartner {
    id: number;
    img: string;
    altImg: string;
    title: string;
    department: string;
    typePartner: 'entertainment company' | 'organization' | 'government department';
}

interface IProps {
    host: string;
    data?: {
        list: IPartner[];
    } 
}

function Home ({ host, data }: IProps) {
    const list = (data && data.list) as IPartner[] || [];
    const departments = (list).filter(({ typePartner }) => typePartner === 'government department');
    const companies = (list).filter(({ typePartner }) => typePartner === 'entertainment company');
    const organizations = (list).filter(({ typePartner }) => typePartner === 'organization');

    const renderPartner = (partner: IPartner) => (
        <ClientItem key={partner.id} className="clients__item">
            <Image
                src={`${host}${partner.img}`}
                alt={partner.altImg}
                width={"100"} height={"100"}
            />
            <div className="clients__description">
                <h3 className="clients__title">{partner.title}</h3>
                <p>{partner.department}</p>
            </div>
        </ClientItem>
    );

    return (
        <StyledHome>
            <section className="hero overlay">
                <div className="hero__content">
                <h1 className="hero__title">
                    Ексклюзивні товари для неповторного стилю
                </h1>
                </div>
            </section>
            {/* <!-- trade directions --> */}
            <section className="section section-special-first">
                <div className="container">

                <h2 className="section__main-title">Товарні сегменти</h2>

                <ul className="list services__list">
                    <li className="services__item">
                    <Image
                        src={`${host}images/nato.jpg`}
                        alt="прапори кабінетні"
                        width={"100"}
                        height={"100"}
                    />
                    <p className="services__description">Прапори, флагштоки, символіка</p>
                    </li>
                    <li className="services__item">
                    <Image
                        src={`${host}images/mobile_fences.jpg`}
                        alt="мобільні огорожі"
                        width={"100"}
                        height={"100"}
                    />
                    <p className="services__description">Обладнання для урочистих церемоній</p>
                    </li>
                    <li className="services__item">
                    <Image
                        src={`${host}images/donbas.jpg`}
                        alt="виставкові стенди"
                        width={"100"} height={"100"}
                    />
                    <p className="services__description">Інформаційні та рекламні стенди</p>
                    </li>
                </ul>
            </div>
            <div className="container section-special-first">
                <h2 className="section__main-title">Наші принципи</h2>
                <ul className="feature__list list">
                    <li className="feature__item">
                        <h3 className="feature__title">Ексклюзивність 🙌</h3>
                        <p className="feature__text">
                            Досвід і талант наших дизайнерів та інженерів дозволяє знаходити найкращі рішення для
                            реалізації будь-яких проектів. Наша продукція, завжди має акцент на неповторному стилі.
                        </p>
                    </li>
                    <li className="feature__item">
                        <h3 className="feature__title">Надійність ✔✔</h3>
                        <p className="feature__text">
                            Наша робота перевірена часом та тисячами замовлень. Ми працюємо з 2008 року, маємо
                            численних клієнтів, до кожного знаходимо індивідуальний підхід та націлені на
                            якісний результат.
                        </p>
                    </li>
                    <li className="feature__item">
                    <h3 className="feature__title">Пунктуальність ⌛</h3>
                    <p className="feature__text">
                        Наша компанія високоорганізована, та за потреби готова додати 32 травня у рік на запит
                        Мюнхгаузена, або робочі години в добу щоб зробити замовлення вчасно.
                    </p>
                    </li>
                    <li className="feature__item">
                    <h3 className="feature__title">Патріотичність 💙💛</h3>
                    <p className="feature__text">
                        Ми любимо Батьківщину! Тому робимо все, що в наших силах щоб працювати на економіку України та
                        надавати
                        найкращу продукцію для
                        розвитку й процвітання вітчизняних компаній.
                    </p>
                    </li>
                    <li className="feature__item">
                        <h3 className="feature__title">Естетичність</h3>
                        <p className="feature__text">
                            В людях ми цінуємо найбільше моральність, а в продукції та оформленні
                            проектів – естетичність. Ми віримо, що добро та краса врятує світ.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        {/* <!-- clients --> */}
        <section className="section clients">
            <div className="container">
            <h2 className="section__main-title">Нам довіряють</h2>
            <b>Служби та установи</b>
            <div className="clients__list clients-slider">
               {departments.map(renderPartner)}
            </div>
            <b>Підприємства</b>
            <div className="clients__list clients-slider">
                {companies.map(renderPartner)}
            </div>
            <b>Організації</b>
            <div className="clients__list clients-slider">
                {organizations.map(renderPartner)}
            </div>
            </div>
        </section>
    </StyledHome>
    );
}

export default Home;
