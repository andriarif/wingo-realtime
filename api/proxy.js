export default async function handler(req, res) {

    try {

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

        const data = await response.json();

        res.status(200).json(data);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

}
