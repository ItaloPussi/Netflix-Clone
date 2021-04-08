import {Background, Frame, Logo, ButtonLink} from './styles'
import {Link as ReactRouterLink} from "react-router-dom"

const Header = ({bg = true, children, ...restProps}) => {
    return bg ? (
        <Background {...restProps}>{children}</Background>
    ) : children
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({to, children, ...restProps}) {
    return (
        <ButtonLink to={to} {...restProps}>
            {children}
        </ButtonLink>
    )
}

export default Header