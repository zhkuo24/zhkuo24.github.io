/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/2020/index.html","af527925c7a5a2295bef8b61453bc485"],["/about/index.html","d713e15d86d1e1ccd05251d53b1211c1"],["/archives/2016/01/index.html","d542bc2454944224661ccc986e0aecea"],["/archives/2016/07/index.html","bd6063b551f4197173fc4ead8ca72dde"],["/archives/2016/08/index.html","b996c763660187be2438be1ec6547656"],["/archives/2016/09/index.html","9df0825cd6212040b5d90f026fa47180"],["/archives/2016/index.html","89396bdb18592e2713421ea5eadd5948"],["/archives/2017/08/index.html","5dd055cd397821fb422615a346e5e7b2"],["/archives/2017/index.html","ec6cd9af58c12dd6646eed6d60f4df05"],["/archives/2019/03/index.html","f4ed2b5f4e81efcbd1b52d782fa71a8d"],["/archives/2019/index.html","d7425ea853561ea146a66305b424dcfc"],["/archives/2020/01/index.html","fe2e76b78c1c72e20e1675ddcec426c4"],["/archives/2020/11/index.html","a965d5bbd9e099335efd665c927576a6"],["/archives/2020/index.html","b7f3f13aa7f137ae2eb3ab5a0a4a3d83"],["/archives/index.html","94ea55426bdb38afe3c2c73776625de1"],["/archives/page/2/index.html","19e71a297f1b0647ee95d17af81bf8f0"],["/books/index.html","f570482fff33a71921bac2644ccb0a02"],["/categories/C-C-学习笔记/index.html","0cc7781cf03ce4e794a59ceeb4decee6"],["/categories/Python/index.html","673efd4ba125a9a4c3b90a7502a6cdfb"],["/categories/iOS笔记/index.html","356180fbb78f1df846aed8107cd24edf"],["/categories/index.html","e1e62a58c49c7c135174736d1b8df9fa"],["/categories/深度学习笔记/index.html","6c4fc848b2a2ccc6c3bd5006dd6878fb"],["/categories/算法/index.html","145aa745f25965d745f056b5afba7509"],["/css/index.css","d109d1b93add9d7a119e390d7f7109ed"],["/css/var.css","d961ea8ea22423840aa53724def4b719"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","879f7d4eaf4ababec7666372b26c49e1"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","7fa2747ebc1d106796e825379de98635"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","0c46b1c1ba21d797772bf546623234ea"],["/photos/index.html","b227b84d5f244fbee887b604fff910a2"],["/posts/1e2d973/index.html","088c63ad1783b2d56ec4f5203c76edea"],["/posts/3071f1b7/index.html","bda59f2a0d2fc59319af726f902a754c"],["/posts/46fad066/index.html","e22d8f465d85ddbc85711baf5f3bdd93"],["/posts/4a17b156/index.html","66b69a71cfd5897174a378558277c805"],["/posts/66b18fb4/index.html","d1cb0fa06a547e9393e9aceb478886ca"],["/posts/6a1612fa/index.html","b0eb83a27bc832bc3826757bd3e8843e"],["/posts/6a70e6ae/index.html","af47f9e4f445652b9811263489f21938"],["/posts/6ea8b1ca/index.html","005d4fa16183d5faf7d320cc3d1f56c7"],["/posts/70a8dfc8/index.html","afa45048902107b1ccb2189df864d727"],["/posts/97b39fbe/index.html","c71826839877ee8e0dd021446967e190"],["/posts/9a55744d/index.html","a4af58e2c3158731b86ca8fd2a7bd0aa"],["/posts/9bbebf74/index.html","89a2deaaea8009cd0469d41a9f42ea85"],["/posts/9ce9d2d3/index.html","e12907bd4b98576e6064c5ef7021fb91"],["/posts/acff3e0b/index.html","91cdb4c25120978c9dd1c5c38b8914d2"],["/posts/bd50476c/index.html","5d357724a85fbbab5a3e386d794782c9"],["/posts/dcd6586c/index.html","1df6bd1d3f2fa9eaef794c1ab634698f"],["/posts/e48c91fc/index.html","8883cd36e7008ea943b81f722de083d5"],["/sw-register.js","2e45fb9737ecfda2ed36e29fa16373b6"],["/tags/C-C/index.html","5d305b34295e6c0aa3838193985564c9"],["/tags/PyTorch/index.html","429dca14c2c969e46a9cc719b488cec8"],["/tags/iOS/index.html","355bbbb58ee746f3574b4c2b5059a601"],["/tags/index.html","62e7fc56b51b5407458e6477fcde658f"],["/tags/objc/index.html","526988261578342730c82b083d1a1563"],["/tags/python/index.html","f85cd397db1e3a077d06c5139239ec29"],["/tags/swift/index.html","0527549ca00129bc6d73d36fc50e74a4"],["/tags/机器学习/index.html","91cf72de94b253de5e93bc27e4a45ec6"],["/tags/神经网络/index.html","a538646bef0098f3927030cdeea5dc6a"],["/tags/算法/index.html","5f4e59b87d101530c6efbf6dd64bab6c"]];
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
