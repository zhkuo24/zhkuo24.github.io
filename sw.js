/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","9f39dfe00bcfb214b346ad6c6664300a"],["/Gallery/suipai2021/index.html","03d7d0a0216603e663660ed2f092f27f"],["/about/index.html","149e50bc3afa322ca07a4cc8b9a09f9b"],["/archives/2016/01/index.html","81259c9e611bae0838f46d69e30f4e86"],["/archives/2016/07/index.html","56bd11edae2755be3ab60cfdde2d66c5"],["/archives/2016/08/index.html","d8e20fd6e59912e785b7d5a0f5c5a6a3"],["/archives/2016/09/index.html","0eaeb1b8179177a4ab0e961fea20ae6a"],["/archives/2016/index.html","c7b9185878732fcd5336d6fd80ea5b90"],["/archives/2017/08/index.html","c533a7f6b1984f45ea4bf01cfd8dc69b"],["/archives/2017/index.html","3962806bad06a7e1a973252c9a1d9f5b"],["/archives/2019/03/index.html","0a66e9d2b3db7d9298e91b767dbc7258"],["/archives/2019/index.html","f24bae347014aa68ec9ecef459cd2b59"],["/archives/2020/01/index.html","3b43f901c9f41658f4c72bdc3385a4fd"],["/archives/2020/12/index.html","1e1c41412a489fc6aa646a4a27b3745d"],["/archives/2020/index.html","80493482ada529b1046a5fb585faf226"],["/archives/index.html","b77880f8098c8670b0de2503b7b80e96"],["/archives/page/2/index.html","57d2f46aeaefe5c07267c58861b9f863"],["/books/index.html","24114f2de063994aa0cb066c90b26bdc"],["/categories/C-C-学习笔记/index.html","33c4b2eb0164bc8d8fe505fe5778c32c"],["/categories/Python/index.html","1cabb83e4eb84a96418f42d9ffa646b0"],["/categories/iOS笔记/index.html","3a28a4d3d23ce2cf712f6d9c1636abc6"],["/categories/index.html","71fc73e145ccff26b8bd4179b32c14aa"],["/categories/深度学习笔记/index.html","829920047623722d5d3f278c426bf739"],["/categories/算法/index.html","6a0d17c7f66ad78df5d1721bbfcd50c6"],["/categories/读书笔记/index.html","f57ee8b9886f2b345b77464452ca7e47"],["/css/index.css","757a1d9d6edc924946e7c50523d6165b"],["/css/var.css","8027744044fb0ff8f4d3961e2a1f5ded"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9a6e17f982b00ac5b2053f76cf219d9a"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","64d0ed6cb8a4c2249cd3228b1c7aa8b6"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","1c9137ecdd631900eed83a120f884415"],["/photos/index.html","0364d8d89877b7160bf913de8fa1e395"],["/posts/1e2d973/index.html","d000cbfa847740ff386e573c211d80eb"],["/posts/3071f1b7/index.html","c40f24cfbc9e3717e0783dc45dcba845"],["/posts/46fad066/index.html","bcb39a03ac391d1776e8e2c3880204a7"],["/posts/4727556a/index.html","5e884df84c81bc2fa903e9d7c4a9aa48"],["/posts/66b18fb4/index.html","23c86267eaa66457079383691ef582eb"],["/posts/6a1612fa/index.html","69d15140ebc57e60cb64755447a59630"],["/posts/6a70e6ae/index.html","b6a0ee0b73b0a331c659dffa2966efac"],["/posts/6ea8b1ca/index.html","678b8dd7d613e1a55735129525c1f5fe"],["/posts/70a8dfc8/index.html","ff4d33de87a8e9c03477746ecbe78eb3"],["/posts/97b39fbe/index.html","4a09a9f322d779f50be8874710a24d0d"],["/posts/9a55744d/index.html","aabee0b2cf0f363f5082a77f3ddb6fff"],["/posts/9bbebf74/index.html","e927142ea2510376a31d99269c0b51f3"],["/posts/9ce9d2d3/index.html","0adb21946f93183e09e2d6c62007643d"],["/posts/acff3e0b/index.html","e23f67d0724ff60bf6b99b3f009b6d62"],["/posts/bd50476c/index.html","e74d48329de4e0528245b6034efb65e5"],["/posts/dcd6586c/index.html","306a1743ea98e5d5665e4e47a482c86a"],["/posts/e48c91fc/index.html","71a0a9999cd4be3a6d1f53cceae9f4d3"],["/sw-register.js","ab22dec0c2e3637bf975f05f15afc7e3"],["/tags/C-C/index.html","b62c732f19d244a18486d2368eb05bc8"],["/tags/PyTorch/index.html","c86cb13128b8f3dd573faa8654c0aba7"],["/tags/iOS/index.html","3482def6a9b246c8aa5e107ab6a51d57"],["/tags/index.html","c9b5f8f60af69b1743cf3ab81c57cd54"],["/tags/objc/index.html","df7ff2668b5107eb56eb44c6fe46ef55"],["/tags/python/index.html","3d4b5181d4dd838f1aefe0d9480556de"],["/tags/swift/index.html","98381dd6edf8c177520458dcaef0d843"],["/tags/机器学习/index.html","aaf7bf5f78b949ae0c58ca199a440b74"],["/tags/神经网络/index.html","663295a70d29bb41bc8367f553cad25f"],["/tags/程序员/index.html","89dff13894e86ac2a79894fea474b396"],["/tags/算法/index.html","7ebc97239730328eee93514cbc08c4c4"]];
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
