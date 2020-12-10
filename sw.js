/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","b512cca962c64a454bef3e0ccdf38db3"],["/about/index.html","809339c60d77b80251a7d4ac347a91ae"],["/archives/2016/01/index.html","b7e967c71cd8619d4f857850559f9b0f"],["/archives/2016/07/index.html","e02200747d23e7ae3493f9640423ab16"],["/archives/2016/08/index.html","27575a89103b1f44a4fab5ece6d4aa81"],["/archives/2016/09/index.html","ebbf1fb2a939aadbce4a631d882fb644"],["/archives/2016/index.html","5e3b796ae0bb3f304a9c79b1ddb5e85e"],["/archives/2017/08/index.html","cffe3c65a4dfa46f8ba3fa246bace331"],["/archives/2017/index.html","f6e8a9380110cf142201cdc16552cd4b"],["/archives/2019/03/index.html","07e8338b2f1e0b8ee48dd059a6288937"],["/archives/2019/index.html","f23cf2f5c977618ccef25cc6fea05a01"],["/archives/2020/01/index.html","3d3f792b3813309a475edce94ace4d0f"],["/archives/2020/12/index.html","77ba520fe1621bd5140dc287539682cd"],["/archives/2020/index.html","53cc06105007d8b96d72beb7619c3943"],["/archives/index.html","700e5ecfaa13ecd5630c457ae900da75"],["/archives/page/2/index.html","96e3e09efed194999500943a2b2bb44b"],["/books/index.html","88b44ec95819a8dd8be83fe632895919"],["/categories/C-C-学习笔记/index.html","75380d9f3a716e4341cc9dd64c7bb305"],["/categories/Python/index.html","10985ba2a012e85b5c41c4a2e3f62c34"],["/categories/iOS笔记/index.html","d65a090f4118c0f8fd7c1a91db2ba587"],["/categories/index.html","f69bff241eac649569bd3783229889f3"],["/categories/深度学习笔记/index.html","4a9d607d4f89d12e8ffb33905ec67a9b"],["/categories/算法/index.html","d3c03343ba690d520bbd4bdc59e14d32"],["/categories/读书笔记/index.html","339edff8b865dc237809c02485e4c8a8"],["/css/index.css","7f158437d3538ef1bd09f2f12aa42828"],["/css/var.css","2ec2f1bb6e22b3d59f193d353b51e87b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b64ca8c5ff82e77c4bcc0393393d87ce"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","7ef64698e8e885fdf9f1c63cf89f6dbb"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","9a173c2c7c94f81f4443f5c4f81bdeaa"],["/photos/index.html","692ba17d70ea3a90a7906a53951c5cd0"],["/posts/1e2d973/index.html","75b44d8f29a1dcf48fae23132aaf5b28"],["/posts/3071f1b7/index.html","0d1c73ee4d9e7a52b20d39c46d73c25d"],["/posts/46fad066/index.html","1b8ddb5cd889e3838549f3af48987f5c"],["/posts/4727556a/index.html","d1e60acc97706b384cfdd511b9b10a22"],["/posts/66b18fb4/index.html","e5d789d4975fbc64ce4037afc84a033e"],["/posts/6a1612fa/index.html","17110fcf113d5e90b14e13b6d305647d"],["/posts/6a70e6ae/index.html","b421be990e04ac63dd23696178442a5c"],["/posts/6ea8b1ca/index.html","a83bd6eb383d783f12ecaf73f35dcbf1"],["/posts/70a8dfc8/index.html","ba830667d521cc6aa29c229a1ed3501d"],["/posts/97b39fbe/index.html","78f064d5c73a9becfd9daf2e381d9880"],["/posts/9a55744d/index.html","c927e52f1988bb48e09d8edd4260383a"],["/posts/9bbebf74/index.html","ce14faf42b0a42b157fcfeaf57fe2207"],["/posts/9ce9d2d3/index.html","1d9e39512ad50acb199757f9ca727519"],["/posts/acff3e0b/index.html","12f2ce334bfc42276c0b41a36a46bf86"],["/posts/bd50476c/index.html","4635c0339188ec5b7c9f178092444656"],["/posts/dcd6586c/index.html","29255a2231aafb61e5623073dec2e716"],["/posts/e48c91fc/index.html","4966f991fb97f8a0e4f8df7bab7f5452"],["/sw-register.js","f9ccad0fbeed20afbfd4f0cb3dcbb5b1"],["/tags/C-C/index.html","0400eafca25ab1db2199309a06eb2033"],["/tags/PyTorch/index.html","7d197f82e661fb2455e7323838f4aefd"],["/tags/iOS/index.html","ab5c049c353c83cc2474cea32c2c208a"],["/tags/index.html","a11e8595912e78103b947c4809c9f330"],["/tags/objc/index.html","a1c9a32308955b2a14ad104a2723af87"],["/tags/python/index.html","7380d1e6626c1cf4928b25297dc47ebe"],["/tags/swift/index.html","7476c44d269f35627126d12f2637d2b7"],["/tags/机器学习/index.html","19ecb2e3b03673b2aea103ac98e7797e"],["/tags/神经网络/index.html","3f21418a552df08262e58a00f6d5418d"],["/tags/程序员/index.html","4a7c6c3c957662553f2f8b4e336f2498"],["/tags/算法/index.html","9cff2cfa2f4a6c7bcf2c3e0818c9ef33"]];
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
