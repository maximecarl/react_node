const CharacterStatistic = (props) => {
    console.log(props);

    return <li className="app_character-statistic" style={{'backgroundColor': props.color}}>
        {props.value} {props.symbol}
    </li>
}

export default CharacterStatistic;