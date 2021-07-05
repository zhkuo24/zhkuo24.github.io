/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","f356af40914c07b389af793868589673"],["/Gallery/suipai2021/index.html","cdf9cbac88173d4aff98babe1a93d09d"],["/about/index.html","bc1178dd126a494eab7971b2e3deb86f"],["/archives/2016/01/index.html","ff3ee40c9f8eebefed6012d688f1a15f"],["/archives/2016/07/index.html","b6766b1442ccdd5dc61b9344e9ae5240"],["/archives/2016/08/index.html","57fcb0d4ea2c2a4c6b8edcd63afd6c1a"],["/archives/2016/09/index.html","2fcd707483fbe75454eee88e467529df"],["/archives/2016/index.html","470b51406e7b0f27e368dc7b5c83c40a"],["/archives/2017/08/index.html","e76495a363738be9923a73444be932c8"],["/archives/2017/index.html","b7cdfef6d803c37f41309a383683a298"],["/archives/2019/03/index.html","8f5e317ce49d420ce3dd1d8967013d34"],["/archives/2019/index.html","a628f56c21459970e9c4208fb1405c28"],["/archives/2020/01/index.html","c15060d441889d66cc0f85dc062601ee"],["/archives/2020/12/index.html","4e289dedafc811ac1d595cf4e899ff8b"],["/archives/2020/index.html","6e03261794f2b8aba1d18b80708b83b0"],["/archives/index.html","e86c8b23942c5e779d5ae73554d3d2eb"],["/archives/page/2/index.html","b6d571d4201d7f83cec97995aa29556e"],["/books/index.html","e361e431f241af33851745b2b0cf8454"],["/categories/C-C-学习笔记/index.html","bd6a41c8d93e6280eb61b27a28f747a5"],["/categories/Python/index.html","170b9124c350eb067a5fd122adb81622"],["/categories/iOS笔记/index.html","0d7336bac7b6d6b1ed9d87ef737c9f90"],["/categories/index.html","4b9c31687ce2e573d1c15a66b4420145"],["/categories/深度学习笔记/index.html","5a8bc195257e193935478d66eed8e39e"],["/categories/算法/index.html","90e0a6af9a3bad77dab329c3b6c02100"],["/categories/读书笔记/index.html","e9497771da1422339e52cd70abba8480"],["/css/index.css","c39bb940d49da5bfc451b1e505d5af80"],["/css/var.css","3bbe5a22860950e5c6c3fc3a45604e9f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","60eecddf4439ec392314e6f0b7cfb2a0"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","56a991461f9348059802d2e6403ddc3c"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","14d3132ea1a381dec8789d342d58ddc2"],["/photos/index.html","76d3554ba7349c6986b6a8f8e5e1e5df"],["/posts/1e2d973/index.html","7631bdd4de9bd0d975e165831300a608"],["/posts/3071f1b7/index.html","dff5fc9ecc355ce21a11cc5e412da88d"],["/posts/46fad066/index.html","e5f8ba2be4e80f558f2482d027445e5d"],["/posts/4727556a/index.html","19401e2918beed4f60a19196cd9f3653"],["/posts/66b18fb4/index.html","8a52e5abab2ae9f50af6b30ca7c51002"],["/posts/6a1612fa/index.html","ed9434f5148a2891ccb0c62f2c9d5f50"],["/posts/6a70e6ae/index.html","323301f3383b0cd918b7cef104e7d1f4"],["/posts/6ea8b1ca/index.html","1e29e848a088329140c5d586cccecea2"],["/posts/70a8dfc8/index.html","d4c83c595451fdeefe82086dd7834556"],["/posts/97b39fbe/index.html","36b7a7d5ce61173f92b9df8dcc0cf597"],["/posts/9a55744d/index.html","a68dfd2cc6a1ed3ed60c386363f31ef7"],["/posts/9bbebf74/index.html","d965046823e3b0f94cf98fb948c10408"],["/posts/9ce9d2d3/index.html","35cb84b66b7d7bedb0e650c55fd8f003"],["/posts/acff3e0b/index.html","7b2388d59b75674ac0df66dd225bf625"],["/posts/bd50476c/index.html","ba817970fa2245869a08ddd43efc4e60"],["/posts/dcd6586c/index.html","5c9767166356265079c02d44c94ca9dc"],["/posts/e48c91fc/index.html","e81a0ddbcddda87c22b2fe371f89c72f"],["/sw-register.js","8402fa0a6b8e88a7350264bcc2cba61b"],["/tags/C-C/index.html","85efcf4c604d478d3bd0904004f2d3cf"],["/tags/PyTorch/index.html","fbdd5867c346592139ebeb02240e3bed"],["/tags/iOS/index.html","aa1661060b90840c3a4788a6053c4244"],["/tags/index.html","aa4cdea0aa56d536330ad77d2c4cb6e0"],["/tags/objc/index.html","5694df9dc7527892174cb12ccc2ca4de"],["/tags/python/index.html","6bd7a357cda113ab6ed25f8b42d6ca3a"],["/tags/swift/index.html","9613e8f150f2f3b111824b0e06be245c"],["/tags/机器学习/index.html","bcff4f57d332d8a7957cbb77cfa087e4"],["/tags/神经网络/index.html","fae1204ddcf8060229ced62d50cb071f"],["/tags/程序员/index.html","4c4253901b24e4a1e5b57e206e606383"],["/tags/算法/index.html","ce727c001634f237a351957b81a4841a"]];
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
