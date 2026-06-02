export default async function handler(req, res) {

    const response = await fetch(
        'https://spin88.sbs/api/webapi/GetNoaverageEmerdList',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                typeid: '1',
                pageno: '0',
                pageto: '10',
                language: 'vi'
            })
        }
    );

    const text = await response.text();

    res.status(200).send(text);

}
