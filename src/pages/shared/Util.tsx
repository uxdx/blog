import { ReactNode, useEffect, useState } from "react";
import styled from 'styled-components'

// 스크린 사이즈별 위젯 지정해서 내보내기
function ScreenAdaptable(props:{giant:ReactNode, desktop:ReactNode, mobile:ReactNode}) {
    let isGiant = useMediaQuery('(max-width: 1600px)');
    let isDesktop = useMediaQuery('(max-width: 1024px)');
    let isMobile = useMediaQuery('(max-width: 767px)');
    return (
        <>
            {
                isMobile ? props.mobile :
                    isDesktop ? props.desktop :
                        props.giant
            }
        </>
    );
}
// 특정 미디어 쿼리를 만족하면 내보내기
function WithMediaQuery(props: { child: ReactNode, query: string }) {
    let isMatch = useMediaQuery(props.query);
    return (
        <>
            {
                isMatch ? props.child : <></>
            }
        </>
    );
}

function useMediaQuery(query:string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}
const StyledCircle = styled.span`
    @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    }
    @keyframes rotating {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
    // other Styles
    font-size: 48px;
    `
function LoadingCircle() {
    
    return (
        <StyledCircle className="material-symbols-outlined">
            refresh
        </StyledCircle>
    );
}

export { ScreenAdaptable, WithMediaQuery, LoadingCircle };