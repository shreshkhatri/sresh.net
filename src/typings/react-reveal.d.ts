// react-reveal.d.ts

declare module 'react-reveal/Zoom' {
    import { ReactElement } from 'react';

    type ZoomProps = {
        [key: string]: any;
    }

    export default function Zoom(props: ZoomProps, children: any): ReactElement;
}


declare module 'react-reveal/Fade' {
    import { ReactElement } from 'react';

    interface FadeProps {
        [key: string]: any;
    }

    export default function Zoom(props: FadeProps, children: any): ReactElement;
}
