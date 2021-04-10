export default function selectionFilter({series, films}) {
    
    const seriesTypes = series.map(item => (item.genre))
    const seriesUniqTypes = new Set(seriesTypes)

    const filmsTypes = films.map(item => (item.genre))
    const filmsUniqTypes = new Set(filmsTypes)

    return {
        series: Array.from(seriesUniqTypes).map(type =>({
                    title: type.replace("-", " "),
                    data: series.filter(item=> item.genre === type)
                })),
        films: Array.from(filmsUniqTypes).map(type =>({
                    title: type.replace("-", " "),
                    data: films.filter(item=> item.genre === type)
                }))
    }
}