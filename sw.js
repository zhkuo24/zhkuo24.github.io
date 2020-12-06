/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/2020/index.html","a3f83eedfdae4719a059ab80c2f78dc4"],["/about/index.html","04abaa5298fef3c0a09582001e83bdf6"],["/archives/2016/01/index.html","c7f6817e4d47ab8d609c3842fc08e1c6"],["/archives/2016/07/index.html","55cf9e2127aac96e73a6697912c6409d"],["/archives/2016/08/index.html","f51a017359cb25689c65a2a387853a22"],["/archives/2016/09/index.html","6f00a6e62912760c3b841cd74c1f42dc"],["/archives/2016/index.html","02c17f61d32fb2680f01ffff589fbefc"],["/archives/2017/08/index.html","3b1608045dd77d90038d269ae0c3aafa"],["/archives/2017/index.html","7b4ed1882e404eea796cd6cc7245f128"],["/archives/2019/03/index.html","a69239246aad381abbd1e9363c447c41"],["/archives/2019/index.html","1680f67c50f7b59ffc9e8988caf4c0ab"],["/archives/2020/01/index.html","50f635bbc00a99c265859d0f7a062ff3"],["/archives/2020/11/index.html","01dfaca74cbe83d7071a12f274f048ea"],["/archives/2020/index.html","3d1c3e675765f9462275f5f4f3001b81"],["/archives/index.html","ac9a469d6c4a2a7a89f32b3b07213658"],["/archives/page/2/index.html","d4cd0254c92a5da048435959e0e6a424"],["/books/index.html","b913306cfa6f4cb13e9571669e4c623d"],["/categories/C-C-学习笔记/index.html","8798d760179907caa8fa2dbd5f0f7c7d"],["/categories/Python/index.html","831667be81deebf4ca9acd6cf5b0aef2"],["/categories/iOS笔记/index.html","41dc7a341531b8d711927eed4cc57daa"],["/categories/index.html","11929f27189d96973f07c92753ffc4a1"],["/categories/深度学习笔记/index.html","f09b4fd27ac2935972cbab0228a4c031"],["/categories/算法/index.html","d65e0d237291a8e8c22ca76cfd45899c"],["/css/index.css","3c3d337b5e4bc50eece1526222c4afe3"],["/css/var.css","2059c1449370597198945acdc353329b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ccccf497a31ab68945eb2625db17a3b4"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","d67c4c69062f7c1dcdfa58ff369fb038"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","06bae057c9019e627bc0d4faf58ba1df"],["/photos/index.html","d8e337566c02a7fa640526f96db0b64a"],["/posts/1e2d973/index.html","7ee9084a0d405d100b1a7bd8b846d5fd"],["/posts/3071f1b7/index.html","4be638a022274320381cc10e1905e6db"],["/posts/46fad066/index.html","4bec4b46f2ac6ed48adfb7a2fdf6def1"],["/posts/4a17b156/index.html","d28eb57f88bb5569414b1a9c6fe12080"],["/posts/66b18fb4/index.html","64771ea8c52e41ea8d9488bea3576b7e"],["/posts/6a1612fa/index.html","32b7bc528a8001ee8869534b62c18bda"],["/posts/6a70e6ae/index.html","e68c369d9b6faa8164846eb313f21540"],["/posts/6ea8b1ca/index.html","61464fb54b5bb2a4a1be5b50c348e622"],["/posts/70a8dfc8/index.html","983a5fa41de46dd71c93a0572690c96b"],["/posts/97b39fbe/index.html","932aabcec5b39d8aad3f8c566a24f10c"],["/posts/9a55744d/index.html","0112d1beb307c614afa46fefabc82718"],["/posts/9bbebf74/index.html","5cacb7675c1f0ecd3a59a1b37e6c7bcf"],["/posts/9ce9d2d3/index.html","52d91eeb427bcaaf4e4d5999e4eaa491"],["/posts/acff3e0b/index.html","433fdf0e2a153a7b3f9e9234e962f7c7"],["/posts/bd50476c/index.html","29fdd9f6a5abdbd430a92a190ec561e4"],["/posts/dcd6586c/index.html","93edee6cf392a62fa9273758fbbebdde"],["/posts/e48c91fc/index.html","b06be2791fcbdbf71563bc20025c4c1f"],["/sw-register.js","02fed70f73b7db59b0147317a1afafa7"],["/tags/C-C/index.html","a34fd5342dc582dd9659380c20700c2a"],["/tags/PyTorch/index.html","af3dafd68601161848be72129f290521"],["/tags/iOS/index.html","73b0854e5eb2326f1d02b2fc828058d4"],["/tags/index.html","a6b3b6a21c37e3fc5445dc47485f6bb3"],["/tags/objc/index.html","8b619b5a38944fce16b73d60145a0b84"],["/tags/python/index.html","3acebed50dab4bac141bdf7ba69506de"],["/tags/swift/index.html","4cd3c4dd170ce0d49a6b94696ff483c5"],["/tags/机器学习/index.html","2882273de3a9001dc8d14970d14819f6"],["/tags/神经网络/index.html","c08a2119ffde5d31a65dbaf8c84cda39"],["/tags/算法/index.html","6ad55b6ca866f95b6fe76b052c319a58"]];
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
