/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","c3d1dc23a55601c806ce327bad061d71"],["/Gallery/suipai2021/index.html","a3d3f9ee77f2f973b27b21695dcd93f2"],["/about/index.html","a9874867af7893917217239048c6fa53"],["/archives/2016/01/index.html","5305ffdc85443a59a1ef1236e4367492"],["/archives/2016/07/index.html","6e220a8190377f499882ed5f878a1438"],["/archives/2016/08/index.html","a81eb621ba9828e559a1e06351f64045"],["/archives/2016/09/index.html","e9776ab34a67af7f95036b6ffe507463"],["/archives/2016/index.html","dc2875d12f88da1de5694e5d290722ae"],["/archives/2017/08/index.html","84613d3cd573da62271afff3c8221aa1"],["/archives/2017/index.html","c976bac98535872a4b8477b7b42d3ff8"],["/archives/2019/03/index.html","ea9e8738cc41147854f921e1b8a3b92a"],["/archives/2019/index.html","bf4d4aee3743e79d56e71b7072de7bf9"],["/archives/2020/01/index.html","9aceef1bec8780be8126739cd0792895"],["/archives/2020/12/index.html","2c8793a493f517f0b8851082e58e4a56"],["/archives/2020/index.html","dd42d68c725daf8e77cdbe41c6a5b7a2"],["/archives/index.html","4094abd3ec76f0c44453131f83d2bb7a"],["/archives/page/2/index.html","7edb4b50e4c732396076e5bd969a386f"],["/books/index.html","db5c69a7180fe69dd6ef1584ba9add76"],["/categories/C-C-学习笔记/index.html","31539a57c23d32256c45c6296302d985"],["/categories/Python/index.html","7eae170fc8ad8b696344f7655c4c8fbf"],["/categories/iOS笔记/index.html","56319b5de0b760e868ad3852521f9dff"],["/categories/index.html","e23439a22d566d1cb6ac35fec8b9d08f"],["/categories/深度学习笔记/index.html","a31e04ca10136df65bb6647b44a8fc04"],["/categories/算法/index.html","7a25503c6e95efa3c84be578aea3b4ef"],["/categories/读书笔记/index.html","06200d1b7b4912fd278aec8753955056"],["/css/index.css","270a4428f25a6c3a864b49aa521f1829"],["/css/var.css","1cace3744ec75047884bc9ee3276740f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","54f2066ac90d61dfc4b83b03b618a11b"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","70c872b592b2ed43707c301441cf6bc2"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","e1c8481d479e764643d4199399cd6da6"],["/photos/index.html","256a77578aa422cf9e5732e3c9e5c7ec"],["/posts/1e2d973/index.html","7631bdd4de9bd0d975e165831300a608"],["/posts/3071f1b7/index.html","5c2f95af744cd2d1de0e70ae7b2c6f64"],["/posts/46fad066/index.html","e5f8ba2be4e80f558f2482d027445e5d"],["/posts/4727556a/index.html","19401e2918beed4f60a19196cd9f3653"],["/posts/66b18fb4/index.html","8a52e5abab2ae9f50af6b30ca7c51002"],["/posts/6a1612fa/index.html","ed9434f5148a2891ccb0c62f2c9d5f50"],["/posts/6a70e6ae/index.html","323301f3383b0cd918b7cef104e7d1f4"],["/posts/6ea8b1ca/index.html","2f5465cde97afabce3c20a3f8b385618"],["/posts/70a8dfc8/index.html","d4c83c595451fdeefe82086dd7834556"],["/posts/97b39fbe/index.html","36b7a7d5ce61173f92b9df8dcc0cf597"],["/posts/9a55744d/index.html","55ecdc62c18b3d0329f5f9dc312197ba"],["/posts/9bbebf74/index.html","f43e48ff9602df5e1374e8f259528f11"],["/posts/9ce9d2d3/index.html","b4043e132876fe1933494a4e04ba17e6"],["/posts/acff3e0b/index.html","ea106205accbaa81bf5e4694e7e638d8"],["/posts/bd50476c/index.html","48efb05789bf800591a2a6d3a592bd02"],["/posts/dcd6586c/index.html","e81070f2b1380795315ebf5d3a175a52"],["/posts/e48c91fc/index.html","e81a0ddbcddda87c22b2fe371f89c72f"],["/sw-register.js","8e9d78844cbc74c5329e5a3ca49dba9a"],["/tags/C-C/index.html","a7e4dcb1d4ef5a195aa90eade870a98d"],["/tags/PyTorch/index.html","a229d9c27e72b7d2219576a783a74fff"],["/tags/iOS/index.html","2b84145a1fc3c06f125b0abf2d4c1576"],["/tags/index.html","c7d1036420f40a0d9121ebd60ed244b3"],["/tags/objc/index.html","4f60d7dd65ba4e8e4a57cc62c4ff4884"],["/tags/python/index.html","6e26d33c931424f1facbb2214745643a"],["/tags/swift/index.html","887953a1162cbf78bb587a9c2f18b650"],["/tags/机器学习/index.html","1633f14ddb146df3e69f2a14168a5dc9"],["/tags/神经网络/index.html","40448feea4ea5f4b1663eaf4a6b5498f"],["/tags/程序员/index.html","68876e8b40a75666d0021b5e59a70c33"],["/tags/算法/index.html","f7dc1ddce0f1234c878e5a97abd80261"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
