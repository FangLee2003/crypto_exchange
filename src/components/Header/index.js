import React from 'react';
import MetaTags from 'react-meta-tags';

const Header = (props) => {
    return (
        <div>
            <MetaTags>
                <meta charSet="UTF-8"/>
                <title>Kripto {props.name}</title>
                <link rel="icon" href="images/logo-color.png"/>
                <meta property="og:image" content={"images/preview-" + props.name + ".png"}/>
                <meta property="og:title" content={"Kripto " + props.name}/>
                <meta property="og:description" content="Trading Future"/>
                <meta property="og:url" content={"https://fanglee2003.github.io/" + props.name}/>
            </MetaTags>
        </div>
    )
}
export default Header;