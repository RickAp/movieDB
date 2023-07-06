import Header from '../components/Header/Header';
import { AppProps } from 'next/app';
import { NextComponentType } from 'next';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'

interface MyAppProps extends AppProps {
    Component: NextComponentType;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;