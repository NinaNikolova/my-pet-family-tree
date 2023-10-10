import classes from './footer.module.css';
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <footer className={classes.footer} >
            <p style={{ fontSize: "0.4rem" }}>Проектът е решение на поставена задача "Родословно дърво на моя домашен любимец" за Speed IT Up University Edition към <Link to="https://www.nemetschek.bg/">Nemetschek Bulgaria</Link> </p>
        </footer>
    );
};