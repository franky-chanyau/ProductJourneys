import * as React from 'react';
import css from 'styled-jsx/css';
import cx, { Argument } from 'classnames';

export interface UIButtonProps {
    children?: React.ReactNode;
    className?: Argument;
}

export default function UIButton({ children = '', className }: UIButtonProps) {
    return (
        <>
            <button type="button" className={cx('UIButtonComponent', className)}>{children}</button>
            <style jsx>{UIButtonStyle}</style>
        </>
    );
}

const UIButtonStyle = css`
    .UIButtonComponent{
        @apply inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
    }
`;