import type { NextPage } from 'next';
import Head from 'next/head';
import css from 'styled-jsx/css';
import UIButton from '../components/ui/Button';
import { Editor } from '@craftjs/core';
import cx, { Argument } from 'classnames';


const Home: NextPage = () => {
    return (
        <>
            <section className={cx('main')}>
                <UIButton >A Button</UIButton>
            </section>
            <style jsx>{styles}</style>
        </>
    );
};

const styles = css`
    section.main{
        width: 100%;
        min-height: 100vh;
    }
`;

export default Home;
