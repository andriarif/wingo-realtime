module.exports = async (req, res) => {

    try {

        const response = await fetch(
            'https://spin88.sbs/api/webapi/GetNoaverageEmerdList',
            {
                method:'POST',
                headers:{
                    'Accept':'application/json, text/plain, */*',
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body:'typeid=1&pageno=0&pageto=10&language=vi'
            }
        );

        const text = await response.text();

        res.setHeader(
            'Content-Type',
            'text/plain'
        );

        return res.status(200).send(text);

    } catch(error){

        return res.status(500).json({
            error:error.message
        });

    }

};
