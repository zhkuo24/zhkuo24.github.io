/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/2020/index.html","d2e9bb1df733d8df431d36de0dfc201c"],["/archives/2016/01/index.html","e92e7b2ef11a2b9a5443e006d23ec86d"],["/archives/2016/07/index.html","f9000fa477937c38dc7a8f56526799cf"],["/archives/2016/08/index.html","4c289a97a24294706e148ac4c261b393"],["/archives/2016/09/index.html","96b543832572b782ae2782e1ca99cae4"],["/archives/2016/index.html","55cf82ef9739e3825191e4361321a76c"],["/archives/2017/08/index.html","6a4e067b314d224d267bd0e8aa7735a7"],["/archives/2017/index.html","b52018485fe84c53f1a5a0add67c3a16"],["/archives/2019/03/index.html","8f95a214f2819025059d6af666d2da46"],["/archives/2019/index.html","33d94ee37f489fd56d771be4eabe99ec"],["/archives/2020/01/index.html","4fcf50cedeaa21c8b6e3780c41e2d988"],["/archives/2020/11/index.html","2dada998cbe6aa5ec434a30b50eb04d5"],["/archives/2020/index.html","9041111175afdd7e93b4f69991a5cc4c"],["/archives/index.html","facb6eed642709d66eb4782660505e00"],["/archives/page/2/index.html","9cadc5d4dafe79debade32f45bda3bf8"],["/books/index.html","975829054b3aca272bd3500f418c399b"],["/categories/C-C-学习笔记/index.html","093a9023f094a51df598af17728bbe56"],["/categories/Python/index.html","cc5d52fb255973f87d8432f9294b7e1e"],["/categories/iOS笔记/index.html","676aefd080e576374804ca0690a40cbd"],["/categories/index.html","ff2a15e150dc7dcaad25183bddbbc57c"],["/categories/深度学习笔记/index.html","951888c8146848fbb66f1e99cbb458a6"],["/categories/算法/index.html","b095fb7a3eea887daeafb469cea59a60"],["/css/index.css","3c3d337b5e4bc50eece1526222c4afe3"],["/css/var.css","2059c1449370597198945acdc353329b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","6e2c2fdc0e1d9e0bbed77563e9747f8a"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","9e1ec5b40d376db4b8dd060fca724658"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","eb45e9709c9bee8e8b5d3324c975305d"],["/photos/index.html","8d8e5ecf6868734d8f2c24bf97117269"],["/posts/1e2d973/index.html","7ee9084a0d405d100b1a7bd8b846d5fd"],["/posts/3071f1b7/index.html","4be638a022274320381cc10e1905e6db"],["/posts/46fad066/index.html","4bec4b46f2ac6ed48adfb7a2fdf6def1"],["/posts/4a17b156/index.html","d28eb57f88bb5569414b1a9c6fe12080"],["/posts/66b18fb4/index.html","64771ea8c52e41ea8d9488bea3576b7e"],["/posts/6a1612fa/index.html","32b7bc528a8001ee8869534b62c18bda"],["/posts/6a70e6ae/index.html","e68c369d9b6faa8164846eb313f21540"],["/posts/6ea8b1ca/index.html","61464fb54b5bb2a4a1be5b50c348e622"],["/posts/70a8dfc8/index.html","983a5fa41de46dd71c93a0572690c96b"],["/posts/97b39fbe/index.html","932aabcec5b39d8aad3f8c566a24f10c"],["/posts/9a55744d/index.html","0112d1beb307c614afa46fefabc82718"],["/posts/9bbebf74/index.html","5cacb7675c1f0ecd3a59a1b37e6c7bcf"],["/posts/9ce9d2d3/index.html","52d91eeb427bcaaf4e4d5999e4eaa491"],["/posts/acff3e0b/index.html","433fdf0e2a153a7b3f9e9234e962f7c7"],["/posts/bd50476c/index.html","29fdd9f6a5abdbd430a92a190ec561e4"],["/posts/dcd6586c/index.html","93edee6cf392a62fa9273758fbbebdde"],["/posts/e48c91fc/index.html","b06be2791fcbdbf71563bc20025c4c1f"],["/sw-register.js","e858315291d935c861740fed3ea00147"],["/tags/C-C/index.html","943abe482b6c8b313bab110d4ee6e261"],["/tags/PyTorch/index.html","7d7be5ca074573d18cb66f2bd4769f5f"],["/tags/iOS/index.html","0a3a0a3f42b18d0d4cf38165e6961636"],["/tags/index.html","c85272dbf404a7851612f007eb62f4b6"],["/tags/objc/index.html","3bb31fca3527b518bd205b49c1b78cae"],["/tags/python/index.html","857d9dafcfd64c25f526cadb3434c4f9"],["/tags/swift/index.html","6ef430fdc6db2b37fec4533da1fd29ae"],["/tags/机器学习/index.html","4fa7f6400c4b34c41803f7698dd42251"],["/tags/神经网络/index.html","a89b671211439a7120789bca9755ea46"],["/tags/算法/index.html","425d21a49972e50c85c25150d2072fd1"]];
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
