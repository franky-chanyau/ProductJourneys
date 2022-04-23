import * as React from 'react';
import css from 'styled-jsx/css';
import cx, { Argument } from 'classnames';

export interface CanvasPanelProps {
    children?: React.ReactNode;
    className?: Argument;
    background?: string;
}

export default function CanvasPanel({ children = '', className, background }: CanvasPanelProps) {
    return (
        <>
            <section style={{ background }} className={cx('CanvasPanelComponent', className)}><div>{children}</div></section>
            <style jsx>{CanvasPanelStyle}</style>
        </>
    );
}

const CanvasPanelStyle = css`
    .CanvasPanelComponent{
        @apply bg-white overflow-hidden shadow sm:rounded-lg;
        > div{
            @apply px-4 py-5 sm:p-6;
        }
    }
`;