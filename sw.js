/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/2020/index.html","174237e9925ee5142ded51492d701f4f"],["/about/index.html","2e989d8e5c73d21db00cdcf3a103ab4b"],["/archives/2016/01/index.html","dd287f0e38d82d20ce4f691ec45c7882"],["/archives/2016/07/index.html","7b6cbe3ed07ae453437bb1e37ad3ec36"],["/archives/2016/08/index.html","e227f64c1aa51e07f8e5a3fee37c07bd"],["/archives/2016/09/index.html","ceaa895fa1c8973edc661b927f96306d"],["/archives/2016/index.html","e9a0034f696f448d0d74f4931a1ba941"],["/archives/2017/08/index.html","7a7486d4ac16928677f12e859ea6f003"],["/archives/2017/index.html","787480a013aa3cf12a154759f2293aeb"],["/archives/2019/03/index.html","a2f9ffe6f98f6336f4502e3f049dccb1"],["/archives/2019/index.html","00c31471f45c379baf050e31c58fd652"],["/archives/2020/01/index.html","731b0fed6ad096640a16ed3840c34a09"],["/archives/2020/11/index.html","695c5ea0ce93aceb6f945cda82bae506"],["/archives/2020/index.html","d851400eda4e3574a6ed714e01689a72"],["/archives/index.html","8b24888530d2821d47c11064f61b6d42"],["/archives/page/2/index.html","aad5d823116cec3aa3e7e8b1c86c33e2"],["/books/index.html","3085ec128bb6bc59f750b33b2fd7cf18"],["/categories/C-C-学习笔记/index.html","1d27170b74aa8f1f92890634d8dc2c5f"],["/categories/Python/index.html","2cfe7ba0c83c9b91e2322fc29c396b8e"],["/categories/iOS笔记/index.html","b5154a2945f86dcb2ea070350432a23a"],["/categories/index.html","70dae5469c493febb3592b4962e3e089"],["/categories/深度学习笔记/index.html","e2fb0d9980df777a67e9c9d77708b3d2"],["/categories/算法/index.html","9dd28801e78c655a12fc80a25a0e7293"],["/css/index.css","3c3d337b5e4bc50eece1526222c4afe3"],["/css/var.css","2059c1449370597198945acdc353329b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a981f0ca7796631ad4d32ddbeef01841"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","d99882cc95b0d89523af59905db78e67"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","673db0361a21161bf871eb05517f96e5"],["/photos/index.html","78c2381b7a1d7b783b3c724ee8719e2b"],["/posts/1e2d973/index.html","7ee9084a0d405d100b1a7bd8b846d5fd"],["/posts/3071f1b7/index.html","4be638a022274320381cc10e1905e6db"],["/posts/46fad066/index.html","4bec4b46f2ac6ed48adfb7a2fdf6def1"],["/posts/4a17b156/index.html","d28eb57f88bb5569414b1a9c6fe12080"],["/posts/66b18fb4/index.html","64771ea8c52e41ea8d9488bea3576b7e"],["/posts/6a1612fa/index.html","32b7bc528a8001ee8869534b62c18bda"],["/posts/6a70e6ae/index.html","e68c369d9b6faa8164846eb313f21540"],["/posts/6ea8b1ca/index.html","61464fb54b5bb2a4a1be5b50c348e622"],["/posts/70a8dfc8/index.html","983a5fa41de46dd71c93a0572690c96b"],["/posts/97b39fbe/index.html","932aabcec5b39d8aad3f8c566a24f10c"],["/posts/9a55744d/index.html","0112d1beb307c614afa46fefabc82718"],["/posts/9bbebf74/index.html","5cacb7675c1f0ecd3a59a1b37e6c7bcf"],["/posts/9ce9d2d3/index.html","52d91eeb427bcaaf4e4d5999e4eaa491"],["/posts/acff3e0b/index.html","433fdf0e2a153a7b3f9e9234e962f7c7"],["/posts/bd50476c/index.html","29fdd9f6a5abdbd430a92a190ec561e4"],["/posts/dcd6586c/index.html","93edee6cf392a62fa9273758fbbebdde"],["/posts/e48c91fc/index.html","b06be2791fcbdbf71563bc20025c4c1f"],["/sw-register.js","f7780433354d447921de4f45a4a23a26"],["/tags/C-C/index.html","7f392ca511cd230c334cfd405735a80f"],["/tags/PyTorch/index.html","8fb0ff42736f42240465644bbe72c94a"],["/tags/iOS/index.html","805ac1af74dc563010ae0015e77b2b3b"],["/tags/index.html","19024b07a3dac96d2d2803a8152fe04f"],["/tags/objc/index.html","48935861c6840640a1b01dca3c14ebf5"],["/tags/python/index.html","f6294527eb344c4e5c929cbf47dc997f"],["/tags/swift/index.html","e7d9ddc9fd8cbc8c8a0a93f44da18e43"],["/tags/机器学习/index.html","d4287483836d63df1616376a4061ee2a"],["/tags/神经网络/index.html","4c499df1411d4cfc997bc08103e36439"],["/tags/算法/index.html","1b8b950473eaff71bc30c9cd35f325ae"]];
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
