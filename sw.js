/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","8ca5ec194922dce6cd75ce141667e98c"],["/Gallery/suipai2021/index.html","cc961cec4c9799df3e310ece7f14a775"],["/about/index.html","85473fd26e7dbe3d802f745fa135852c"],["/archives/2016/01/index.html","f11365af252e23348be40c0caee1aa2c"],["/archives/2016/07/index.html","319169e8be9ace63bb5589713a50c741"],["/archives/2016/08/index.html","755eaae0d46e51a2e080f727b99969e3"],["/archives/2016/09/index.html","055efeb041d0b0febd326f7e7481713a"],["/archives/2016/index.html","c630c58f6aa778190ad8807ee6523a76"],["/archives/2017/08/index.html","23d8a437990e5fd3924d52690664c54e"],["/archives/2017/index.html","bce077fcfc066844287c8620fa387423"],["/archives/2019/03/index.html","09ad1cebc56f2906a872d8c7d4e6d220"],["/archives/2019/index.html","0578f928668618d3050d36895cdb7d24"],["/archives/2020/01/index.html","d16ff96c6cb3a79fa1594a9e265d6055"],["/archives/2020/12/index.html","c509fd031c2ce3d2d1b52dd84385faf1"],["/archives/2020/index.html","8e1cf2f9d869e9cedd14956144e5907c"],["/archives/index.html","0f49b2a57cd00f88147f9e8be28c05bd"],["/archives/page/2/index.html","c2ee054ee0a4518f6250d789e31fada1"],["/books/index.html","6aa118ce862234fcb6be5fac50df876a"],["/categories/C-C-学习笔记/index.html","a00425a6016c9910cf83c7b33b598c95"],["/categories/Python/index.html","fa1037ff9c2ee04cb0aa128968d19b43"],["/categories/iOS笔记/index.html","56d76bf2a2bdf73184678049b45fcd0f"],["/categories/index.html","4de87746b0ecad15f66a4c01f595a94c"],["/categories/深度学习笔记/index.html","bae1b54e9f88a2c8be80c5d5f70f3ecf"],["/categories/算法/index.html","b5a5fd77a446fca86d8c918b55dc8a87"],["/categories/读书笔记/index.html","8774f147df2e008368dc2980326fbf87"],["/css/index.css","35161e610796c2352ba8a53408ea3ae1"],["/css/var.css","c196c758379079112b730a74c16affee"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","293a517c538f9979020220d551368eb0"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","ee415b804d15db3f910fc35c4be49990"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","b308e0d2bbb70afdb8b7a51a72893527"],["/photos/index.html","f182c09bfa6f63b4424f42a94558f779"],["/posts/1e2d973/index.html","7631bdd4de9bd0d975e165831300a608"],["/posts/3071f1b7/index.html","dff5fc9ecc355ce21a11cc5e412da88d"],["/posts/46fad066/index.html","e5f8ba2be4e80f558f2482d027445e5d"],["/posts/4727556a/index.html","19401e2918beed4f60a19196cd9f3653"],["/posts/66b18fb4/index.html","8a52e5abab2ae9f50af6b30ca7c51002"],["/posts/6a1612fa/index.html","ed9434f5148a2891ccb0c62f2c9d5f50"],["/posts/6a70e6ae/index.html","323301f3383b0cd918b7cef104e7d1f4"],["/posts/6ea8b1ca/index.html","1e29e848a088329140c5d586cccecea2"],["/posts/70a8dfc8/index.html","d4c83c595451fdeefe82086dd7834556"],["/posts/97b39fbe/index.html","36b7a7d5ce61173f92b9df8dcc0cf597"],["/posts/9a55744d/index.html","a68dfd2cc6a1ed3ed60c386363f31ef7"],["/posts/9bbebf74/index.html","d965046823e3b0f94cf98fb948c10408"],["/posts/9ce9d2d3/index.html","35cb84b66b7d7bedb0e650c55fd8f003"],["/posts/acff3e0b/index.html","7b2388d59b75674ac0df66dd225bf625"],["/posts/bd50476c/index.html","ba817970fa2245869a08ddd43efc4e60"],["/posts/dcd6586c/index.html","5c9767166356265079c02d44c94ca9dc"],["/posts/e48c91fc/index.html","e81a0ddbcddda87c22b2fe371f89c72f"],["/sw-register.js","90b8feee942a59d1645819cca25e9aa3"],["/tags/C-C/index.html","4b92191b527c44a6bcb1dad3c0316fc6"],["/tags/PyTorch/index.html","7cc43d8fa12c3b86156111ef67ba7511"],["/tags/iOS/index.html","744961083ea247582162bbd052daeaeb"],["/tags/index.html","38b1336abdb5caf78ce5002c4e9acba0"],["/tags/objc/index.html","84a33828c89e7ffa0ee7e73b0b0cca5d"],["/tags/python/index.html","5cadf64b65d2d743b80321cbfa49a3ef"],["/tags/swift/index.html","d1b948315bc6b65b350314cedfd7fcfb"],["/tags/机器学习/index.html","1c4254e516704fc213064ffcc26b4df8"],["/tags/神经网络/index.html","e93532effbd79ee673bda980a37644aa"],["/tags/程序员/index.html","7563d8c54e2830dd385d7a5688e8fa59"],["/tags/算法/index.html","17cd1d707a6d49d3bab93e292fc11858"]];
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
