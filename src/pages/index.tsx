import { promises as fs } from 'fs';
import { layoutHoc } from "../hocs/layoutHoc";
import { Home } from "@components/Home/";

export default layoutHoc(Home);

interface IReturnProps {
    props: {
        host: string,
        seo: {
            title: string,
            description: string
        }
        data?: any
    }
}


export type TGetStaticProps = () => IReturnProps;

export async function getStaticProps(): Promise<IReturnProps> {

    const list =  await fs.readFile(process.cwd() + '/serverData/api/partners.json', 'utf8');

    return {
        props: {
            host: process.env.IMG_HOST as string,
            seo: {
                title: "Praporonosets",
                description: "Online store in progress",
            },
            data: JSON.parse(list),
        }
    }
}
