import Head from 'next/head';
import process from 'process';
import '../styles/global.css';

export default function App() {
    return (
        <div>
            <Head>
                <title>Meu amor</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <div className='container'>
                <h1>Amor de toda a minha vida e além!</h1>
                <img className='image' src={process.env.IMAGE_URL} />
                <div>
                    <p>Você é a minha maior motivação para continuar buscando sempre melhorar.</p>
                    <p>E esse é só o começo!</p>
                </div>
                <div className='heart'>❤️</div>
            </div>
        </div>
        
    );
}