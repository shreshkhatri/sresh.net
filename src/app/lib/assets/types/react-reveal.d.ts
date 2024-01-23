// react-reveal.d.ts
// type module declaration for react-reveal library
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


declare module 'react-reveal/Slide' {
    import { ReactElement } from 'react';

    type SlideProps = {
        [key: string]: any;
    }

    export default function Slide(props: SlideProps, children: any): ReactElement;
}
