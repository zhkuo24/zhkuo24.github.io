/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/2020/index.html","c5c0228ef8e712cdaa99b8fad640fd7d"],["/about/index.html","e8d4c1886fab0449db475d4ce4a94443"],["/archives/2016/01/index.html","686e57396a9973dd46ccd7a8b38b292a"],["/archives/2016/07/index.html","70c6de50a819c2ffe4929ab20ee885b5"],["/archives/2016/08/index.html","8b56b87178fc66d6bafe2b45bdf25d39"],["/archives/2016/09/index.html","d5a039b6f07ba6ec732aaca5ec90b82e"],["/archives/2016/index.html","2b8a9f80e600d05c43588f3e2885556f"],["/archives/2017/08/index.html","9088fe8784b34be6bec716b9b431e2d6"],["/archives/2017/index.html","33d67d6000fe5f8de5bc14ab900b97a3"],["/archives/2019/03/index.html","7d8ff8c155bea6054d5c01d696768844"],["/archives/2019/index.html","262cf5c85f254537d0f8ac551bdb5d98"],["/archives/2020/01/index.html","83ae3be9c16ded7fd8d8303256b2e654"],["/archives/2020/11/index.html","60c27103f3d1cee5dbf5fc1a56fb0895"],["/archives/2020/index.html","2c70a652f23c2e435c7302134650ec73"],["/archives/index.html","1ba43d3bb3867f2d68783c742ac9e9db"],["/archives/page/2/index.html","e46f81fdd20bd5042e337c36f0d312ea"],["/books/index.html","d0df773e2899470032d71a186373b30f"],["/categories/C-C-学习笔记/index.html","7f1b5c5524673151c49d495f74a4a5e5"],["/categories/Python/index.html","a08cd910ed91c2f43b88a3abc99b8d44"],["/categories/iOS笔记/index.html","253ed381c037fa7c90318462d7006a06"],["/categories/index.html","6ad65e7bd529a4bed8bfb7a37b9c3f3f"],["/categories/深度学习笔记/index.html","2c84460169d56a50f642a515720075c9"],["/categories/算法/index.html","6b4cab3423bc71e2acb953040e3ee43f"],["/css/index.css","3c3d337b5e4bc50eece1526222c4afe3"],["/css/var.css","2059c1449370597198945acdc353329b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","19d9c965804c3cfe80f96c847320baa8"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","f43d593f4d4fb49ba577c1eed2331f35"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","c11623aef1f47494c098d350a20c248b"],["/photos/index.html","0e592b64ed674a32a33608e8e7c2976f"],["/posts/1e2d973/index.html","7ee9084a0d405d100b1a7bd8b846d5fd"],["/posts/3071f1b7/index.html","4be638a022274320381cc10e1905e6db"],["/posts/46fad066/index.html","4bec4b46f2ac6ed48adfb7a2fdf6def1"],["/posts/4a17b156/index.html","d28eb57f88bb5569414b1a9c6fe12080"],["/posts/66b18fb4/index.html","64771ea8c52e41ea8d9488bea3576b7e"],["/posts/6a1612fa/index.html","32b7bc528a8001ee8869534b62c18bda"],["/posts/6a70e6ae/index.html","e68c369d9b6faa8164846eb313f21540"],["/posts/6ea8b1ca/index.html","61464fb54b5bb2a4a1be5b50c348e622"],["/posts/70a8dfc8/index.html","983a5fa41de46dd71c93a0572690c96b"],["/posts/97b39fbe/index.html","932aabcec5b39d8aad3f8c566a24f10c"],["/posts/9a55744d/index.html","0112d1beb307c614afa46fefabc82718"],["/posts/9bbebf74/index.html","5cacb7675c1f0ecd3a59a1b37e6c7bcf"],["/posts/9ce9d2d3/index.html","52d91eeb427bcaaf4e4d5999e4eaa491"],["/posts/acff3e0b/index.html","433fdf0e2a153a7b3f9e9234e962f7c7"],["/posts/bd50476c/index.html","29fdd9f6a5abdbd430a92a190ec561e4"],["/posts/dcd6586c/index.html","93edee6cf392a62fa9273758fbbebdde"],["/posts/e48c91fc/index.html","b06be2791fcbdbf71563bc20025c4c1f"],["/sw-register.js","3e759ab5acad1483093207e92dbf7da8"],["/tags/C-C/index.html","826f2c6aff96de2a367850debd4258c0"],["/tags/PyTorch/index.html","5f0460a3cf137e2640c3c39cfa1535f0"],["/tags/iOS/index.html","44fe6d7736adee11cda8200feeaca604"],["/tags/index.html","2bcec2f5b9d1ae9d8a431c5190c06d02"],["/tags/objc/index.html","f0a8c4d94076831ee19be68279ea9bfa"],["/tags/python/index.html","f9185f316398d5d8ec881262963247df"],["/tags/swift/index.html","52907a1443c762f3cdedc3e15b6f16c8"],["/tags/机器学习/index.html","d154a65b86d1db530cd751a9cd88e06a"],["/tags/神经网络/index.html","662f3c53641813327da2250af54a7bbd"],["/tags/算法/index.html","8e86433483224d7393c205ab95f62d7a"]];
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
