import {Header, Footer} from "@common";
import GlobalStyle, { Layout as StyledLayout, Main } from "./styled";
import Head from 'next/head';


interface ILayoutProps {
    seo: {
        title: string;
        description: string;
    },
    children: React.ReactNode;
}


function Layout ({ children, seo  }: ILayoutProps) {
    const { title, description } = seo;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                name="description"
                content={description}
                />
            </Head>
            <GlobalStyle />
            <StyledLayout>
                <Header />
                <Main>
                    {children}
                </Main>
                <Footer />
            </StyledLayout>
        </> 
    );
  };
  
  export default Layout;
