/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","ffb50cfff22cbf6d5a175bc65428dc59"],["/Gallery/suipai2021/index.html","a2213025c2f5cf231eb7cbb9bfe56eca"],["/about/index.html","16b3865ebb2f4028d3077784d0ecaaae"],["/archives/2016/01/index.html","201c6b1e0a81ab39773c38f4773cd245"],["/archives/2016/07/index.html","536d044d24a504b8f46127c1dd160ea5"],["/archives/2016/08/index.html","f8a5bb2abf43e0fc31cf081b99136db3"],["/archives/2016/09/index.html","a17e9c6bd1cee9fd50c79e904e2ee79f"],["/archives/2016/index.html","1efb2d02b8545656760cdd67cf1115ac"],["/archives/2017/08/index.html","b904f57a592e0c288d716fd20ff397be"],["/archives/2017/index.html","943792d2bcad671b0bc588818b7446e2"],["/archives/2019/03/index.html","afefec8312c1e1360355cedea5dd1f61"],["/archives/2019/index.html","7133f557389422116a0e94e9557a0377"],["/archives/2020/01/index.html","e95bd773ac1fa8e6918633a881966464"],["/archives/2020/12/index.html","0c4c9454bc6480279352dab01c3d53c3"],["/archives/2020/index.html","9a1d648964f0ccd133420ed3b735513f"],["/archives/index.html","16c35984f6bf8452e2ea022ee6e4c572"],["/archives/page/2/index.html","f3d1a4acb9452aff271993610a9f3d37"],["/books/index.html","6a77a272255d394a2aac56f3c3cb5cb3"],["/categories/C-C-学习笔记/index.html","dda4c722f148432cf160c0ad5c8fe703"],["/categories/Python/index.html","2bbc6e6f81a541fc1bf4aa7488819e55"],["/categories/iOS笔记/index.html","bb7a69f7f81f8f1966ca30432c98a7b5"],["/categories/index.html","d58953a4876731c2212a860d57380d97"],["/categories/深度学习笔记/index.html","ad941d147081c106c4e4930fe5d085e8"],["/categories/算法/index.html","55825045fa3a6c2725409dd6d39751d6"],["/categories/读书笔记/index.html","f94e4be44b1bbe1482a5ac0372998cd7"],["/css/index.css","35161e610796c2352ba8a53408ea3ae1"],["/css/var.css","c196c758379079112b730a74c16affee"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","09df1cb64b28324f2ed49b77974b0a80"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","963cd1a0c994dafaca5f7392462a9497"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","13b3a66ac9b720c8af590dc61596d9b3"],["/photos/index.html","ad06fe9ce970f81422eac28be0e22926"],["/posts/1e2d973/index.html","7631bdd4de9bd0d975e165831300a608"],["/posts/3071f1b7/index.html","dff5fc9ecc355ce21a11cc5e412da88d"],["/posts/46fad066/index.html","e5f8ba2be4e80f558f2482d027445e5d"],["/posts/4727556a/index.html","19401e2918beed4f60a19196cd9f3653"],["/posts/66b18fb4/index.html","8a52e5abab2ae9f50af6b30ca7c51002"],["/posts/6a1612fa/index.html","ed9434f5148a2891ccb0c62f2c9d5f50"],["/posts/6a70e6ae/index.html","323301f3383b0cd918b7cef104e7d1f4"],["/posts/6ea8b1ca/index.html","1e29e848a088329140c5d586cccecea2"],["/posts/70a8dfc8/index.html","d4c83c595451fdeefe82086dd7834556"],["/posts/97b39fbe/index.html","36b7a7d5ce61173f92b9df8dcc0cf597"],["/posts/9a55744d/index.html","a68dfd2cc6a1ed3ed60c386363f31ef7"],["/posts/9bbebf74/index.html","d965046823e3b0f94cf98fb948c10408"],["/posts/9ce9d2d3/index.html","35cb84b66b7d7bedb0e650c55fd8f003"],["/posts/acff3e0b/index.html","7b2388d59b75674ac0df66dd225bf625"],["/posts/bd50476c/index.html","ba817970fa2245869a08ddd43efc4e60"],["/posts/dcd6586c/index.html","5c9767166356265079c02d44c94ca9dc"],["/posts/e48c91fc/index.html","e81a0ddbcddda87c22b2fe371f89c72f"],["/sw-register.js","d08d27fd7e89a77a44dde3dbf9853a93"],["/tags/C-C/index.html","d69ef97b9d7dc4bc944b8f6555ff95a3"],["/tags/PyTorch/index.html","9611af67590c7c4a7325b6e4a1fcaed8"],["/tags/iOS/index.html","077daf20a0cfe26451b3b30bbe5bf3ca"],["/tags/index.html","8645554ad750297b4e69143a05a0e52c"],["/tags/objc/index.html","c668a8e7d34eb58c54eaa643c0b51ab5"],["/tags/python/index.html","9411c44225642068e78d4852269f8a9f"],["/tags/swift/index.html","9eafac8e8a040083e79172615f11b744"],["/tags/机器学习/index.html","b5175cf9dcb02b3ecaac5ff372af1c20"],["/tags/神经网络/index.html","9a7558798d1f76c899268ceb3308dd23"],["/tags/程序员/index.html","7ac25743775477321af24a8fc74ad6b3"],["/tags/算法/index.html","7557b293c56c86e9dbcb184585c30ec4"]];
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
