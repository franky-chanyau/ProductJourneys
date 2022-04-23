import * as React from 'react';
import css from 'styled-jsx/css';
import cx, { Argument } from 'classnames';

export interface CanvasTextProps {
    children?: React.ReactNode;
    className?: Argument;
    body?: string;
    fontSize?: string;
}

export default function CanvasText({ body = '', fontSize, className }: CanvasTextProps) {
    return (
        <>
            <p style={{ fontSize }} className={cx('CanvasTextComponent', className)}>{body}</p>
            <style jsx>{CanvasTextStyle}</style>
        </>
    );
}

const CanvasTextStyle = css`
    .CanvasTextComponent{
    }
`;