import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Provider } from 'react-redux'
import store from '../store/store'
import Dashboard from './Dashboard'
import Calculator from '../components/Calculator';
export default function Home() {
  return (<Provider store={store}><Dashboard /></Provider>)
}
