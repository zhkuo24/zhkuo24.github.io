/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","afbccd2fd39a488415b336d9d6115951"],["/Gallery/suipai2021/index.html","f2b7655755eb9359067dacbadcd65a53"],["/Gallery/suipai2022/index.html","51965f58eea9e369a916fb2720d639fc"],["/about/index.html","5d6daa7bbd9b5d4e933bb0ccd016bf4c"],["/archives/2016/01/index.html","f015c95dc7fa0fd152a7893c36953b1c"],["/archives/2016/07/index.html","34a393a7524a6a5694dd25ba97764ad5"],["/archives/2016/08/index.html","cf1e43a19eecf68ae5d1d3095b8fe240"],["/archives/2016/09/index.html","249d00d531170fe2119812d434feff80"],["/archives/2016/index.html","0ef86fd62a2d32d53ab9cb95a495fc15"],["/archives/2017/08/index.html","a431cb039cbbd986c3b8e38a41228639"],["/archives/2017/index.html","d45b01555c468f02b148fda2f18bbc81"],["/archives/2019/03/index.html","8fb3206b987e79b68b13cf5e7a0cb366"],["/archives/2019/index.html","e1230ae7183028bd6a25efeeefd890db"],["/archives/2020/01/index.html","53633c35426c452c4d05d6240317c385"],["/archives/2020/12/index.html","8db97ff6e0cdb57ed0cba53ecedc01ec"],["/archives/2020/index.html","661bb5bfd0c3a2059f9880f7fdb8edf0"],["/archives/index.html","fa2c3011a198643bc8ed8d5fdb206874"],["/archives/page/2/index.html","845999dcd3235953651adb152e701a62"],["/books/index.html","8939f45377c5cfecebb38a14c7bc1b27"],["/categories/C-C-学习笔记/index.html","2deb5b3d4a47a0d6ccdcdbcdf171d2f7"],["/categories/Python/index.html","6e24eb54d335fd4799865170bb0c391f"],["/categories/iOS笔记/index.html","c6fc619733cb7f4e81dc5061891022db"],["/categories/index.html","4c21ebebe6cf8e9a2111edc7055d7276"],["/categories/深度学习笔记/index.html","e52f405d9ce45b0f7253711aff4d7112"],["/categories/算法/index.html","ab68b5418fd2cf0be8a03dede225e974"],["/categories/读书笔记/index.html","49cd033b6d11475d08f7735555cd9951"],["/css/index.css","7aa8a14663efd67684f0908df0887981"],["/css/var.css","3a9f1169ca14f23f5627bee4fab71bee"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","05f35377ac6d99361c62e483ea31b826"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","4da97f0b2f96c5673e73b366a18d1a72"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","e9c20f8d510746ab9384e55ed4bf4fbd"],["/photos/index.html","6f49037025672435e2b683e5e951f250"],["/posts/1e2d973/index.html","96acba62d389aed7c15930ed23665ca7"],["/posts/3071f1b7/index.html","12bb6d72f21959c196141f7571811ae9"],["/posts/46fad066/index.html","ef9d1bc8e2916dadd68891f69e62c31e"],["/posts/4727556a/index.html","9be4142a7576464100f34d79f8731d6e"],["/posts/66b18fb4/index.html","7f9062d0498872be4d17310c65bfd8ca"],["/posts/6a1612fa/index.html","4f3300bf887715f9d963a6ae5b8c79eb"],["/posts/6a70e6ae/index.html","be3a169159648ae9fd096e8d6df4c58c"],["/posts/6ea8b1ca/index.html","16e07b38b1aa477ed58646c35717e1ac"],["/posts/70a8dfc8/index.html","e1df1e5d81020445a4db2b4bc78abda9"],["/posts/97b39fbe/index.html","3886441edb3005394d387c3295e0569e"],["/posts/9a55744d/index.html","d505e9c7e5a1ff58fc01d88bfe92b8f1"],["/posts/9bbebf74/index.html","960314fd97fcb996970564af9c5ab4e5"],["/posts/9ce9d2d3/index.html","db349fd7c58ff13221cef7b2978aa921"],["/posts/acff3e0b/index.html","d9fe129e30b0bf7ad859aa6b9b315172"],["/posts/bd50476c/index.html","62dce2ea83c7f16fb3848926c933e9fc"],["/posts/dcd6586c/index.html","dfb30dda7f99cc437c65b1703f01c7b6"],["/posts/e48c91fc/index.html","72fbc7bac4fbc9b2f77c932ee4e576b1"],["/sw-register.js","22689ef9921fd19fbb2663cbade0e286"],["/tags/C-C/index.html","f9d2de3beafa727cb29ccdd52f4854d4"],["/tags/PyTorch/index.html","cbd1649278f8ac121f7f313982176841"],["/tags/iOS/index.html","27b5e1ea7552e22f95b4534a06fcf3f8"],["/tags/index.html","aa71744db9fb19f9dd51a666544351b2"],["/tags/objc/index.html","0b8c4000ff95809dad0fa3ecbb88c292"],["/tags/python/index.html","2bc5a8fe7dd968b8a64b95b081d73a8a"],["/tags/swift/index.html","e077f27193b79685abf86f85361cfeaf"],["/tags/机器学习/index.html","0138d1047976ce570e62bd747d54cbe1"],["/tags/神经网络/index.html","6d7c11d9aaf8661a41254fad71515c67"],["/tags/程序员/index.html","319f449264c8d2c966323d1ba53ab7fc"],["/tags/算法/index.html","7ccfcb69eaca9da5b9226121d78102f6"]];
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
