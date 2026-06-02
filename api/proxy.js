export default async function handler(req, res) {

    const response = await fetch(
        'https://spin88.sbs/api/webapi/GetNoaverageEmerdList',
        {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0'
            },
            body: 'typeid=1&pageno=0&pageto=10&language=vi'
        }
    );

    const text = await response.text();

    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(text);
}
