export default async function handler(req, res) {

    try {

        const response = await fetch(
            'https://spin88.sbs/api/webapi/GetNoaverageEmerdList',
            {
                method: 'POST',

                headers: {

                    'Content-Type':
                    'application/x-www-form-urlencoded; charset=UTF-8',

                    'Accept':
                    'application/json, text/javascript, */*; q=0.01',

                    'X-Requested-With':
                    'XMLHttpRequest',

                    'User-Agent':
                    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Mobile Safari/537.36',

                    'Referer':
                    'https://spin88.sbs/wingo/?game_type=1'

                },

                body:
                'typeid=1&pageno=0&pageto=10&language=vi'
            }
        );

        const text = await response.text();

        res.setHeader(
            'Content-Type',
            'application/json'
        );

        res.status(200).send(text);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

}
