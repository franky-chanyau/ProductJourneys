import * as React from 'react';
import css from 'styled-jsx/css';
import cx, { Argument } from 'classnames';

export interface CanvasSimpleCardProps {
    children?: React.ReactNode;
    className?: Argument;
    background?: string;
}

export default function CanvasSimpleCard({ children = '', className, background }: CanvasSimpleCardProps) {
    return (
        <>
            <div className={cx('CanvasSimpleCardComponent', className)}>{children}</div>
            <style jsx>{CanvasSimpleCardStyle}</style>
        </>
    );
}

const CanvasSimpleCardStyle = css`
    .CanvasSimpleCardComponent{
    }
`;