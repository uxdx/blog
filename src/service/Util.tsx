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
        media.addEventListener('change',listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
}
const StyledCircle = styled.span`
    @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    }
    @keyframes rotating {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    animation: rotating 0.5s linear infinite;
    // other Styles
    font-size: 48px;
    `
function LoadingCircle() {
    
    return (
        <StyledCircle className="material-symbols-outlined loading">
            refresh
        </StyledCircle>
    );
}

export { ScreenAdaptable, WithMediaQuery, LoadingCircle };