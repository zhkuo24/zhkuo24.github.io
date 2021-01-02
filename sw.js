/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","2f37098d86f8da26a7df271ff502e643"],["/about/index.html","ba77f54cca60dc227cf218cfb14f6a4c"],["/archives/2016/01/index.html","07cfa859470c9550ced9572a4222a2af"],["/archives/2016/07/index.html","fbf73df25ee7fc4044c29b1f7838e356"],["/archives/2016/08/index.html","83613d42e3553cff16102f8860ae0c6d"],["/archives/2016/09/index.html","b5f8e9d2e3a6d9abdd8f78190a1a21f0"],["/archives/2016/index.html","bf4c2498067838ca8d89ae3ef335d683"],["/archives/2017/08/index.html","978a11e16a36cd4308ddc2beb11eeacb"],["/archives/2017/index.html","b95481cbc02800b0f8eb562397e5e0ed"],["/archives/2019/03/index.html","1b5bb3d40a8e839dc0e5d9f6d9afc976"],["/archives/2019/index.html","4c12d046790273bac2e57abdfe2d2507"],["/archives/2020/01/index.html","a8161d4017d385ed21acd72ec894777d"],["/archives/2020/12/index.html","3dcf3f3f60787901a1fb0643a501f9ac"],["/archives/2020/index.html","296074e3fae450526751d6b629164be7"],["/archives/index.html","c55abb03bcb859fa40d25c964753d684"],["/archives/page/2/index.html","8ceb2abfdbb8603f959e59753ab2faf2"],["/books/index.html","261603aa82802e591aefcc8a32683755"],["/categories/C-C-学习笔记/index.html","af66dc4e82055f1818fa4f333caffa9e"],["/categories/Python/index.html","bf2a23c84198884794db17c5d6991910"],["/categories/iOS笔记/index.html","014d89c68b1d235acebf4b759ecb7f72"],["/categories/index.html","08568296bc009c81539ac7741a87d6d1"],["/categories/深度学习笔记/index.html","b4b0578e5166ab9bc47f7a92da2019b9"],["/categories/算法/index.html","bdda2d51025971048e22b391ac1d7a3f"],["/categories/读书笔记/index.html","6bf69c2daf50bda243619544f7cae47a"],["/css/index.css","7ea2d1a68c350dd176353c88fa84de0b"],["/css/var.css","185feddc474e03a20842985be2d06795"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","067cac1820e0cfc86ccf1de7421a2e3b"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","539b9326b3bf047063f3e7ac7ef9b1e6"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","6bc2bbacaab6ad55ea1d06ce940999d8"],["/photos/index.html","9a6ec82f4b3c5d0c5547ece6259fb390"],["/posts/1e2d973/index.html","3aeea8eab5f23d523e0398db9cc67d9b"],["/posts/3071f1b7/index.html","6ab9d72fa0c4604cc1c00ffdf1561a69"],["/posts/46fad066/index.html","fb14f10d4ccc395169e731d842d570f4"],["/posts/4727556a/index.html","38d41f1bfad633a3f1269eaf19efdaf8"],["/posts/66b18fb4/index.html","f0cb371e391705a8c1492e6dfd709859"],["/posts/6a1612fa/index.html","23a2ee7df5bc9f275a8aa1c77868bee2"],["/posts/6a70e6ae/index.html","0ffa1b06c46c0c06148e3a5e3162a322"],["/posts/6ea8b1ca/index.html","402335a910e861ba071ffcce03ac0dc1"],["/posts/70a8dfc8/index.html","83c4f98f62e54e80df52a29ee6090828"],["/posts/97b39fbe/index.html","85dbbc78708393221b805476c77eac8e"],["/posts/9a55744d/index.html","5f096ba93e9ea23db2a7ccd34b3bb888"],["/posts/9bbebf74/index.html","0b7d8d5c53fcf58d1ccf5932ddb2e73d"],["/posts/9ce9d2d3/index.html","4ba8c2784d5ce7662e7095de9cc69b4c"],["/posts/acff3e0b/index.html","6e5785f13a40a0f97d252d88770ca290"],["/posts/bd50476c/index.html","0e0f8773d0fa834d2e5c013ee9167238"],["/posts/dcd6586c/index.html","348e466d5f88a701e0aeb40a0fdf7382"],["/posts/e48c91fc/index.html","f41309b560576c243d56cb5eb8bf5960"],["/sw-register.js","58c8d3454cb1f648d57bc0e08f5465c1"],["/tags/C-C/index.html","b84fd5af5c01de5588fa6cbeefc28fc8"],["/tags/PyTorch/index.html","4f843e986de317cd9217d49af7b4dd96"],["/tags/iOS/index.html","36afa756ebb79c84c5a1de9999e9a04e"],["/tags/index.html","31cba8afe38a1be65e86117565f625ed"],["/tags/objc/index.html","928d03cbca78e2d1b9157e788100d3e8"],["/tags/python/index.html","4f3eb1ac8b17d351d5e8e5a5f20c5578"],["/tags/swift/index.html","4446c26441e7b59a3537e853406479a0"],["/tags/机器学习/index.html","c06e1c805f19661641a56b020f34e614"],["/tags/神经网络/index.html","6169e76f50c19c1307ff493770cf8ead"],["/tags/程序员/index.html","5a43228aea9337d6ca1bcdd78050c88d"],["/tags/算法/index.html","db45194f09ef25e44d8a7a12a367fbad"]];
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
