/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","bc36cdbe0f7b99dfe8b962995a3eff7c"],["/Gallery/suipai2021/index.html","5c9596e8509c4b6715d80a86bfe6e44d"],["/about/index.html","25143f0d5b91ef8a8030f83a6fc94899"],["/archives/2016/01/index.html","bed48cf405d8dae1616f10d8a3af5945"],["/archives/2016/07/index.html","8ee8ee0e940f99f4284304581748792b"],["/archives/2016/08/index.html","a14a8f3638521d53f0e433a3e7008e86"],["/archives/2016/09/index.html","cba4eb95956a01857a69dd45cf25e6a0"],["/archives/2016/index.html","867cd8247856abd51cba867a850bf938"],["/archives/2017/08/index.html","a56596a08821adead0ad8a5cb356ccec"],["/archives/2017/index.html","d86ca7853df91d026ca798e74dd2a565"],["/archives/2019/03/index.html","33bb246dd6a14c9c66ff780e999683e4"],["/archives/2019/index.html","9959f998bb5727d07abd8f84be8054a2"],["/archives/2020/01/index.html","3d05c1d5fec119f35fef03be9c1874c3"],["/archives/2020/12/index.html","5822fe0f24317eb11cba968f72d4c947"],["/archives/2020/index.html","b09856d21b64bbed2a4a991a09a8b176"],["/archives/index.html","c2b51b2d12445f12402d289a83ea5945"],["/archives/page/2/index.html","a1f7d1589328922db9f2e01916876b70"],["/books/index.html","ac242a8c3aa04998a2c3f1f37195e82c"],["/categories/C-C-学习笔记/index.html","2cc78d84cf2d3ff71aaa501a8fe7c16d"],["/categories/Python/index.html","b79bc97671a2f5bfdbc371502d756113"],["/categories/iOS笔记/index.html","4e233ab4117b3c2ce3377b096e4a2488"],["/categories/index.html","58146b9a6cf0948a075a33545d345d28"],["/categories/深度学习笔记/index.html","a0576f5a42ec91758b5492f1edc2314d"],["/categories/算法/index.html","80f16e70015cb68f4e52f80634718bf2"],["/categories/读书笔记/index.html","1e8f4c9d17eeef896317233ab8cbe3f2"],["/css/index.css","757a1d9d6edc924946e7c50523d6165b"],["/css/var.css","8027744044fb0ff8f4d3961e2a1f5ded"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5b5b63d8850c2d7c6558bacc44275f12"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","f67c960098a59ce892ff8f5d5f2e2c0a"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","df8678999852b86e4cce4bfdc8588bcc"],["/photos/index.html","08b14fb134931887318aafc16867587e"],["/posts/1e2d973/index.html","d27bd14ade3d92e2878e6a85c5612773"],["/posts/3071f1b7/index.html","12bc12b6f37f14a21ee9c7e40558196a"],["/posts/46fad066/index.html","2b2c24ebeaa4542df78d005d8aafc7de"],["/posts/4727556a/index.html","6c4da7d7db3057f89daa818f4f60f01c"],["/posts/66b18fb4/index.html","eb49f1478009561b0594a9955b6adf38"],["/posts/6a1612fa/index.html","1819684552912ede44433d1728107a4a"],["/posts/6a70e6ae/index.html","61c3debd1aafea7048c81877946dd860"],["/posts/6ea8b1ca/index.html","5811331d5400424500113873803da678"],["/posts/70a8dfc8/index.html","2e42adaf3312300b81f6a5ca1cf91c31"],["/posts/97b39fbe/index.html","f1b2af850fc295d18fb8fb1443d00189"],["/posts/9a55744d/index.html","6557e5c0081e70d274a78cd332759fc3"],["/posts/9bbebf74/index.html","7dc5285df6cc87ad13577502dbafa48a"],["/posts/9ce9d2d3/index.html","44cabefe69bd8b06cbc6a9e57190772d"],["/posts/acff3e0b/index.html","4afac706d88002dfef486cc3cdb06c74"],["/posts/bd50476c/index.html","80a2b5e4fe7a402127a2aa10ddde4918"],["/posts/dcd6586c/index.html","9b41b1464bdd18391ac2bc5680ca9edd"],["/posts/e48c91fc/index.html","091fe9a0069da61e7191640c8af0a534"],["/sw-register.js","2e733c1def400b1efb72a0a28a752b0f"],["/tags/C-C/index.html","b5ff57f2bd51c8e0a6fae4b319e8bbc0"],["/tags/PyTorch/index.html","02a9d3cdb6a36736c9e4046b66999164"],["/tags/iOS/index.html","15a02e40d0311b57cc7dd09488ea975a"],["/tags/index.html","003337bcd49fb8c7ba2ed4a654d52ad5"],["/tags/objc/index.html","591911650682f6fb564a924cf4f56e45"],["/tags/python/index.html","5e29f672be300960d4119dd4b85f048d"],["/tags/swift/index.html","9f5f5557f28b6d8ef61fcb2fc98d71da"],["/tags/机器学习/index.html","9ac04a7db4f286b335ef70ffb82b14eb"],["/tags/神经网络/index.html","61f0464b34f610b8bc82b9ee86bf3829"],["/tags/程序员/index.html","3c78e27813f23234e5a55ef458d87da8"],["/tags/算法/index.html","1963b9ee99e4df208178b194bf6547b0"]];
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
