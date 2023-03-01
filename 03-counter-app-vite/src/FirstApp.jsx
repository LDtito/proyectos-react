import PropTypes from "prop-types"

export const FirstApp = ({
    title,
    subTitle,
    name
}) => {

    return(
        <>
            <h1>{title}</h1>
            {/* {<code>{ JSON.stringify (newmsg) }</code>} */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    //title: 'No hay ningun titulo',
    subTitle: 'No hay subtitulo',
    name: 'Henry Tito'
}