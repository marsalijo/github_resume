
const langPercent = (reposData) => {
    let languages = [];
    //extract languages from repos in an array datatype
    reposData.map((data) => {
        if(data.language !== null)
        languages.push(data.language)
    })

    //calculate the occuurence of each language in the array
    const langOccur = languages.reduce((acc, e) => {
        let res = acc.set(e, (acc.get(e) || 0) + 1);
        return res;
    }, new Map());

    //convert Map to Array
    let langOccurArr = [...langOccur.entries()];

    //calculate the percentage and return
    let langPercentage = [];
    langOccurArr.map((lang) => {
        langPercentage.push([lang[0], parseInt((lang[1]/languages.length)*100)])
    })

    return langPercentage;
}

export default langPercent;