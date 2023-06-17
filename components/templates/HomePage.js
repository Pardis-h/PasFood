import Hero from '../modules/Hero';
import Attributes from '../modules/Attributes';
import Companies from '../modules/Companies';
import Instruction from '../modules/Instruction';
import Definition from "../modules/Definition";
import Giude from '../modules/Giude';
import Restrictions from '../modules/Restrictions';

import styles from './HomePage.module.css';

function HomePage() {
  return (
    <>
        <Hero/>
        <Attributes/>
        <Definition/>
        <Companies/>
        <Instruction/>
        <Giude/>
        <Restrictions/>
    </>
  )
}

export default HomePage