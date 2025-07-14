import { Layout } from "@components/common";

interface IPageProps  {
        host: string,
        seo: {
            title: string,
            description: string
        },
        data?: any
    }


interface IComponentPageProps {
    host: string,
    data?: any
}

export const layoutHoc = (ComponentPage: React.FC<IComponentPageProps>): React.FC<IPageProps> => {
    return function LayoutHoc(props: IPageProps) {
        const { host, seo, data } = props;

        return (
            <Layout seo={seo}>
                <ComponentPage data={data} host={host} />
            </Layout>
        )
    }
}

