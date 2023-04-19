export function load({ fetch, params }) {
    /**
     * @param {any} id
     */
    async function fetchInfo(id) {
        const res = await fetch(`../../../../src/data/characterData/${id}.json`)
        const data = await res.json()
        return data
    }

    return {
        character: fetchInfo(params.charId)
    }
}