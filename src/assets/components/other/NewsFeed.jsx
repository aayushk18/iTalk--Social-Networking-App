import React, { useEffect } from 'react'
import { useState } from 'react';

const NewsFeed = () => {

    const [Data, setData] = useState()
    const [index, setindex] = useState(3)




    const newsData = {
        articles: [
            {

                source: {
                    id: null,
                    name: "Feber.se"
                },
                author: "Frode Wikesjö",
                title: "Matpriserna på väg uppåt igen",
                description: "Experter varnar för fortsatt ökning\n\n\n\n\n\nDen här artikeln har något inbäddat i sig, troligen ett videoklipp.\nSe klippet.\n\n\n\nFolk som har handlat lite mat på senare tid har säkert märkt att matpriserna fortsätter att stiga. Om man ska tro några experter ser fr…",
                url: "https://feber.se/samhalle/matpriserna-pa-vag-uppat-igen/478234/",
                urlToImage: "https://static.feber.se/article_images/61/43/49/614349.jpg",
                publishedAt: "2025-03 - 30T15:00:00Z",
                content: "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n11 idag\r\n11 igår\r\nTipsa!\r\nSkaffa Feber+\r\nMatpriserna på väg uppåt igen\r\nExperter varnar för fortsatt ökning\r\n32.6°\r\n0\r\nAnnons från \r\nAnnons\r\nSkicka SM… [+14274 chars]"
            },
            {
                source: { id: null, name: "Expressen.se" },
                author: "albin.lindstrom@expressen.se (Albin Lindström)",
                title: "Ilskan på motorvägen – ser ut att dra vapen",
                description: "En förare av en Tesla cybertruck blir konfronterad av en aggressiv man på motorvägen i Houston, Texas...",
                url: "https://www.expressen.se/tv/nyheter/varlden/ilskan-pa-motorvagen-ser-ut-att-dra-vapen/",
                urlToImage: "https://static.bonniernews.se/images/8b/b5/8bb567893e704c9a809a9d59bbca725b/16x9/original.jpg",
                publishedAt: "2025-03-30T15:46:32Z",
                content: "Dramatisk räddning vid farliga klippväggen\nVandrare föll 30 meter slår axeln ur led"
            },
            {
                source: { id: null, name: "PBS" },
                author: "Michael Liedtke, Associated Press",
                title: "Protests against Elon Musk’s role in Trump administration swarm Tesla showrooms",
                description: "Protesters against billionaire Elon Musk’s purge of the U.S. government under President Donald Trump demonstrated outside Tesla dealerships...",
                url: "https://www.pbs.org/newshour/politics/protests-against-elon-musks-role-in-trump-administration-swarm-tesla-showrooms",
                urlToImage: "https://d3i6fh83elv35t.cloudfront.net/static/2025/03/2025-03-29T193942Z_247014392_RC26NDASAA39_RTRMADP_3_USA-MUSK-PROTEST-1024x683.jpg",
                publishedAt: "2025-03-30T15:44:28Z",
                content: "SAN FRANCISCO (AP) Protesters against billionaire Elon Musk’s purge of the U.S. government under President Donald Trump..."
            },
            {
                source: { id: null, name: "Crooksandliars.com" },
                author: "Red Painter",
                title: "HUGE Tesla Takedown Rally In Maryland, Right Outside DC!",
                description: "The \"Tesla Takedown\" protests are growing by the day, as seen in this video that I TOOK on Saturday morning in Rockville, Maryland...",
                url: "https://crooksandliars.com/2025/03/huge-tesla-takedown-rally-maryland-right",
                urlToImage: "https://crooksandliars.com/files/mediaposters/2025/03/56763.jpg",
                publishedAt: "2025-03-30T15:38:21Z",
                content: "The \"Tesla Takedown\" protests are growing by the day, as seen in this video..."
            },
            {
                source: { id: null, name: "Abertoatedemadrugada.com" },
                author: "Carlos Martins",
                title: "Teslas com HW4 detectam teste \"Looney Tunes\" da parede pintada",
                description: "O teste de Mark Rober deu origem a muitos mais testes para determinar se os Teslas detectam uma parede pintada de estrada.",
                url: "https://abertoatedemadrugada.com/2025/03/teslas-com-hw4-detectam-teste-looney.html",
                urlToImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjexkbs-tXaLN3mF7d5OGlz1jR-HJSHKn5fKvYtEPQ0NreZfy52ZfTAWVHspM8to1ClwVyXBgezklWustjMm5ALWd58RM21ouOzs3iT3tYhs8fpS8eMmz9tGsjWGg12d5oS3iW6c1WYLILhyphenhyphenJ2axiPR0A8Mz7KodeZ3FyrJGo4CtnnQTBVsQZc59MQr_YP8/w1200-h630-p-k-no-nu/teslacrash.jpg",
                publishedAt: "2025-03-30T15:30:00Z",
                content: "O teste de Mark Rober deu origem a muitos mais testes para determinar se os Teslas detectam uma parede pintada de estrada."
            },
            {
                source: { id: null, name: "Byznys.hn.cz" },
                author: "Patrik Salát",
                title: "Analytik jedné z největších investičních společností na světě předpovídá záporné výnosy pro S&P 500",
                description: "V posledních letech se zdálo být investování relativně snadné...",
                url: "https://byznys.hn.cz/c1-67681550-analytik-jedne-z-nejvetsich-investicnich-spolecnosti-na-svete-predpovida-zaporne-vynosy-pro-s-p-500-jake-akcie-radi-kupovat",
                urlToImage: "https://img.ihned.cz/attachment.php/680/80340680/Fp7gnbyRCIsLfHKrW5Bo3Ux1S86VOPNA/Jackson_Paul_Invesco.jpg",
                publishedAt: "2025-03-30T15:30:00Z",
                content: "V posledních letech se zdálo být investování relativně snadné..."
            },
            {
                source: { id: null, name: "Biztoc.com" },
                author: "pbs.org",
                title: "Protests against Elon Musk’s role in Trump administration swarm Tesla showrooms",
                description: "Protesters against billionaire Elon Musk’s purge of the U.S. government under President Donald Trump demonstrated outside Tesla dealerships throughout the U.S. and in some cities in Europe...",
                url: "https://biztoc.com/x/f252295ed181bbf0",
                urlToImage: "https://biztoc.com/cdn/f252295ed181bbf0_s.webp",
                publishedAt: "2025-03-30T15:50:44Z",
                content: "Protesters against billionaire Elon Musks purge of the U.S. government under President Donald Trump demonstrated outside Tesla dealerships..."
            },
            {
                source: { id: null, name: "Expressen.se" },
                author: "albin.lindstrom@expressen.se (Albin Lindström)",
                title: "Ilskan på motorvägen – ser ut att dra vapen",
                description: "En förare av en Tesla cybertruck blir konfronterad av en aggressiv man på motorvägen i Houston, Texas...",
                url: "https://www.expressen.se/tv/nyheter/varlden/ilskan-pa-motorvagen-ser-ut-att-dra-vapen/",
                urlToImage: "https://static.bonniernews.se/images/8b/b5/8bb567893e704c9a809a9d59bbca725b/16x9/original.jpg",
                publishedAt: "2025-03-30T15:46:32Z",
                content: "Dramatisk räddning vid farliga klippväggen Vandrare föll 30 meter slår axeln ur led"
            },
            {
                source: { id: null, name: "PBS" },
                author: "Michael Liedtke, Associated Press",
                title: "Protests against Elon Musk’s role in Trump administration swarm Tesla showrooms",
                description: "Protesters against billionaire Elon Musk’s purge of the U.S. government under President Donald Trump demonstrated outside Tesla dealerships throughout the U.S. and in some cities in Europe...",
                url: "https://www.pbs.org/newshour/politics/protests-against-elon-musks-role-in-trump-administration-swarm-tesla-showrooms",
                urlToImage: "https://d3i6fh83elv35t.cloudfront.net/static/2025/03/2025-03-29T193942Z_247014392_RC26NDASAA39_RTRMADP_3_USA-MUSK-PROTEST-1024x683.jpg",
                publishedAt: "2025-03-30T15:44:28Z",
                content: "SAN FRANCISCO (AP) Protesters against billionaire Elon Musks purge of the U.S. government under President Donald Trump demonstrated outside Tesla dealerships..."
            },
            {
                source: { id: "fortune", name: "Fortune" },
                author: "Prarthana Prakash",
                title: "Elon Musk challenges Tesla shareholders to decide if he should have more control over the company",
                description: "Tesla CEO Elon Musk wants shareholders to decide whether he should have more control over the company...",
                url: "https://fortune.com/2025/03/30/elon-musk-challenges-tesla-shareholders-control/",
                urlToImage: "https://content.fortune.com/wp-content/uploads/2025/03/GettyImages-1444188855.jpg",
                publishedAt: "2025-03-30T15:32:45Z",
                content: "Elon Musk is putting the fate of his control over Tesla in the hands of shareholders."
            },
            {
                source: { id: null, name: "Yahoo Entertainment" },
                author: "Reuters",
                title: "Tesla slashes price of Full Self-Driving software to $8,000 in US",
                description: "Tesla has reduced the price of its Full Self-Driving (FSD) software by $4,000 in the U.S...",
                url: "https://www.yahoo.com/entertainment/tesla-slashes-price-of-full-self-driving-software/",
                urlToImage: "https://s.yimg.com/ny/api/res/1.2/s9aBq3pZuDxt7VmJ7aBIMg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM5OQ--/https://media.zenfs.com/en/reuters-finance.com/ccacaabc1bb5b4c6e14f02a40b91436e",
                publishedAt: "2025-03-30T15:30:00Z",
                content: "Tesla has reduced the price of its Full Self-Driving (FSD) software by $4,000 in the U.S..."
            },
            {
                source: { id: null, name: "Yahoo Entertainment" },
                author: "Gregory Wallace, CNN",
                title: "United Airlines flight to Newark makes emergency landing after engine problem",
                description: "A United Airlines flight heading to Newark made an emergency landing due to an engine issue...",
                url: "https://www.yahoo.com/entertainment/united-airlines-flight-newark-emergency-landing/",
                urlToImage: "https://s.yimg.com/ny/api/res/1.2/6Oxl4FbTY2Wwb0kfd0IAGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/cnn_articles_875/6dc5b9aa0f2edb87db370f2e438e1a5f",
                publishedAt: "2025-03-30T15:24:08Z",
                content: "A United Airlines flight heading to Newark made an emergency landing due to an engine issue."
            }
        ]
    }




    useEffect(() => {

        setData(newsData)

    }, [])

    console.log(Data);






    const feedHandler = () => {


        // useEffect(() => {


        //     try {
        //         fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-02-28&sortBy=publishedAt&apiKey=803e556a08f14e82af772de5fd781c06')
        //             .then(response => {
        //                 if (!response.ok) {
        //                     throw new Error('Network response was not ok');
        //                 }
        //                 return response.json(); // Convert response to JSON
        //             })
        //             .then(data => {
        //                 console.log(data);
        //                 setData(data) // Process the API response data
        //             })
        //             .catch(error => {
        //                 console.error('There was a problem with the fetch operation:', error);
        //             });
        //         console.log(Data);
        //     } catch (error) {
        //         console.log('Error to load new API', error);

        //     }
        // }, [])




    }


    return (


        <div className="w-full px-3 sm:px-6 lg:px-10">


            {/* Feed Items */}
            {newsData.articles.slice(0, index).map((el, i) => (
                <div key={i} className="bg-white rounded-lg p-4 sm:p-6 mt-5 shadow-md max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="flex justify-between items-start flex-wrap">
                        <div className="flex items-start gap-3">
                            <div className="text-4xl text-gray-400">
                                <i className="uil uil-user-circle"></i>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{el.title}</h3>
                                <p className="text-sm text-gray-500 font-medium">{el.source.name}</p>
                            </div>
                        </div>
                        <div className="text-2xl text-gray-500 mt-2 sm:mt-0">
                            <i className="uil uil-ellipsis-v"></i>
                        </div>
                    </div>

                    {/* Image */}
                    {el.urlToImage && (
                        <img
                            src={el.urlToImage}
                            alt="news"
                            className="w-full mt-4 rounded-md aspect-video object-cover"
                        />
                    )}

                    {/* Description */}
                    <div className="mt-4 text-gray-700 text-sm sm:text-base">
                        {el.description}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-around text-gray-500 text-sm sm:text-base mt-4 font-medium">
                        <button className="flex items-center gap-1 hover:text-blue-500">
                            <i className="uil uil-thumbs-up"></i> Like
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-500">
                            <i className="uil uil-comment-alt"></i> Comment
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-500">
                            <i className="uil uil-share"></i> Share
                        </button>
                    </div>
                </div>
            ))}

            {/* Load More Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setindex(index + 3)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Load More
                </button>
            </div>
        </div>

    )
}

export default NewsFeed
