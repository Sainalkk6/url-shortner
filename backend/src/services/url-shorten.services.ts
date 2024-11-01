import db from "../db/url"

const createShortUrl = async (originalUrl: string): Promise<string> => {
    const shortUrl = (Math.random() + 1).toString(36).substring(2);
    await db.createURL({ original_url: originalUrl, shorted_url: shortUrl });
    return shortUrl;  
};

const getOriginalUrl = async (shortedUrl: string): Promise<string | null> => {
    const results = await db.getSpecificURL(shortedUrl);
    return results.length > 0 ? results[0].original_url : null;
};

const getAllUrls = async (): Promise<any[]> => {
    const results = await db.getURLS();
    return results;
};

export default { createShortUrl, getOriginalUrl, getAllUrls };
