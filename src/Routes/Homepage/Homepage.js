import React from 'react';

export default
[
    {
        path: "/",
        exact: true,
        main: React.lazy(() => import("../../Components/Homepage/Welcome")),
    },
]
