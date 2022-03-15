/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","721b80e4463337afc17b548c3a9dc389"],["/Gallery/suipai2021/index.html","176e16a45318a93d52243e98f0ddfbcf"],["/Gallery/suipai2022/index.html","7e564272626c07bfa523197e8d916865"],["/about/index.html","aa7d9416ef885ff81a187551a8f014d9"],["/archives/2016/01/index.html","f70a88481cadae64d7e14bc634f1da91"],["/archives/2016/07/index.html","ec82d670d0cf90d25366b61ab328dc01"],["/archives/2016/08/index.html","60d7711889e8c4725adcd5b46631b177"],["/archives/2016/09/index.html","80d39693ea52e9e3ec575f9e72fc31fe"],["/archives/2016/index.html","471985dc0c8bead76247e13b95755dca"],["/archives/2017/08/index.html","edeba5fd6ed72335a58992f22e172ed0"],["/archives/2017/index.html","c75597820ab03fc0634ea96da6f2d94b"],["/archives/2019/03/index.html","5e9cbffb0bda3b77a3b4cc8c52c79b0b"],["/archives/2019/index.html","932f806f84dca8c2cdc9a96c846900bc"],["/archives/2020/01/index.html","9ad8b3a4e0bac20f0d028c4e7d4c8754"],["/archives/2020/12/index.html","4762f2b3424c112d0bbf9a36df5d5538"],["/archives/2020/index.html","c9396736f30a46aa1e9de5b2b2f39fae"],["/archives/index.html","0b5e4c6fe292a864e259095eb8736cca"],["/archives/page/2/index.html","3c0e778e2ee4d4b6c49f8ccff3ba56fd"],["/books/index.html","88ab445ac05ec6fc4ad6734d7521205d"],["/categories/C-C-学习笔记/index.html","a65a87fad5b092baaf914ee7d37aca26"],["/categories/Python/index.html","ce4901ab83ad371e53b7ecf8138d0483"],["/categories/iOS笔记/index.html","748cf1a83d4f187124ca547395410bfd"],["/categories/index.html","cfe6a9406adfbde3a2d65d7fc8d914ba"],["/categories/深度学习笔记/index.html","4af9e5889a3b36c2769af5861d935dda"],["/categories/算法/index.html","6f9fa3e488c2d1b77dce2cb8b63d2bbd"],["/categories/读书笔记/index.html","7f7e463735234264c784267fc1ff0bd8"],["/css/index.css","7aa8a14663efd67684f0908df0887981"],["/css/var.css","3a9f1169ca14f23f5627bee4fab71bee"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a87533040d79a70fb552c9c77fc1e6fb"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","3384c380bdef7ed8d6c249585a0f5bc6"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","4b631fc1547ec2f30f4008268e381174"],["/photos/index.html","dc9a3224d3b7174a3a7470ac34206fee"],["/posts/1e2d973/index.html","be0ea5fc3afa9e346776baac24eaa485"],["/posts/3071f1b7/index.html","8eb51555546735b837b42376d9756a59"],["/posts/46fad066/index.html","786e9b29e63e3f8e29cc2999babceab9"],["/posts/4727556a/index.html","74822c6532a7c0530252b9356ac658ea"],["/posts/66b18fb4/index.html","c4f14c6f918c65244714e9b9fdbaa3ed"],["/posts/6a1612fa/index.html","c9db1f0cc38d674d89afad0e570e34a4"],["/posts/6a70e6ae/index.html","85abcde472d5ec51ba2494771c16250e"],["/posts/6ea8b1ca/index.html","f45b3e634addf685d03809a47d550455"],["/posts/70a8dfc8/index.html","df33b0de39431aeca18ae1d3c9ca7b96"],["/posts/97b39fbe/index.html","5af35b355a4f0bea956078c213afae74"],["/posts/9a55744d/index.html","cffbbec0e8482520e4e6af9430027b31"],["/posts/9bbebf74/index.html","dbc00b94c11257f2fac46aabf0ad74f3"],["/posts/9ce9d2d3/index.html","d6c768526dc079cc546859ac65e71aca"],["/posts/acff3e0b/index.html","b5737c3e975f0ebb35efe03c21204190"],["/posts/bd50476c/index.html","bef9e3935e3edc7de9f5d35088c4b447"],["/posts/dcd6586c/index.html","69a21afc23b67158d97a9956617069cb"],["/posts/e48c91fc/index.html","cabcf1031fb1692e11fe9f085999d856"],["/sw-register.js","cbe10ebe47473f55c8a0f66005418911"],["/tags/C-C/index.html","808a5e75475042541eb5a7c27398dc9f"],["/tags/PyTorch/index.html","e2e826952354cfeb5e93b52eef78e308"],["/tags/iOS/index.html","58746ffa0c9e929b429411f0b60cfd9b"],["/tags/index.html","ae368d39017c3fd145d511ca534e57eb"],["/tags/objc/index.html","c90b7e04c0c8f29549b1ffecdcb2f243"],["/tags/python/index.html","d2990f5f09f39879b5985cb6b21667ad"],["/tags/swift/index.html","2e278dc9100454c8100b11cc0ae5aab2"],["/tags/机器学习/index.html","de8d3a801244b8ca01778ede0c43be68"],["/tags/神经网络/index.html","e952dff2aadea8ad52b5bfa4b3b2f712"],["/tags/程序员/index.html","f69fa21d29d0bebfd373cb78217101b9"],["/tags/算法/index.html","9a297b94ec1eb0c61edc2ded7ddaab46"]];
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
