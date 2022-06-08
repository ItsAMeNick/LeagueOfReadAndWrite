const dataDragon_BaseURL = 'https://ddragon.leagueoflegends.com'

const ddAPI = '/api'
const ddCDN = '/cdn'
const ddData = "/data"
const ddImg = "/img"

const jsonFileTyle = '.json'
const pngFileTyle = '.png'

const ddVersions = ddAPI + '/versions' + jsonFileTyle
const ddLanguage = ddCDN + '/languages' + jsonFileTyle

const ddChampion = '/champion'

const ddEnglishLanguageCode = "/en_US"

class DataDragon {
    static async getVersions() {
        return await fetch(dataDragon_BaseURL + ddVersions).then(response => {
            return response.json()
        });
    }

    static async getCurrentVersion() {
        return await DataDragon.getVersions().then(data => {
            return data[0]
        })
    }

    static async getLanguages() {
        return await fetch(dataDragon_BaseURL + ddLanguage).then(response => {
            return response.json()
        });
    }

    static async getAllChampionsFor(version, language) {
        let allChampionsUrl = dataDragon_BaseURL + ddCDN + "/"
            + version + ddData
            + ddEnglishLanguageCode + ddChampion + ".json"
        return await fetch(allChampionsUrl).then(response => {
            return response.json()
        });
    }

    static async getAllChampions() {
        const currentVersion = await DataDragon.getCurrentVersion();
        return await DataDragon.getAllChampionsFor(currentVersion, ddEnglishLanguageCode)
    }

    static async getAllChampionsNames() {
        const currentVersion = await DataDragon.getCurrentVersion();
        return await DataDragon.getAllChampionsFor(currentVersion, ddEnglishLanguageCode).then(response => {
            return Object.keys(response["data"])
        })
    }

    static async getSingleChampionFor(version, language, champion) {
        let championRequestURL = dataDragon_BaseURL + ddCDN + "/"
            + version + ddData
            + language + ddChampion + "/" + champion + jsonFileTyle
        return await fetch(championRequestURL).then(response => {
            return response.json()
        });
    }

    static async getSingleChampion(champion) {
        const currentVersion = await DataDragon.getCurrentVersion();
        return await DataDragon.getSingleChampionFor(currentVersion, ddEnglishLanguageCode, champion);
    }

    static async getSingleChampionP(champion) {
        return await DataDragon.getSingleChampion(champion).then(championData => {
            return championData["data"][champion]["passive"]
        })
    }

    static async getSingleChampionQ(champion) {
        return await DataDragon.getSingleChampion(champion).then(championData => {
            return championData["data"][champion]["spells"][0]
        })
    }

    static async getSingleChampionW(champion) {
        return await DataDragon.getSingleChampion(champion).then(championData => {
            return championData["data"][champion]["spells"][1]
        })
    }

    static async getSingleChampionE(champion) {
        return await DataDragon.getSingleChampion(champion).then(championData => {
            return championData["data"][champion]["spells"][2]
        })
    }

    static async getSingleChampionR(champion) {
        return await DataDragon.getSingleChampion(champion).then(championData => {
            return championData["data"][champion]["spells"][3]
        })
    }

    static async getChampionPortraitURLFor(version, champion) {
        return dataDragon_BaseURL + ddCDN + "/"
            + version + ddImg
            + ddChampion + "/" + champion + pngFileTyle
    }

    static async getChampionPortraitURL(champion) {
        const currentVersion = await DataDragon.getCurrentVersion();
        return dataDragon_BaseURL + ddCDN + "/"
            + currentVersion + ddImg
            + ddChampion + "/" + champion + pngFileTyle
    }
}

export default DataDragon
