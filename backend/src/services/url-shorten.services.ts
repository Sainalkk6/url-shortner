import {Url,UrlAttributes} from "../sequelize/models/Url"

const createShortUrl = async (originalUrl: string): Promise<string> => {
    const isExisting = await Url.findOne({where:{url:originalUrl}})
    if (!!isExisting) {
       return isExisting.shortedUrl
    } else {
        const shortedUrl = (Math.random() + 1).toString(36).substring(2);
        await Url.create({ url: originalUrl,  shortedUrl });
        return shortedUrl;
    }

};

const getOriginalUrl = async (shortedUrl: string): Promise<string | null> => {
    const results = await Url.findOne({where:{shortedUrl}});
    return results ? results.url : null;
};

const getAllUrls = async (): Promise<UrlAttributes[]> => {
    const results = await Url.findAll();
    return results;
};

export default { createShortUrl, getOriginalUrl, getAllUrls };
