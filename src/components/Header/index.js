import {Background, Dropdown, Frame, PlayButton, Profile, Picture, Logo, ButtonLink, Link, Feature, FeatureCallOut, Text, Group, Search, SearchIcon, SearchInput} from './styles'
import {Link as ReactRouterLink} from "react-router-dom"
import { useEffect, useState } from 'react'

const Header = ({bg = true, children, ...restProps}) => {
    return bg ? (
        <Background {...restProps}>{children}</Background>
    ) : children
}

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Text = function HeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false)
    let input = null;

    useEffect(()=>{
        if(searchActive){
            input.focus()
        }
    }, [searchActive, input])

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(prev => !prev)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput 
                ref={(searchInput) => {input = searchInput}}
                value={searchTerm} 
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />

        </Search>
    )
}

Header.Picture = function HeaderPicture({src, ...restProps}) {
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
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