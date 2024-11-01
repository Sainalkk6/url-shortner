import db from "../db/url"

const createShortUrl = async (originalUrl: string) => {
    const shortUrl = (Math.random() + 1).toString(36).substring(2);
    await db.createURL({ original_url: originalUrl, shorted_url: shortUrl });
    return shortUrl;
};

const getOriginalUrl = async (shortedUrl: string) => {
    const results = await db.getSpecificURL(shortedUrl);
    return results.length > 0 ? results[0].original_url : null;
};

const getAllUrls = async (): Promise<any[]> => {
    const results = await db.getURLS();
    return results;
};

const checkExistence = async (originalUrl: string) => {
    const results = await db.checkExistence(originalUrl);
    return results
}

export default { createShortUrl, getOriginalUrl, getAllUrls, checkExistence };
