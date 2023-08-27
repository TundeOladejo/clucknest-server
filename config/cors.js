const corsOptions = {
    origin:process.env.WEB_URL,
    credentials:true,
    optionSuccessStatus:200
}

module.exports = corsOptions;
