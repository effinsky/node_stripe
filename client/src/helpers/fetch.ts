const API = "http://localhost:3333"

export const fetch_from_API_post = async (
    endpointURL: string,
    opts: Record<string, unknown>
) => {
    const { method, body } = { method: "POST", body: null, ...opts }
    const res = await fetch(`${API}/${endpointURL}`, {
        method,
        ...((body && { body: JSON.stringify(body) }) || {}),
        headers: {
            "Content-Type": "application/json",
        },
    })

    return res.json()
}
