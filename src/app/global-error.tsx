"use client";

import Error from 'components/error/Error';

export default function GlobalError() {

    return (
        <html>
            <body>
                <Error message='Something went wrong... Try again' />
            </body>
        </html>
    );
};