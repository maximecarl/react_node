import CharacterStatistic from "./CharacterStatistic";

const CharacterStatistics = (props) => {
    console.log(props);

    return <>
        <h4>Statistics</h4>
        <ul className="app_character-statistics">
            {props.statistics.map(
                statistic => <CharacterStatistic {...statistic}/>
            )}
        </ul>
    </>
}

export default CharacterStatistics;