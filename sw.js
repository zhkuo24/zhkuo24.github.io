/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","927f299ff8f3fbeffa09744d94655eb9"],["/about/index.html","8b80c2060d2a99023a845afb730a1c72"],["/archives/2016/01/index.html","dac481a2bc5e907c6a7cfa0f7191922f"],["/archives/2016/07/index.html","4a20e5a4867613e44680d7e41517c973"],["/archives/2016/08/index.html","eb2c5c2a7d2f2bf2e8890bde323dd2cb"],["/archives/2016/09/index.html","a9f4cc1f6a4be7aa5d5f84e8b4d6efa1"],["/archives/2016/index.html","6476317569cbcc1ad4c1158ceaf0475f"],["/archives/2017/08/index.html","9d6fc19afc91a07a4e5ce99132fe6656"],["/archives/2017/index.html","2f9209e345bed0389bc921f628f5cbb9"],["/archives/2019/03/index.html","c26f02cecaae45750da50fec8c3ec931"],["/archives/2019/index.html","a9908068a55d33a93ca7e90b367f4e3a"],["/archives/2020/01/index.html","b2ad9c2b7727346f0b687d97c6c87668"],["/archives/2020/12/index.html","818c910e3103d1a7d74705cb6860060b"],["/archives/2020/index.html","7b4777390a22b047267c13b866358215"],["/archives/index.html","ab4c330607276b443b4689c1a48ab3cc"],["/archives/page/2/index.html","c697c8288c6ad7944fe9df7f1db2fbfe"],["/books/index.html","03142d6aa52325fc9520f1c4b470e3f2"],["/categories/C-C-学习笔记/index.html","a8e37e302eaa4458bc8a12aaf220a995"],["/categories/Python/index.html","d80e7690c693e461e847d33d66ec2a48"],["/categories/iOS笔记/index.html","4b5a10c7a4efd066a41c113ef84668f5"],["/categories/index.html","01892535a3f66f88b29550fc0026b8b4"],["/categories/深度学习笔记/index.html","5d39e26d2d75f4e03af822542d715844"],["/categories/算法/index.html","310b727641a27590534815f432946fd9"],["/categories/读书笔记/index.html","fa3fa7ab19440de763ca917190bf38ee"],["/css/index.css","e450a9be562ac581d005a5bee541823d"],["/css/var.css","502d6ff7e7daa492668efccabee1e9b4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e00a457be94133b3c838a275e346eddf"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","c43021b4a07309ad754992ef3501da1a"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","0d6fe5a954d55c53dfd9af27e034cfed"],["/photos/index.html","75e28d102af199e47e70ca0bec8c4e06"],["/posts/1e2d973/index.html","4bef94642276e02543eafe0e5950e880"],["/posts/3071f1b7/index.html","ade2111f1d1095ddf2c4842764660800"],["/posts/46fad066/index.html","092eecd54f9ed46319d306948b9124cd"],["/posts/4727556a/index.html","2d17003a69bb29e60f2d3f4a10f996c7"],["/posts/66b18fb4/index.html","055953b9720fcb400f3be62e5433f14e"],["/posts/6a1612fa/index.html","65d6178d91da9be84b4a3c231574abfd"],["/posts/6a70e6ae/index.html","c0e089313780a7dec453510dd4c2756e"],["/posts/6ea8b1ca/index.html","2fc4b276542e8d8d8aec72c655899d4b"],["/posts/70a8dfc8/index.html","c92866c8a485764abec6137e4e186106"],["/posts/97b39fbe/index.html","7f2e494b9314bfab30d05048da12a573"],["/posts/9a55744d/index.html","6c4178c2b75bf5aab1bd0aea5dd669ca"],["/posts/9bbebf74/index.html","694b1cf2fc5da005f0cd177f62fd328a"],["/posts/9ce9d2d3/index.html","522439d94acdf89a37fca71355dd6804"],["/posts/acff3e0b/index.html","8937101f367496426060adaf56a56904"],["/posts/bd50476c/index.html","587c17369cb0f64120f5052d5e3e0fc1"],["/posts/dcd6586c/index.html","f421eefd446c571b5b40f9f988ba2782"],["/posts/e48c91fc/index.html","d1bd88fc0731f7c68726218ee71e9bde"],["/sw-register.js","141b236327aa008400eff67c62bee636"],["/tags/C-C/index.html","b4851c5e1a4d63115482479e548a6e81"],["/tags/PyTorch/index.html","a0b48d1c657cec674b5745bd48bfed49"],["/tags/iOS/index.html","7981d5a92772cff6f08cb03e1abce9b0"],["/tags/index.html","15089e58f920da2d4a5e2542907cb2df"],["/tags/objc/index.html","a1d7bd8c9e9d59f47952681264cc93e1"],["/tags/python/index.html","75a7c685d896c4f0249a745bed9fa653"],["/tags/swift/index.html","3cf439f315ecaa4d41c67b2328dbcd6e"],["/tags/机器学习/index.html","658a3a13c879d34e67240d60b784ab28"],["/tags/神经网络/index.html","55948feaeaaec41ec92b136da335feb6"],["/tags/程序员/index.html","82a4f04cae4de8413d68e86bd7d9a14a"],["/tags/算法/index.html","8b573540f7fd14261ab2b9a89e14f400"]];
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
