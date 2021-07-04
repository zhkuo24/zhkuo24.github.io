/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","e46aeda1bb36c29646a665311c2d32d0"],["/Gallery/suipai2021/index.html","3ac80eebb5ac24475059c1d1c295c00d"],["/about/index.html","5b8d1c990da461e2ee62634b1ba25db8"],["/archives/2016/01/index.html","86d7dadb83bd4da2386ea59813f16bf3"],["/archives/2016/07/index.html","c5e8d0e2ce66e23a81ad31087730ab42"],["/archives/2016/08/index.html","2d5a7d5bbc315cfceff0b83dac3ea57f"],["/archives/2016/09/index.html","95ef2700843ae3e24fe447de304d860c"],["/archives/2016/index.html","f882c3dfb34e22396432b104b0461023"],["/archives/2017/08/index.html","ea64147e6b2f577136e42407c07089bf"],["/archives/2017/index.html","98da167aecf55dbbbb961727a19bcf5d"],["/archives/2019/03/index.html","8c025e6b7c28a16778817f8cadadace7"],["/archives/2019/index.html","7c25add86ffecf3ce80e190a69f1798b"],["/archives/2020/01/index.html","8b311770cd7344e347c27e5ed6e478ab"],["/archives/2020/12/index.html","11f0103caf3294393f05cc5e3c1682b6"],["/archives/2020/index.html","bf6cdffd67727d042853db3e38246d98"],["/archives/index.html","90693e291176290810f1a8cef6b25438"],["/archives/page/2/index.html","316fed2528a6d832abfe7ad0235a7e84"],["/books/index.html","18a24f3e484d79ca16035a8236f6d271"],["/categories/C-C-学习笔记/index.html","14436c16b96a538b3e7e951f544f727e"],["/categories/Python/index.html","4930c523748a8a9be2cd2d359a9a1585"],["/categories/iOS笔记/index.html","addab68ee69fcfd64f906cee6965ee09"],["/categories/index.html","dc21240da5bf7b301a69de4194888808"],["/categories/深度学习笔记/index.html","5ef03058c88c5569f6a58ffaf937d754"],["/categories/算法/index.html","8988278a5aff14cb8375dcef9b73a612"],["/categories/读书笔记/index.html","cc900624c84d683837aff74be2147878"],["/css/index.css","c39bb940d49da5bfc451b1e505d5af80"],["/css/var.css","3bbe5a22860950e5c6c3fc3a45604e9f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","cabdda94cd7ac66647de979ba2dc2631"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","3c7ba11c2609d9ed4f9daf16ab9d84a5"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","7775f0ed63040c3eeaa45abb86a12568"],["/photos/index.html","808307ebd03b53d3dd650c00f77fdb03"],["/posts/1e2d973/index.html","956f8036f67114910d893451f6ac84fd"],["/posts/3071f1b7/index.html","7d12e41ff1095cb35f08958080e52337"],["/posts/46fad066/index.html","67d19b1bf72816284eca7d0a971d10d1"],["/posts/4727556a/index.html","7213872686faf90dd345275e95bcdd6b"],["/posts/66b18fb4/index.html","b5c133b5434f9a6f692dbbd663708a56"],["/posts/6a1612fa/index.html","85fbffd1806a100fd535ea95adf48344"],["/posts/6a70e6ae/index.html","f230ac9f56ab043247c67857a98b5e69"],["/posts/6ea8b1ca/index.html","89fe2aec800115773872192e23f105d3"],["/posts/70a8dfc8/index.html","be4258ede9427e058160d9161a1c32cd"],["/posts/97b39fbe/index.html","76f1ad8090c7f3227261e87fbc51b87c"],["/posts/9a55744d/index.html","5728210e514f7e085dae273639ff08b3"],["/posts/9bbebf74/index.html","3a4f4818dadaba35ca8135305f42db36"],["/posts/9ce9d2d3/index.html","b4354e435bd91f9f8311e50d6e133e4e"],["/posts/acff3e0b/index.html","da78482b04920f3279cecff157333611"],["/posts/bd50476c/index.html","d2837de209d51b0c1820bc6510d3259c"],["/posts/dcd6586c/index.html","fca52fa349aba97bc158a4232ba15cc9"],["/posts/e48c91fc/index.html","78e6e37cec194d5c437240555cfbf178"],["/sw-register.js","d91d3bc48567583081ea22957229dcee"],["/tags/C-C/index.html","c868c8c7c0c8611e9037494f75c74f77"],["/tags/PyTorch/index.html","30834e127f993c41e4e5bb98e8c31b09"],["/tags/iOS/index.html","73d01b4bf7711dd2fa54b39ea2079de0"],["/tags/index.html","ceb7261c8d3da472fe8799300183beef"],["/tags/objc/index.html","598eee91d0dbc5e22de894d9d2eea09c"],["/tags/python/index.html","56b7850b8786ffb80fb8151430bab0af"],["/tags/swift/index.html","14a966e8d4364b80e688d017e6aa6609"],["/tags/机器学习/index.html","6420801be61ddf3fb5474ca9e2d23adb"],["/tags/神经网络/index.html","15e52b9fc45c0eed0073542432464489"],["/tags/程序员/index.html","6f8e23f0294d463d221f4cc8872eca02"],["/tags/算法/index.html","3a3d26ca37e14665704cdb0a4342c938"]];
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
